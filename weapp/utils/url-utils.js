import config from '../config/api-config';

function obj2uri (obj) {
  return Object.keys(obj).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
  }).join('&');
}

/**
 * 单个url 添加参数
 * @param {*} url
 * @param {*} params
 */
let AddParams = (url, params) => {
  let newUrl = url;
  if (url.indexOf("?") == -1) {
    newUrl = url + '?';
  }
  if (url.indexOf("?") != -1 && !(url.endsWith('&'))) {
    newUrl = url + '&';
  }
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      newUrl = newUrl + key + '=' + params[key] + '&';
    }
  }
  return newUrl;
};


/**
 * 批量添加参数
 */

let AddParamsObj = (urlObj, params) => {
  let newUrlObj = {};

  for (const key in urlObj) {
    if (urlObj.hasOwnProperty(key)) {
      newUrlObj[key] = AddParams(urlObj[key], params);
    }
  }

  return newUrlObj;
};


/* 截取url 参数 */
function GetParam(url, paraName) {
  var arrObj = url.split("?");

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split("&");
    var arr;
    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split("=");
      if (arr != null && arr[0] == paraName) {
        return arr[1];
      }
    }
    return "";
  } else {
    return "";
  }
}

/**
 * 添加 Version Appid
 */

let AddVersionAppid = (url) => {
  let newUrl = url;
  let params = {
    appid: config.appid,
    version: config.version
  };
  newUrl = urlAddParams(url, params);
  return newUrl;
};



function str2asc(strstr) {
  return ("0" + strstr.charCodeAt(0).toString(16)).slice(-2);
}
function asc2str(ascasc) {
  return String.fromCharCode(ascasc);
}

function UrlEncode(str) {
  var ret = "";
  var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
  var tt = "";

  for (var i = 0; i < str.length; i++) {
    var chr = str.charAt(i);
    var c = str2asc(chr);
    tt += chr + ":" + c + "n";
    if (parseInt("0x" + c) > 0x7f) {
      ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
    } else {
      if (chr == " ")
        ret += "+";
      else if (strSpecial.indexOf(chr) != -1)
        ret += "%" + c.toString(16);
      else
        ret += chr;
    }
  }
  return ret;
}
function UrlDecode(str) {
  var ret = "";
  for (var i = 0; i < str.length; i++) {
    var chr = str.charAt(i);
    if (chr == "+") {
      ret += " ";
    } else if (chr == "%") {
      var asc = str.substring(i + 1, i + 3);
      if (parseInt("0x" + asc) > 0x7f) {
        ret += asc2str(parseInt("0x" + asc + str.substring(i + 4, i + 6)));
        i += 5;
      } else {
        ret += asc2str(parseInt("0x" + asc));
        i += 2;
      }
    } else {
      ret += chr;
    }
  }
  return ret;
}


module.exports = {
  AddVersionAppid,
  AddParams,
  AddParamsObj,
  GetParam,

  UrlEncode,
  UrlDecode,
};