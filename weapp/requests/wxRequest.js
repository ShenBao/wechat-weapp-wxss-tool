import config from '../config/config';
import urlUtils from '../utils/url-utils';

const appIdVersionConfig = {
    appid: config.appid,
    version: config.version
};

/**
 * 网络请求
 *
 * @param {Object} opts
 * @param {String} url
 * @returns wx.request
 */

function wxRequest(opts, url) {

    let reqUrl = url;
    let {
        // 请求的参数
        data,
        // （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        method,
        // 如果设为json，会尝试对返回的数据做一次 JSON.parse
        dataType,
        // 设置请求的 header，header 中不能设置 Referer。
        header,
        // 是否显示 loading，默认为 false
        showLoading,
        // loading 时的文字，默认为 加载中 （showLoading 为true时，设置才有效）
        loadingTitle,
        // 是否添加 appIdVersion，默认为 true
        appIdVersion,
        // 是否携带登录态  默认为 false
        isAuth,
        // 收到开发者服务成功返回的回调函数
        success,
        // 接口调用失败的回调函数
        fail,
        // 接口调用结束的回调函数（调用成功、失败都会执行）
        complete
    } = opts;

    data = data || {};
    // 请求方式 默认为 GET
    method = method || 'GET';
    header = header || {
        'content-type': 'application/json'
    };
    dataType = dataType || 'json';
    // 添加 appIdVersion 默认为true
    appIdVersion = appIdVersionConfig || true;
    // 登录态 默认为 false
    isAuth = isAuth || false;
    // 是否显示loading 默认为 false
    showLoading = opts.showLoading || false;
    // loading title 默认为 加载中
    loadingTitle = opts.loadingTitle || '加载中';

    if (showLoading) {
        wx.showLoading({title: loadingTitle, icon: 'loading', mask: true});
    }
    if (appIdVersion) {
        reqUrl = urlUtils.AddParams(reqUrl, appIdVersion);
        // 添加 appIdVersion
        data = {
            ...data,
            ...appIdVersion
        };
    }
    if (isAuth) {
        let userId = wx.getStorageSync('userId');
        let token = wx.getStorageSync('token');
        // 效验登录态 合并数据与登录态
        data = {
            ...data,
            userId,
            token
        };
    }

    success = typeof success == 'function'
        ? success
        : () => {};
    fail = typeof fail == 'function'
        ? fail
        : () => {};
    complete = typeof complete == 'function'
        ? complete
        : () => {};

    console.log(`------------ request ${reqUrl} ------------`);
    console.log('reqUrl:', reqUrl, ', data', data, ', method:', method, ', dataType:', dataType, ', header:', header);

    return wx.request({
        url: reqUrl,
        data: data,
        method: method,
        dataType: dataType,
        header: header,
        success: (res) => {
            success(res);
        },
        fail: (res) => {
            console.log('fail:', res);
            fail(res);
        },
        complete: (res) => {

            console.log('complete res:', res);
            let {statusCode, errMsg, header, data} = res;
            console.log('statusCode:', statusCode, ', errMsg:', errMsg, ', header:', header, ', data:', data);

            complete(res);
            if (showLoading) {
                wx.hideLoading();
            }
        }
    });
};

export default wxRequest;
