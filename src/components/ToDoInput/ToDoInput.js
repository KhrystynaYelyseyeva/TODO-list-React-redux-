import React from "react";
import PropTypes from 'prop-types';

import './ToDoInput.css';

const ToDoInput = ({value,onChange,onKeyPress})=>(
    <div className="todo-input-wrapper">
        <i className="fas fa-plus"/>
        <input
           className="todo-input"
           placeholder="Click to add task"
           onKeyPress={onKeyPress}
           onChange={onChange}
           value={value}
        />
    </div>
);

ToDoInput.propTypes={
    onKeyPress:PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.func,
};

ToDoInput.propTypes={
    onKeyPress:()=>{},
    onChange: ()=>{},
    value:()=>{},
};

export default ToDoInput;