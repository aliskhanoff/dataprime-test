import React from 'react'
import TodoDateChooser from './todo-date-chooser'
import TodoList from './todo-list'


export const TodoRight = () => {
    return (
            <div className="todo__right">
                <TodoDateChooser />
                <TodoList />
            </div>
        )
}

export default TodoRight
