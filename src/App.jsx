import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
