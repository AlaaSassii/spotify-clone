import { useState } from 'react'
import Header from './layout/Header/Index'
import Footer from './layout/Footer/Index' ; 
import Home from './Pages/Home'
function App() {
  return (
    < >
    <Header/> 
    <Footer/>
    <div className='container'>
      <Home/>
    </div>
    </>
  )
}

export default App
