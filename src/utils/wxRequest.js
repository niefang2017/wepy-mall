import wepy from 'wepy';
import tip from './tip';
import { getStore } from 'wepy-redux';

const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
const wxRequest = async (params = {}, url) => {
  tip.loading();
  wx.showNavigationBarLoading();
  let store = getStore();
  // let loginInfo = store.getState().user.loginInfo;
  const origin = wepy.$appConfig.baseUrl;
  const hosts = `https://mxxx.lingqingkeji.com`;
  const kuaidi = `https://www.kuaidi100.com`;
  let data = params.query || {};
  // data.sign = SIGN
  if (params.kuaidi) {
    url = kuaidi + url;
  } else {
    url = params.realUrl ? hosts + url : origin + url;
  }
  if (params.other) {
    url = url + params.other;
  }
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json',
      'clientType': 'wechat'
    }
  });
  tip.loaded();
  wx.hideNavigationBarLoading();
  if (res.statusCode === 200) {
    return res.data;
  } else {
    return tip.toast({
      title: res.data.msg ? res.data.msg : codeMessage[res.statusCode],
      icon: 'none'
    });
  }
};

module.exports = {
  wxRequest
};
