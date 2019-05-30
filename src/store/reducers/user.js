import { handleActions } from 'redux-actions'
import { UPDATE_USER_INFO, UPDATE_AUTHOR_INFO, UPDATE_CODE, UPDATE_SYSTEMINFO,UPDATE_LOGININFO, UPDATE_CARTLIST } from '../types/user'

export default handleActions({
  [UPDATE_USER_INFO] (state, action) {
    return {
      ...state,
      userInfo: {...state.userInfo, ...action.userInfo}
    }
  },
  [UPDATE_AUTHOR_INFO] (state, action) {
    return {
      ...state,
      authorData: action.author,
      hasAuthor: action.hasAuthor,
      hasUserId: action.hasUserId,
      token: action.token,
      ticket: action.ticket,
      bindStatus: action.bindStatus
    }
  },
  [UPDATE_CODE] (state, action) {
    return {
      ...state,
      code: action.code
    }
  },
  [UPDATE_SYSTEMINFO] (state, action) {
    return {
      ...state,
      systemInfo: action.systemInfo
    }
  },
  [UPDATE_LOGININFO] (state, action) {
    return {
      ...state,
      loginInfo: action.loginInfo
    }
  },
  [UPDATE_CARTLIST] (state, action) {
    return {
      ...state,
      cartList: action.cartList
    }
  }
}, {
  cartList:[],
  systemInfo:{},
  loginInfo:{
    token: '',
    ticket: '',
    bindStatus: false
  },
  userInfo: {
    userId: '',
    openId: '',
    nickName: '',
    headImg: '',
    mobile: '',
    unionId: ''
  },
  authorData: {},
  hasAuthor: false,
  hasUserId: false,
  token: '',
  code: '',
  ticket: '',
  bindStatus: false
})
