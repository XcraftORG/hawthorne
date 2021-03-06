from socket import gethostbyname, gethostname

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',

        'NAME': 'hawthorne',
        'USER': 'root',
        'PASSWORD': '',

        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'sql_mode': 'STRICT_ALL_TABLES',
            'charset': 'utf8mb4',
        }
    }
}

DEBUG = False
STATIC_PRECOMPILER_DISABLE_AUTO_COMPILE = not DEBUG

DEMO = False
REDISCACHE = 'localhost:6379'
SOCIAL_AUTH_STEAM_API_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
STATIC_ROOT = '/local/static'

ALLOWED_HOSTS = [gethostname(), gethostbyname(gethostname())]
ROOT = 'root'

# generate me baby
SECRET_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
