import { Input, Button, List } from 'antd'
// UI
export default function ToDoListUI(props) {
    return (
        <div style={{ margin: '10px auto', width: '500px' }}>
            <div>
                <Input placeholder={props.value} style={{ width: '250px', height: '30px' }}
                    onChange={props.handleChangeValue} onKeyUp={props.handleKeyUpValue} value={props.value} />
                <Button type='primary' onClick={props.handleClickPlus}>增加</Button>
            </div>

            <div style={{ marginTop: '10px', width: '300px' }}>
                <List bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => { props.handleClickRemoveItem(index) }}>{item}</List.Item>}></List>
            </div>
        </div>
    )
}