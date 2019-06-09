import {
  wxRequest
} from '@/utils/wxRequest';


/**
 * 获取商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// 登录
const login = (params) => wxRequest(params, '/GetWeixinInfo.ashx?method=code2Session');
const sessionKey = (params) => wxRequest(params, '/GetWeixinInfo.ashx');
// 获取手机号
const getTel = (params) => wxRequest(params, '/telephone');
//获取验证码
const captcha = (params) => wxRequest(params, '/captcha');
//绑定手机
const bindTel = (params) => wxRequest(params, '/bind-phone/v2');
// 查询广告
const getAdList = (params) => wxRequest(params, '/advertising');
// 好物推荐
const getDiscover = (params) => wxRequest(params, '/discover');
// 分类、根数据
const getRootCateList = (params) => wxRequest(params, '/rootcate/list');
// 分类、子数据
const getChildCateList = (params) => wxRequest(params, '/childcate/list');
// 查询商品列表
const queryGoodsList = (params) => wxRequest(params, '/Details.ashx');
// 查询商品详情
const queryGoodsDetail = (params) => wxRequest(params, '/goods/detail');
// 查询我的购物车
const getCartList =  (params) => wxRequest(params, '/cart/list');
// 删除购物车商品
const cartDel = (params) => wxRequest(params, '/cart/del');
// 查询商品
const cartCheck = (params) => wxRequest(params, '/cart/check');
// 创建订单
const createOrder = (params) => wxRequest(params, '/create/order');
// 更新购物车数量
const cartUpdateNum = (params) => wxRequest(params, '/cart/update');
// 查询订单详情
const getOrderInfo = (params) => wxRequest(params, '/order/info');
// 订单id查询优惠券
const getCouponList = (params) => wxRequest(params, '/coupon/list');
// 分类
const categoryList = (params) => wxRequest(params, '/CategoryServer.ashx');
// 商品详情
const getGoodsDetail =  (params) => wxRequest(params, '/BuyServer.ashx');
// 绑银行卡
const personInfo =  (params) => wxRequest(params, '/PersonInfoServer.ashx');
// 查询商品sku
const querySku = (params) => wxRequest(params, '/BuyServer.ashx?method=GetSKUsInfo');
// 学员信息
const studentInfo =  (params) => wxRequest(params, '/StudentInfoServer.ashx');
// 购物车列表
const buyCarServer =  (params) => wxRequest(params, '/BuyCarServer.ashx');
// 订单列表
const getOrderList =  (params) => wxRequest(params, '/OrderServer.ashx');
// post购物车列表
const cartSubmitOrder =  (params) => wxRequest(params, '/BuyCarServer.ashx?method=SettleAccounts');
// 立即购物提交订单
const submitbBuyOrder = (params) => wxRequest(params, '/BuyServer.ashx?method=SubmitToOrder');
// 快递类型
const expressType = (params) => wxRequest(params, '/autonumber/autoComNum');
// 快递类型
const expressDetail = (params) => wxRequest(params, '/query');
// 请假/补课 
const courseHandle = (params) => wxRequest(params, '/Details.ashx');

const transformClass = (params) => wxRequest(params, '/BuyServer.ashx?method=ChangeProduct');

export default {
  login,
  getTel,
  captcha,
  bindTel,
  getAdList,
  getDiscover,
  getRootCateList,
  getChildCateList,
  queryGoodsList,
  queryGoodsDetail,
  getCartList,
  cartDel,
  cartCheck,
  cartUpdateNum,
  getOrderInfo,
  getCouponList,
  getOrderList,
  categoryList,
  getGoodsDetail,
  personInfo,
  querySku,
  studentInfo,
  buyCarServer,
  createOrder,
  cartSubmitOrder,
  submitbBuyOrder,
  expressType,
  expressDetail,
  courseHandle,
  transformClass,
  sessionKey
}
