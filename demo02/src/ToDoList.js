
import { connect } from 'react-redux'
import { changeTodo, addTodo } from './redux/action'


const ToDoList = (props) => {
    const { inputValue, handleInputChange, handleInputKeyUp, handleButtonClick, list } = props
    return (
        <div style={{ margin: '0 auto', width: '300px' }}>
            <div>
                <input value={inputValue} onChange={handleInputChange} onKeyUp={handleInputKeyUp} /><button onClick={handleButtonClick}>增加</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}


// 定义映射关系
const mapStateToProps = (state) => {
    console.log('==>Get state', state);
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        // input框值改变
        handleInputChange(e) {
            console.log('==>Get e', e);
            dispatch(changeTodo(e.target.value))
        },


        // 点击按钮增加
        handleButtonClick() {
            dispatch(addTodo())
        },


        // 回车键增减
        handleInputKeyUp(e) {
            if (e.keyCode === 13) {
                dispatch(addTodo())
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
