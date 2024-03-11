import { useEffect, useState } from 'react'

import Todo from './todo'

import './App.css'

function App() {
  const [todos, settodos] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data =>settodos(data))
  },[])

  return (
    <>
      
      <h1>Test Public API</h1>
      <h2>Todos : {todos.length}</h2>
      {
        todos.map((task)=><Todo pro={task}></Todo>)
      }
      
    </>
  )
}

export default App
