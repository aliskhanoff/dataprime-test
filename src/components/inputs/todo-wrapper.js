import React from 'react'
import TodoEditor from './todo-editor'
import { connect } from 'react-redux'
import { selectWrapper } from '../../redux'

export const TTodoWrapper = ({ left, right, selectWrapper, wrapperSelected, lines_count, isNoteMode }) => {

    return (
        <div 
            onClick={ selectWrapper } 
            className={`td--wrapper ${ lines_count > 1 ? 'is__height' + lines_count : 'is__height1'} ${ isNoteMode ? 'is__note__mode': ''} ${ lines_count > 1 ? 'is__description__mode': '' } ${ wrapperSelected ? 'is__active' : '' }`}>
            {left}
                <TodoEditor  />
            {right}
        </div>
    )
}
const mapStateToProps = (state) => ({
    wrapperSelected: state.todo.wrapperSelected,
    lines_count: state.todo.lines_count,
    isNoteMode: state.todo.isNoteMode
})

const mapDispatchToProps = dispatch => ({
    selectWrapper: () => dispatch(selectWrapper(true))
});

export const TodoWrapper = connect(mapStateToProps, mapDispatchToProps)(TTodoWrapper)


export default TodoWrapper
