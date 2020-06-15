import React, { useState } from 'react'
import PropTypes from 'prop-types'

// create custom hook
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim) {
      onCreate(input.value())
      input.clear()
    }
  }
  return (
    <form
      style={{
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      onSubmit={submitHandler}>
      <input {...input.bind} style={{ width: "100%" }} />
      <button type="submit">Add todo</button>
    </form >
  )
}

export default AddTodo

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}
