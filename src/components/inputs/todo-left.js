import React from 'react'

export const ColorChooser = () => {
    return (
            <div className='todo__component color_chooser'></div>
        )
}


export const TodoLeft = () => {
    return (
        <div className="todo__left">
            <ColorChooser />
        </div>
    )
}

export default TodoLeft
