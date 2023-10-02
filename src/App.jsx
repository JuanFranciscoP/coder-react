import Nav from './components/NavBar/Nav'
import './App.css'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ItemListContainer from './components/Items/ItemListContainer'






function App() {
  

  return (
    <div className='bg-dark'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/product/category/:category' element={<ItemListContainer/>}/>
      </Routes>
    </div>
    
      
  )
}

export default App
