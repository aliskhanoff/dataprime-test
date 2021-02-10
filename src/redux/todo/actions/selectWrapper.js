import { SELECT_TODO_WRAP } from '../constants'

export const selectWrapper = (isSelected = true) => {
    return {
        type: SELECT_TODO_WRAP,
        payload: isSelected
    }
}

export default selectWrapper
