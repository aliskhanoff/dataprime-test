import { ADD_TODO, REMOVE_TODO, SELECT_TODO_WRAP } from './constants';
import { initialState } from './initialState';

const TodoReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_TODO: return { todos: [...state.todos, action.payload] }        
        case REMOVE_TODO: return { todos: [...state.todos, action.payload] }
        case SELECT_TODO_WRAP: return {  ...state, wrapperSelected: action.payload }

        default: return state;
    }

}

export default TodoReducer
