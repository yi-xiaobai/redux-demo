import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    value: "write something",
    list: []
}

const Reducer = (state = defaultState, action) => {
    // 收到了用户提交过来的dispatch  进行处理state
    if (action.type === CHANGE_INPUT) {
        return {
            ...state,
            ...{ value: action.value }
        }
    } else if (action.type === ADD_ITEM) {
        const lists = state.list.slice()
        lists.push(state.value)
        return {
            ...state,
            ...{ value: '', list: lists }
        }
    } else if (action.type === REMOVE_ITEM) {
        const lists = state.list.slice()
        lists.splice(action.index, 1)
        return {
            ...state,
            ...{ list: lists }
        }
    } else if (action.type === GET_LIST) {
        return {
            ...state,
            ...{ list: action.data }
        }
    }
    return state
}

export default Reducer