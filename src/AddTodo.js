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
  const test = { ...input }
  console.log('AddTodo test: ', test);

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim) {
      onCreate(input.value())
      input.clear()
    }
  }
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form >
  )
}

export default AddTodo

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}