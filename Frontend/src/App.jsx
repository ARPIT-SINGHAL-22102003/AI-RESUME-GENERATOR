import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Button  from './components/ui/button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Welcome to the AI Resume Generator
      <Button>Press</Button>
    </>
  )
}

export default App
