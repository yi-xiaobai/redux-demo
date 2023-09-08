import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from './actionTypes'
const defaultState = {
    value: "write something",
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
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
    }
    return state
}

export default Reducer