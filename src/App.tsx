
import './indexGlobal.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Products from './Routes/Products';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
   <>
   <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
</BrowserRouter>
   </>
  )
}

export default App
