import React from "react";
import PropTypes from 'prop-types';

import ToDoItem from '../ToDoItem/ToDoItem'

import './ToDoList.css';

const ToDoList = ({tasksList, removeTask, completedTask}) => (
    <ul className="todo-list">
        {tasksList.map(({id, text, isCompleted}) => (
            <ToDoItem completedTask={completedTask} removeTask={removeTask} id={id} key={id} text={text}
                      isCompleted={isCompleted}/>
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    removeTask: PropTypes.func,
    completedTask: PropTypes.func,
};

ToDoList.defaultProps = {
    tasksList: [],
    removeTask: () => {
    },
    completedTask: () => {
    },
};

export default ToDoList;