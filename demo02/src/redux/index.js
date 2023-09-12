import { createStore } from 'redux'
// 创建一个管理员
import reducers from './reducers/reducers'

export default createStore(reducers)