import { useState } from 'react'
let count = 4;
function Todo(props){
    return <div>
      <div>{props.title}</div> 
      <div>{props.description}</div><br />
    </div>
}

function App() {
  const [todos, setTodos] = useState([{
      id: 1,
      title: 'Go to gym 1',
      description: 'Go to the gym today'
    },{
      id: 2,
      title: 'Go to gym 2',
      description: 'Go to the gym today'
    },{
      id: 3,
      title: 'Go to gym 3',
      description: 'Go to the gym today'
    },{
      id: 4,
      title: 'Go to gym 4',
      description: 'Go to the gym today'
    }
  ]);

  function updateTodo(){
    setTodos([...todos,{
      id: count++,
      title: "Go to gym "+ count,
      description: "Go to the gym today"
    }])
  }
  return (
    <>
    <button onClick={updateTodo}>Add a todo</button>
      {todos.map(todo => <Todo key={todo.id}  title={todo.title} description={todo.description} />)}
    </>
  )
}


export default App
