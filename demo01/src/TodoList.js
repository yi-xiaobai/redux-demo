import React, { Component } from 'react'
import { Input, Button, List } from 'antd'

const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div style={{ margin: '10px auto', width: '500px' }}>
                <div>
                    <Input placeholder='请输入' style={{ width: '250px', height: '30px' }} />
                    <Button type='primary'>增加</Button>
                </div>

                <div style={{marginTop:'10px',width:'300px'}}>
                    <List bordered
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}></List>
                </div>
            </div>
        );
    }
}

export default ToDoList;