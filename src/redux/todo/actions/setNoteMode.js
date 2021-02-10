import { SET_NOTE_MODE } from '../constants'

export const setNoteMode = (isSelected = true) => {
    return {
        type: SET_NOTE_MODE,
        payload: isSelected
    }
}

export default setNoteMode
