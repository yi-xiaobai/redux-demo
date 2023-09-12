

import { ADD_TODO, CHANGE_TODO } from '../actionTypes'

// 初始化的state
let defaultState = {
    inputValue: 'please write something',
    list: []
}


const reducers = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const lists = state.list.slice()
            lists.push(state.inputValue)
            return {
                ...state,
                ...{ list: lists, inputValue: '' }
            }
        case CHANGE_TODO:
            return {
                ...state,
                ...{ inputValue: action.data }
            }

        default:
            return state
    }
}
export default reducers