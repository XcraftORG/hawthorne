// Generated by CoffeeScript 2.1.1
(function() {
  // original code from davesag
  // http://jsfiddle.net/davesag/qgCrk/6/
  var mutegag__toggle, parseDuration, submit, toDurationString, to_seconds;

  to_seconds = function(dd, hh, mm) {
    var d, h, m, t;
    d = parseInt(dd);
    h = parseInt(hh);
    m = parseInt(mm);
    if (d == null) {
      d = 0;
    }
    if (h == null) {
      h = 0;
    }
    if (m == null) {
      m = 0;
    }
    // if (isNaN(d)) d = 0
    // if (isNaN(h)) h = 0
    // if (isNaN(m)) m = 0
    t = d * 24 * 60 * 60 + h * 60 * 60 + m * 60;
    return t;
  };

  // expects 1d 11h 11m, or 1d 11h,
  // or 11h 11m, or 11h, or 11m, or 1d
  // returns a number of seconds.
  parseDuration = function(sDuration) {
    var days, drx, hours, hrx, minutes, morx, mrx, wrx, yrx;
    if (sDuration === null || sDuration === '') {
      return 0;
    }
    mrx = new RegExp(/([0-9][0-9]?)[ ]?m(?:[^o]|$)/);
    hrx = new RegExp(/([0-9][0-9]?)[ ]?h/);
    drx = new RegExp(/([0-9]{1,2})[ ]?d/);
    wrx = new RegExp(/([0-9][0-9]?)[ ]?w/);
    morx = new RegExp(/([0-9][0-9]?)[ ]?mo/);
    yrx = new RegExp(/([0-9][0-9]?)[ ]?y/);
    days = 0;
    hours = 0;
    minutes = 0;
    if (morx.test(sDuration)) {
      days += morx.exec(sDuration)[1] * 31;
    }
    if (mrx.test(sDuration)) {
      minutes = mrx.exec(sDuration)[1];
    }
    if (hrx.test(sDuration)) {
      hours = hrx.exec(sDuration)[1];
    }
    if (drx.test(sDuration)) {
      days += drx.exec(sDuration)[1];
    }
    if (wrx.test(sDuration)) {
      days += wrx.exec(sDuration)[1] * 7;
    }
    if (yrx.test(sDuration)) {
      days += yrx.exec(sDuration)[1] * 365;
    }
    return to_seconds(days, hours, minutes);
  };

  // outputs a duration string based on
  // the number of seconds provided.
  // rounded off to the nearest 1 minute.
  toDurationString = function(iDuration) {
    var d, h, m, result;
    if (iDuration <= 0) {
      return '';
    }
    m = Math.floor((iDuration / 60) % 60);
    h = Math.floor((iDuration / 3600) % 24);
    d = Math.floor(iDuration / 86400);
    result = '';
    if (d > 0) {
      result = result + d + 'd ';
    }
    if (h > 0) {
      result = result + h + 'h ';
    }
    if (m > 0) {
      result = result + m + 'm ';
    }
    return result.substring(0, result.length - 1);
  };

  mutegag__toggle = function(that) {
    var i, j, len, ref, results, state;
    ref = that.children;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      state = i.getAttribute('class');
      if (state.match(/gray/)) {
        state = state.replace('gray', '');
        state += 'red selected';
      } else {
        state = state.replace('red', '');
        state = state.replace('selected', '');
        state += 'gray';
      }
      state = state.replace('  ', ' ');
      results.push(i.setAttribute('class', state));
    }
    return results;
  };

  submit = function(that, success = true, cleanup = false) {
    var state;
    state = that.getAttribute('class');
    if (!state.match(/animated/)) {
      return false;
    }
    if (success && !state.match(/success/)) {
      state += ' success explicit green';
    }
    if (!success && !state.match(/fail/)) {
      state += ' fail explicit red';
    }
    if (cleanup) {
      state = state.replace(/explicit/g, '');
      state = state.replace(/green/g, '');
      state = state.replace(/red/g, '');
      state = state.replace(/fail/g, '');
      state = state.replace(/success/g, '');
      state = state.replace(/(\s+)/g, ' ');
    }
    return that.setAttribute('class', state);
  };

  window.style = {
    duration: {
      parse: parseDuration,
      string: toDurationString
    },
    mutegag: {
      toggle: mutegag__toggle
    },
    submit: submit
  };

  $().ready(function() {
    window.cache = {};
    return window.endpoint = fermata.json("/api/v1");
  });

}).call(this);
