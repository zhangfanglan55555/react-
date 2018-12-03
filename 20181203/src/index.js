import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Todolist';
import { Provider } from 'react-redux';
import store from './store';
const App =(
    <Provider store={store}>
    {/* 将store提供给内部所有组件使用 */}
        <TodoList />
    </Provider>
)
ReactDOM.render(App, window.root);
