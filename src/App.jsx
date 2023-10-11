import Nav from './components/NavBar/Nav'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ItemListContainer from './components/Items/ItemListContainer'
import Footer from './components/Footer/Footer'






function App() {
  

  return (
    <div className='body'>
      <Nav className="navbar" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/product/category/:category' element={<ItemListContainer/>}/>
      </Routes>
      <Footer/>
      
    </div>
    
      
  )
}

export default App
