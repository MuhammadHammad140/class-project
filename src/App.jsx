import React from 'react'
import Navbar from './componants/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './componants/Home'
import About from './componants/About'
import Poems from './componants/Poems'
import Contact from './componants/Contact'
import Movies from './componants/Movies'
import SoloPerformance from './componants/SoloPerformance'
import MoviesDetails from './componants/MoviesDetails'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/poems' element={<Poems/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:name' element={<MoviesDetails/>}/>
        <Route path='/soloperformance' element={<SoloPerformance/>}/>

        
      </Routes>
    </>
  )
}

export default App
