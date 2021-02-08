import React from 'react'
import { connect } from 'react-redux'
import { InputTodo } from './components/inputs'
import { selectWrapper } from './redux'

export const App = ({ unselectWrapper }) => {
  return (
    <>
    <div id='__control' onClick={ unselectWrapper }></div>
      <InputTodo />
    </>
  )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    unselectWrapper: () => dispatch(selectWrapper(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
