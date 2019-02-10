
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
}

// m转换km 返回 1.2 
const mToKm = (distance) => {
  let distanceKm = (parseInt(distance / 100) / 10).toFixed(1);
  return distanceKm;
}

const removeArrayIndex = (array, index) => {
  if (index <= (array.length - 1)) {
    for (var i = index; i < array.length; i++) {
      array[i] = array[i + 1];
    }
  } else {
    throw new Error('超出最大索引！');
  }
  array.length = array.length - 1;
  return array;
}


function deepClone(data) {
  var obj = {};
  var originQueue = [data];
  var copyQueue = [obj];
  var visitQueue = [];
  var copyVisitQueue = [];
  while (originQueue.length > 0) {
      var _data = originQueue.shift();
      var _obj = copyQueue.shift();
      visitQueue.push(_data);
      copyVisitQueue.push(_obj);
      for (var key in _data) {
          var _value = _data[key]
          if (typeof _value !== 'object') {
              _obj[key] = _value;
          } else {
              var index = visitQueue.indexOf(_value);
              if (index >= 0) {
                  _obj[key] = copyVisitQueue[index];
              } else {
                  originQueue.push(_value);
                  _obj[key] = {};
                  copyQueue.push(_obj[key]);
              }
          }
      }
  }
  return obj;
}


module.exports = {
  removeArrayIndex,
  mToKm,
  formatNumber,
  deepClone

}
