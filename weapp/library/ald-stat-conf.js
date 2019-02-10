import config from '../config/config.js'

exports.app_key = config.aldstatAppKey; //请在此行填写从阿拉丁后台获取的appkey
exports.getLocation = false; //默认不获取用户坐标位置
exports.appid = config.appid; //用于用户登录、微信转发群信息、二维码等微信官方功能
// exports.appsecret = "";//用于用户登录、微信转发群信息、二维码等微信官方功能
// exports.defaultPath = 'pages/index/index';//小程序的默认首页, 用于分享时path为空时