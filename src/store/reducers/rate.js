import {
  handleActions
} from 'redux-actions'
import {
  UPDATE_RATE_INFO,
  UPDATE_RATE_ORDER_LIST
} from '../types/rate'

export default handleActions({
  [UPDATE_RATE_ORDER_LIST](state, action) {
    return {
      ...state,
      rateOrderList: action.rateOrderList
    }
  },
  [UPDATE_RATE_INFO](state, action) {
    return {
      ...state,
      rateInfo: action.rateInfo
    }
  },
}, {
  rateInfo: {},
  rateOrderList: []
})
