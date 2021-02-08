import React from 'react'
import InputTodoWrapper from './input-todo-wrapper'
import { TodoLeft, TodoRight } from '.'
 
export const InputTodo = () => {
    return (
        <InputTodoWrapper todoLeft={ <TodoLeft /> } todoRight={ <TodoRight /> } />
    )
}

export default InputTodo
