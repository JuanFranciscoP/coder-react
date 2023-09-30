import Nav from './components/NavBar/Nav'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'





function App() {
  

  return (
    <div className='bg-dark'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/Product/:id' element={<Product />}/>
      </Routes>
    </div>
    
      
  )
}

export default App
