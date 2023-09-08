
import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from './actionTypes'


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