import React, {useState} from 'react'
import { connect } from 'react-redux'
import { selectWrapper } from '../../redux'

export const TInputTodoWrapper = ({ wrapperSelected, selectWrapper, todoLeft, todoRight }) => {

    const [value, setValue] = useState('');
    const [lineCount, setLineCount] = useState(1);

    const onChangeText = (e) => {
        setLineCount(e.value.split(/\r*\n/).lenght);
        setValue(e.value);
    }

    return (
        <div onClick={ selectWrapper } className={`todo--wrap ${ wrapperSelected ? 'is__active': '' }`}>
            {todoLeft}
                
                <div className='todo__input'>
                    <iframe 
                        id='richEditor' 
                        name='todoEditor' 
                        onClick={ selectWrapper } 
                        onChange={ (e) => onChangeText(e) }  
                        src={ value }  
                        className='todo__editor' frameborder="0" ></iframe>
                </div>

            {todoRight}
        </div>
    )
}

const mapStateToProps = (state) => ({
    wrapperSelected: state.todo.wrapperSelected
})

const mapDispatchToProps = dispatch => ({
    selectWrapper: () => dispatch(selectWrapper(true))  
})

export const InputTodoWrapper = connect(mapStateToProps, mapDispatchToProps)(TInputTodoWrapper)
export default InputTodoWrapper; 