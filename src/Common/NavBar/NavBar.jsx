import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiMoon } from 'react-icons/hi'
import { BsSun } from 'react-icons/bs'
import './NavBar.css'
import NextNav from '../NextNav/NextNav'
import { useState } from 'react'

const NavBar = ({changeColor, color}) => {

  const [menu, setMenu] = useState(false)

  const onBurgerToggle = () => {
    if (window.innerWidth < 986) {
      setMenu(!menu)
    }
  }

  const changeTheme = () => {
    changeColor()
  }
  

  return (
    <>
      <section>
        <div className='navbar'>
          <div onClick={onBurgerToggle} className = {menu ? 'burger__menu burger-active' : 'burger__menu'}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className = {menu ? "nav flex__span active-nav" : "nav flex__span"}>
            <div className = 'theme' onClick = {changeTheme}>
              <span><BsSun className='theme-fonts'/></span>
              <button><span className = {color ? 'span active' : 'span'}></span></button>
              <span><HiMoon className='theme-fonts'/></span>
            </div>
            <div className="navPages">
              <NavLink onClick={onBurgerToggle} to = '/home' className={({isActive}) => (isActive ? 'active' : '')}>Home</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/about'>About</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/gallery'>Gallery</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/destination'>Destination</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/blog'>Blog</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/testimonial'>Testimonial</NavLink>
              <NavLink onClick={onBurgerToggle} className={({isActive}) => (isActive ? 'active' : '')} to = '/contact'>Contact Us</NavLink>
            </div>
          </div>

          <div className="credientials">
            <NavLink to = '/sign-in'>Sign In</NavLink>
            <NavLink to = '/register'>Register</NavLink>
          </div>
        </div>

        <NextNav/>
      </section>
    </>
  )
}

export default NavBar
