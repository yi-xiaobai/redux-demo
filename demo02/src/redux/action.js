
import { ADD_TODO, CHANGE_TODO } from './actionTypes'

// 添加
export const addTodo = () => {
    return {
        type: ADD_TODO,
    }
}


// 添加
export const changeTodo = data => {
    return {
        type: CHANGE_TODO,
        data: data
    }
}


