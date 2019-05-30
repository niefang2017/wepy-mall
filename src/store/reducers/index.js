import { combineReducers } from 'redux'
import user from './user'
import goods from './goods'
import rate from './rate'

export default combineReducers({
  user,
  goods,
  rate
})