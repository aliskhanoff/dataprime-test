import React from 'react'
import { connect } from 'react-redux'
import { TodoWrapper } from './todo-wrapper'
import { TodoColor } from './todo-color'
import { TodoDate } from './todo-date'

export const TTodo = () => {
    return (
        <React.Fragment>
            <TodoWrapper  left={ <TodoColor /> } right={ <TodoDate /> }  />
        </React.Fragment> 
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export const Todo = connect(mapStateToProps, mapDispatchToProps)(TTodo);
export default Todo;
