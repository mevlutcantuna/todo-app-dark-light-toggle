import React from 'react'
import '../Styles/TodoInputBar.scss';

import AddIcon from '@material-ui/icons/Add';

import { dark,light } from "../Theme";

function TodoInputBar(props) {
    
    const {handleChange , inputValue , addItem , toggle} = props.infoInputBar
    return (
        <div style={toggle ? dark : light} className='todoInputBar'>
            <input onChange={handleChange} value={inputValue} type='text' className='todoInputBar__input'/>
            <button style={toggle ? light : dark } onClick={addItem} className='todoInputBar__button'>
                <AddIcon style={{ fontSize: '30px'}}/>
            </button>
        </div>
    )
}

export default TodoInputBar
