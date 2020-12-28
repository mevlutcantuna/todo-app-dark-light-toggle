import React from 'react'
import '../Styles/TodoList.scss';

import TodoItem from './TodoItem';

import {dark, light} from '../Theme'

function TodoList(props) {
    
    const { list , removeItem, toggle} = props.infoList;
    
    return (
        <div style={toggle ? dark : light}  className='todoList'>
            <TodoItem toggle={toggle} list={list} removeItem={removeItem}/>
        </div>
    )
}   

export default TodoList
