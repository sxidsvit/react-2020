import React, { useState, useEffect } from 'react';
import Todolist from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/modal'

const AddTodo = React.lazy(() =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Todo/AddTodo'))
    }, 3000);
  })
)

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      completed: false,
      title
    }]))
  }


  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="wrapper">
        <h1 style={{ textAlign: 'center', marginBottom: '0rem' }} > Todo List </h1>
        <h6 style={{ textAlign: 'center', marginTop: '0rem' }} > created on React 2020</h6>
        <React.Suspense fallback={<p>Loading ...</p>}>
          <Modal></Modal>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <Todolist todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider >
  )
}

export default App;
