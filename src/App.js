import React, { useState } from 'react';
import './App.css';

import Header from './Components/Header';
import TodoInputBar from './Components/TodoInputBar';
import TodoList from './Components/TodoList';

function App() {

  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const toggleChange = () => {
    setToggle(!toggle)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    let newList = [...list];
    let newItem = {
      value: inputValue,
      id: Math.random(),
    }
    
    if(inputValue.trim() === ''){
      alert('Please Enter Something Input is Empty....');
    }
    else{
      newList.push(newItem);
    }

    setList(newList);
    setInputValue('')
  }

  const removeItem = (id) => {
    const newList = [...list];

    const newLists = newList.filter(item => item.id !== id);
    setList(newLists);
  }  

  const infoInputBar = {
    handleChange,
    inputValue,
    addItem,
    toggle,
  }

  const infoList = {
    toggle,
    list,
    removeItem,
  }

  return (
    <div className="App">
      <Header toggle={toggle} toggleChange={toggleChange} />
      <TodoInputBar infoInputBar={infoInputBar} />
      <TodoList infoList={infoList} />
    </div>
  );
}

export default App;
