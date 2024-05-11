import Login from "./Login"
import Signup from "./Signup"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Options from "./Options"
import Home from './Home'
import Student from './Student'
import Teacher from './Teacher'

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