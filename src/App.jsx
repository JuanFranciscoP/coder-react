import { useState } from 'react'
import Nav from './components/NavBar/Nav'
import ItemListContainer from './components/Items/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'



function App() {
  

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>}/>
        {/* <ItemListContainer/>
        <ItemDetailContainer/> */}
      </Routes>
    </>
    
      
  )
}

export default App
