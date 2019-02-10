// 资源公共地址
let imageUrl = 'http://img.host.cn/';
let staticUrl = 'http://img.static.cn/';

let imgConfigObj = {

  defaultHead: `${staticUrl}default_head@2x.jpg`,

  errorImg: `${staticUrl}error@2x.png`,

};

let imgConfig = {
  imageUrl,
  ...imgConfigObj
}

module.exports = imgConfig;