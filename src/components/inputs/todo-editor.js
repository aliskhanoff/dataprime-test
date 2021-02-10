import React, { useState } from 'react'
import { connect } from 'react-redux'
import ContentEditable from 'react-contenteditable'
import setLinesCount from '../../redux/todo/actions/setLinesCount';
import setNoteMode from '../../redux/todo/actions/setNoteMode';

export const TodoEditor = ({ setLinesCount, setNoteMode }) => {

    const _regex = /(\/{2}){1}/;
    const contentEditable = React.createRef();
    const [content, setContent] = useState({ html: ``})

    const handleChange = ({ target }) => {

        const _content = target.value;

        console.log(_content);

        if(_content.split('<div><br></div>').length > 1) {
            setLinesCount(_content.split('<div><br></div>').length);
        }
        else {
            setLinesCount(1);
        }

        if(_regex.test(_content)) {
            setNoteMode(true);

            const _splitted = _content.split(_regex);
            return setContent({ html: ` <a style='color: #353531'> ${_splitted[0] }  <a class='td__note' style='color: #C7C0AB'> ${_splitted[1]}${_splitted[2]}</a> </a>`})
        }
        else {
            setNoteMode(false);
        }

        
        return setContent({ html: _content });
    }

    return (
                <ContentEditable
                    placeholder='Write a new task'
                    className={`td__editor`}
                    innerRef={contentEditable}
                    html={content.html} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={handleChange} // handle innerHTML change
                    tagName='div' // Use a custom HTML tag (uses a div by default)
                >
                </ContentEditable>)

}

const mapStateToProps = (state) => ({
    lines_count: state.todo.lines_count
})

const mapDispatchToProps =  dispatch => ({
    setLinesCount:  (lines) => dispatch(setLinesCount(lines)),
    setNoteMode: (val) => dispatch(setNoteMode(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor)
