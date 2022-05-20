import React from "react";
import "../Styles/TodoItem.scss";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";


import { errorDark, errorLight } from "../Theme";

function TodoItem(props) {
  const {list,paginationPage ,handleCheckbox,removeItem,toggle} = props;
  const indexOfFirstItem =  (paginationPage - 1) * 8;
  const indexOfLastItem =   indexOfFirstItem + 8;
  
  const newList = list.slice(indexOfFirstItem,indexOfLastItem);

  return (
    <div className="todoItem">
      <ul className="todoItem__group">
        {newList.map((item) => (
          <li key={item.id} className="todoItem__group__item">
              <input
                  onChange={() => handleCheckbox(item.id)}
                  value={item.checkbox}
                  type={'checkbox'}
                  className={'todoItem__group__item__checkbox'}/>
            <span className={item.checkbox ? "todoItem__group__item__text__checked" : "todoItem__group__item__text"}>
              {item.value.trim()}
            </span>
            <button
              className="todoItem__group__item__remove"
              style={toggle ? errorLight : errorDark}
              onClick={() => removeItem(item.id)}
            >
              <DeleteOutlineIcon style={{ color: "white" }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItem;
