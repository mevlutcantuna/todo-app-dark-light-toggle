import React from "react";
import "../Styles/TodoInputBar.scss";

import AddIcon from "@material-ui/icons/Add";

import { dark, light } from "../Theme";

function TodoInputBar({ infoInputBar }) {
  return (
    <div style={infoInputBar?.toggle ? dark : light} className="todoInputBar">
      <input
        onChange={infoInputBar?.handleChange}
        value={infoInputBar?.inputValue}
        type="text"
        className="todoInputBar__input"
      />
      <button
        style={infoInputBar?.toggle ? light : dark}
        onClick={infoInputBar?.addItem}
        className="todoInputBar__button"
      >
        <AddIcon />
      </button>
    </div>
  );
}

export default TodoInputBar;
