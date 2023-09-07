import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store'

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
                        onChange={this.handleChangeValue} />
                    <Button type='primary'>增加</Button>
                </div>

                <div style={{ marginTop: '10px', width: '300px' }}>
                    <List bordered
                        dataSource={this.state.list}
                        renderItem={item => <List.Item>{item}</List.Item>}></List>
                </div>
            </div>
        );
    }


    handleChangeValue = (e) => {
        console.log('==>Get value', e.target.value);
        // 定义action
        let action = {
            type: 'changeInput',
            value: e.target.value
        }
        // 发出action  store自动调用reducer进行计算
        store.dispatch(action)
    }


    processState = () => {
        console.log('==>Get 监听state');
        // 获取仓库state值
        console.log('==>Get state', store.getState());
        this.setState(store.getState())
    }
}

export default ToDoList;