import React from 'react'
import { connect } from 'react-redux'
import { Todo } from './components/inputs/todo'
import { selectWrapper } from './redux'

export const App = ({ setSelected }) => {
  return (
    <React.Fragment>
      <Todo onClick={ () => setSelected(true) } />
      <div className='app__bg' onClick={() => setSelected(false) }></div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    setSelected: (isSelected) => dispatch(selectWrapper(isSelected))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
