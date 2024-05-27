import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Admin from '../Pages/Admin'
import './assets/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from '../Pages/Add'
import Edit from '../Pages/Edit'
import Favorilerim from '../Pages/Favorilerim'
import Home from '../Pages/Home'

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/Add' element={<Add />} />
            <Route path='/Edit/' element={<Edit />} />
            <Route path='/Favoritler' element={<Favorilerim />}/>
          </Route>
       </Routes>
    </>
  )
}

export default App
