import React from 'react'

export const TodoDate = () => {
    return (
        <div className='td__right'>

            <div className='td__date'>
                <i className='far fa-calendar'></i>
            </div>

            <div className='td__list'>
                <i className='td__cirle'>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="9" height="9" rx="3" stroke="#C4C4C4" stroke-width="2"/>
                    </svg>
                </i>
                
                <p className='td__text'>  No list </p>
                <i className="td__icon fas fa-angle-down"></i>
                </div>
        </div>
    )
}

export default TodoDate
