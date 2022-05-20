import React from "react";
import "../Styles/TodoInputBar.scss";

import AddIcon from "@material-ui/icons/Add";

import { dark, light } from "../Theme";

function TodoInputBar(props) {

  return (
    <div style={props.toggle ? dark : light} className="todoInputBar">
      <input
        onChange={props.handleChange}
        value={props.inputValue}
        type="text"
        className="todoInputBar__input"
      />
      <button
        style={props.toggle ? light : dark}
        onClick={props.addItem}
        className="todoInputBar__button"
      >
        add
      </button>
    </div>
  );
}

export default TodoInputBar;
