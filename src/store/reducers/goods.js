import {
  handleActions
} from 'redux-actions'
import {
  UPDATE_ORDER_INFO,
  UPDATE_CART_LIST,
  UPDATE_STUDENT_INFO,
  UPDATE_CARL_STATUS,
  UPDATE_TRANSFORM_CLASS
} from '../types/goods'

export default handleActions({
  [UPDATE_ORDER_INFO](state, action) {
    return {
      ...state,
      orderInfo: {
        ...state.orderInfo,
        ...action.orderInfo
      }
    }
  },
  [UPDATE_CART_LIST](state, action) {
    return {
      ...state,
      cartList: action.cartList
    }
  },
  [UPDATE_STUDENT_INFO](state, action) {
    return {
      ...state,
      studentInfo: {
        ...state.studentInfo,
        ...action.studentInfo
      }
    }
  },
  [UPDATE_CARL_STATUS](state, action) {
    console.log('UPDATE_CARL_STATUS=',state, action)
    return {
      ...state,
      cartIsUpDate: action.cartIsUpDate
    }
  },
  [UPDATE_TRANSFORM_CLASS](state, action) {
    return {
      ...state,
      transformClassInfo: {
        ...action.transformClassInfo
      }
    }
  },
}, {
  orderInfo: {},
  cartList: [],
  studentInfo:{},
  cartIsUpDate:false,
  transformClassInfo:{}
})
