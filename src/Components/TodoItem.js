import React from 'react'
import '../Styles/TodoItem.scss';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {errorDark , errorLight} from '../Theme';

function TodoItem(props) {
    return (
        <div className='todoItem'>
            <ul className='todoItem__group'>
                {props.list.map((item) => (
                    <li key={item.id} className='todoItem__group__item'>
                        <span>{item.value.trim()}</span>
                        <button className='todoItem__group__item__button' style={props.toggle ? errorLight : errorDark} onClick={() => props.removeItem(item.id)}><DeleteOutlineIcon style={{color:'white'}}/></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoItem
