import React, { useState } from 'react';
import Todolist from './Todo/TodoList'
import Context from './context'
import './App.css';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: true, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' }
  ]
  )

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
        <h1>React. Todo List</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length
          ? (<Todolist todos={todos} onToggle={toggleTodo} />)
          : (<p>No todos!</p>)
        }
      </div>
    </Context.Provider>
  )
}

export default App;
