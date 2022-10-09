import React from 'react'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Common/NavBar/NavBar'
import About from './Component/About/About'
import Blog from './Component/Blog/Blog'
import SingleBlog from './Component/Blog/SingleBlog/SingleBlog'
import Contact from './Component/Contact/Contact'
import Destination from './Component/Destination/Destination'
import SinglePage from './Component/Destination/SinglePage/SinglePage'
import Error from './Component/Error/Error'
import Gallery from './Component/Gallery/Gallery'
import Home from './Component/Home/Home'
import Register from './Component/Register/Register'
import SignIn from './Component/SignIn/SignIn'
import Testimonial from './Component/Testimonial/Testimonial'



const App = () => {

  const [color, setColor] = useState(false)
  const changeColor = () => {
    setColor(!color)
  }
  return (
    <>
      <div className = {color ? "App dark-mode" : "App"}>
        <NavBar changeColor = {changeColor} color = {color}/>

        <Routes>
          <Route path='/' element = {<Navigate replace to = '/home'/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/gallery' element = {<Gallery/>}/>
          <Route path='/destination' element = {<Destination/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='/testimonial' element = {<Testimonial/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/sign-in' element = {<SignIn/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/singlepage/:id' element = {<SinglePage/>}/>
          <Route path='/singleblog/:id' element = {<SingleBlog/>}/>
          <Route path='/*' element = {<Error/>}/>
        </Routes> 
      </div>
    </>
  )
}

export default App
