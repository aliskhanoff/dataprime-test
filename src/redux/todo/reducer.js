import { act } from 'react-dom/test-utils';
import { ADD_TODO, REMOVE_TODO, SELECT_TODO_WRAP, SET_LINES_COUNT, SET_NOTE_MODE } from './constants';
import { initialState } from './initialState';

const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_TODO: return { todos: [...state.todos, action.payload] }        
        case REMOVE_TODO: return { todos: [...state.todos, action.payload] }
        case SELECT_TODO_WRAP: return {  ...state, wrapperSelected: action.payload }
        case SET_LINES_COUNT: return { ...state, lines_count: action.payload }
        case SET_NOTE_MODE: return { ...state, isNoteMode: action.payload }
        default: return state;
    }

}

export default TodoReducer
