
import axios from 'axios'
import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST } from './actionTypes'


/**
 * 改变input值action
 * @param {*} value 
 * @returns 
 */
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value: value
    }
}


/**
 * 添加action
 * @returns 
 */
export const addItemAction = () => {
    return {
        type: ADD_ITEM,
    }
}



/**
 * 删除列表项action
 * @param {*} index 
 * @returns 
 */
export const removeItemAction = (index) => {
    return {
        type: REMOVE_ITEM,
        index: index
    }
}


export const getListAction = (data) => {
    return {
        type: GET_LIST,
        data
    }
}


export const getToDoList = () => {
    return (dispatch) => {
        axios.get('https://2ea90c2b-25a1-4931-a835-ca4679925991.mock.pstmn.io/getlist').then(res => {
            const data = res.data
            console.log(data)
            const action = getListAction(data.data)
            dispatch(action)
        })
    }
}