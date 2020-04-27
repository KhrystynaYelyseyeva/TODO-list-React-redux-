import React from "react";
import PropTypes from 'prop-types';

import "./ToDoItem.css"

const ToDoItem = ({text, isCompleted,removeTask,completedTask,id}) => (
    <li className="todo-item">
        <i onClick={()=>completedTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
        <i className="fas fa-times" onClick={()=>removeTask(id)}/>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isComleted: PropTypes.bool,
    removeTask:PropTypes.func,
    completedTask:PropTypes.func,
    id: PropTypes.number,
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: ()=>{},
    completedTask:()=>{},
    id:0,
};

export default ToDoItem;