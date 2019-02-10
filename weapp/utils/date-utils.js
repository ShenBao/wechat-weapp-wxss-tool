
function getTimeFormat(time, format) {
  var t = new Date(time);
  var tf = function (i) { return (i < 10 ? '0' : '') + i };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;
      case 'MM':
        return tf(t.getMonth() + 1);
        break;
      case 'mm':
        return tf(t.getMinutes());
        break;
      case 'dd':
        return tf(t.getDate());
        break;
      case 'HH':
        return tf(t.getHours());
        break;
      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  })
}

function endTimeFormat(time, day) {

  let nowTime = Date.now();
  let gap = time - nowTime;

  let s = 1000;
  let m = s * 60;
  let h = m * 60;

  let hh = parseInt(gap / h);
  let mm = parseInt((gap % h) / m);
  let ss = parseInt((gap % m) / s);
  mm = mm >= 10 ? mm : '0' + mm;
  ss = ss >= 10 ? ss : '0' + ss;

  let dd = parseInt(hh / 24);
  let dayHh = hh % 24;

  if (day) {
    let flag = nowTime > time ? false : true;
    let obj = {
      dd,
      hh: dayHh,
      mm,
      ss,
      flag
    }
    return obj;
  }
  return `${hh}:${mm}:${ss}`;
};

module.exports = {
  getTimeFormat,
  endTimeFormat,
}