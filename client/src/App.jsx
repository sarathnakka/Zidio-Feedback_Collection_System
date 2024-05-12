import Login from "./components/Login"
import Signup from "./components/Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Options from "./components/Options"
import Home from './components/Home'
import Student from './components/Student'
import Teacher from './components/Teacher'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/options" element={<Options />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Teacher" element={<Teacher />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App