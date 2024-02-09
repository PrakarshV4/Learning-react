import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <Header title="Title1" ></Header>
      <Header title="Title2" ></Header>
    </div>
  )
}
function Header ({title}){
  return <div>
    {title}
  </div>
}
export default App
