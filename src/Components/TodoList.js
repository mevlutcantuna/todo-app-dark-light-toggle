import React, { useState} from 'react'
import '../Styles/TodoList.scss';

import TodoItem from './TodoItem';

import {dark, light} from '../Theme'
import {Pagination} from "@material-ui/lab";

function TodoList(props) {
    
    const { list , removeItem, toggle, handleCheckbox } = props.infoList;

    const [paginationPage,setPaginationPage] = useState(1);

    const pageItemsCount = Math.ceil(list.length/8)

    const handlePaginationChange = (event,page) => {
        
        if(page !== undefined){
            setPaginationPage(page)
        }
    }

    return (
        <div style={toggle ? dark : light}  className='todoList'>
            <TodoItem
                handleCheckbox={handleCheckbox}
                toggle={toggle}
                list={list}
                removeItem={removeItem}
                paginationPage={paginationPage}
                pageItemsCount={pageItemsCount}
            />
            <Pagination
                className={list.length > 7 ? 'todoList__pagination' : 'todoList__pagination__none'}
                size={"large"}
                color={'primary'}
                page={paginationPage}
                count={pageItemsCount}
                onChange={handlePaginationChange}
            />
        </div>
    )
}   

export default TodoList
