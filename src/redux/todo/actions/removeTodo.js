import { REMOVE_TODO } from '../constants'

const addTodo = (todo) => {

    return {
        type: REMOVE_TODO,
        payload: todo
    }
    
}

export default addTodo
