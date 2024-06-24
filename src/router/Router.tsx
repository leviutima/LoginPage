import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Router.ts'
import Home from '../pages/Home/Home.tsx'
import SingUp from '../pages/SingUp/SignUp.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Sign-up' element={<SingUp/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
