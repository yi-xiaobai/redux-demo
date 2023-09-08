import React, { Component } from 'react'
import store from './store'
import ToDoListUI from './ToDoListUI'
import { changeInputAction, addItemAction, removeItemAction, getListAction, getToDoList } from './store/actionCreators'


// 业务JS处理
class ToDoList extends Component {
    constructor(props) {
        super(props);
        // 获取store仓库值
        this.state = store.getState()
        // 监听store值  如果state变化了 自动执行processState函数
        store.subscribe(this.processState)
    }
    state = {}
    render() {
        return (
            <ToDoListUI
                value={this.state.value}
                list={this.state.list}
                handleChangeValue={this.handleChangeValue}
                handleKeyUpValue={this.handleKeyUpValue}
                handleClickPlus={this.handleClickPlus}
                handleClickRemoveItem={this.handleClickRemoveItem}
            />
        );
    }

    // 生命周期函数 在render之后执行
    componentDidMount() {
        const action = getToDoList()
        store.dispatch(action)
    }


    // input值改变
    handleChangeValue = (e) => {
        // 定义action
        let action = changeInputAction(e.target.value)
        // 发出action  store自动调用reducer进行计算
        store.dispatch(action)
        action = null
    }

    handleKeyUpValue = (e) => {
        // 回车键 也实现增加功能
        if (e.keyCode === 13) {
            let action = addItemAction()
            store.dispatch(action)
            action = null
        }
    }


    // 点击增加按钮处理
    handleClickPlus = () => {
        // 定义action
        let action = addItemAction()
        // 触发store进行state更新
        store.dispatch(action)
        action = null
    }


    // 删除列表项
    handleClickRemoveItem = (index) => {
        console.log('==>Get index', index);
        let action = removeItemAction(index)
        // 触发store进行state更新
        store.dispatch(action)
        action = null
    }


    processState = () => {
        // 获取仓库state值
        this.setState(store.getState())
    }
}

export default ToDoList;