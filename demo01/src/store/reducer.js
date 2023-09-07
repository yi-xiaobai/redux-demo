const defaultState = {
    value: "write something",
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review'
    ]
}

const Reducer = (state = defaultState, action) => {
    console.log('==>Get state,,action', state, action);

    // 收到了用户提交过来的dispatch  进行处理state
    if (action.type === 'changeInput') {
        return {
            ...state,
            ...{ value: action.value }
        }
    }
    return state
}

export default Reducer