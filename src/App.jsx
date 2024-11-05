import { useState } from 'react'
import './App.css'
import Signup from './pages/Signup.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './pages/Signin.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup />

    </>
  )
}

export default App
