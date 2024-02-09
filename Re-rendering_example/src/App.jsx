import { useState } from 'react'

function App() {
  return (
    <>
      <HeaderwithButton />
      <Header title = "Rahul"></Header>
      <Header title = "Aman"></Header>
      <Header title = "Sparsh"></Header>
      <Header title = "Aaditya"></Header>
    </>
  )
}

function HeaderwithButton(){
  //local state
  const [title, setTitle] = useState("Rahul 1");

  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title} />
  </div>
}

function Header({ title }) {
    return <div>
      {title}
    </div>
}
export default App
