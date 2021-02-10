import { SET_LINES_COUNT } from '../constants'

export const setLinesCount = (count = 1) => {
    return {
        type: SET_LINES_COUNT,
        payload: count
    }
}

export default setLinesCount
