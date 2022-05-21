import React, { useState } from 'react';

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
  console.log(list);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const addItem = () => {
    let newList = [...list];
    let newItem = {
      value: inputValue,
      id: Math.random(),
      checkbox: false,
    }

    if (inputValue.trim() === '') {
      alert('Please Enter Something Input is Empty....');
    }
    else {
      newList.unshift(newItem);
    }

    setList(newList);
    setInputValue('')
  }

  const removeItem = (id) => {
    const newList = [...list];
    const newLists = newList.filter(item => item.id !== id);
    setList(newLists);
  }




  const handleCheckbox = (id) => {
    const newList = list.map(item => {
      if(item.id === id){
        return {...item,checkbox: !item.checkbox}
      }
      return item
    })
    setList(newList);
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
    handleCheckbox
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
