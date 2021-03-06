import os

from django.http import HttpResponse
from django.shortcuts import render
from functools import partial
from multiprocessing import Pool, cpu_count

from panel.settings import PAGE_SIZE


def walk(d, scope, answer=None, so_far=None):
  if so_far is None:
    so_far = []

  if answer is None:
    answer = []

  for k, v in d.items():
    if k == scope:
      answer.append(so_far + [k])
    if isinstance(v, dict):
      walk(v, scope, answer, so_far + [k])

  return answer


def delete_key(d, scope):
  for path in walk(d, scope):
    dd = d
    while len(path) > 1:
      dd = dd[path[0]]
      path.pop(0)
    dd.pop(path[0])


__all__ = []
for file in os.listdir(os.path.dirname(os.path.realpath(__file__))):
  if file.endswith(".py") and file != '__init__.py':
    __all__.append(file[:-3])


def wrapper(target, func=None, *args, **kwargs):
  try:
    target.executed = func(target, *args, **kwargs)
  except Exception as e:
    target.executed = {}
    target.exception = e

  return target


def renderer(request, template, obj, page,
             extra=[], size=PAGE_SIZE, execute=None, overwrite=False,
             payload={}):
  data = obj[(page - 1) * size:page * size]
  data = list(data)

  if execute and callable(execute):
    for k in range(len(data)):
      try:
        data[k].executed = execute(data[k], user=request.user)
      except Exception as e:
        data[k].executed = {}
        data[k].exception = e

  if page == 1:
    data.extend(extra)

  if len(data) > 0:
    if overwrite:
      return render(request, template, {'data': data, **payload})

    return render(request, 'skeleton/wrappers/pagination.pug', {'data': data,
                                                                'template': template,
                                                                **payload})
  else:
    return HttpResponse('', status=416)
