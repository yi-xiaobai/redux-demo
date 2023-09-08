import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputAction, addItemAction, removeItemAction } from './store/actionCreators'

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
            <div style={{ margin: '10px auto', width: '500px' }}>
                <div>
                    <Input placeholder={this.state.value} style={{ width: '250px', height: '30px' }}
                        onChange={this.handleChangeValue} onKeyUp={this.handleKeyUpValue} value={this.state.value} />
                    <Button type='primary' onClick={this.handleClickPlus}>增加</Button>
                </div>

                <div style={{ marginTop: '10px', width: '300px' }}>
                    <List bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => <List.Item onClick={this.handleClickRemoveItem.bind(this, index)}>{item}</List.Item>}></List>
                </div>
            </div>
        );
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
        console.log('==>Get 监听state');
        // 获取仓库state值
        console.log('==>Get state', store.getState());
        this.setState(store.getState())
    }
}

export default ToDoList;