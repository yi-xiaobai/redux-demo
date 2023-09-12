import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { Provider } from 'react-redux'
import redux from './redux'

const App = (
  <Provider store={redux}>
    <ToDoList />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);

