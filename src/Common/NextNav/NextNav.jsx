import React from 'react'
import './NextNav.css'
import { NavLink } from 'react-router-dom'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaPhoneVolume} from 'react-icons/fa'
import {BiEnvelope} from 'react-icons/bi'


const NextNav = () => {
  return (
    <>
      <section className="nextnav">
        <div className="container flex__span">
            <div className="next__logo"><img src="/images/logo.png"/></div>
            
            <div className="next__content-header">
                <div className="next__content flex__span">
                    <div className="next__content-icon"><AiOutlineClockCircle/></div>
                    <div className="next__content-links">
                        <h3>Working Hours</h3>
                        <NavLink to='/contact'>Monday - Sunday: 9.00am to 6.00pm</NavLink>
                    </div>
                </div>

                <div className="next__content flex__span">
                    <div className="next__content-icon"><FaPhoneVolume/></div>
                    <div className="next__content-links">
                        <h3>Call Us Hours</h3>
                        <NavLink to='/contact'>+123 123 456 7890</NavLink>
                    </div>
                </div>

                <div className="next__content flex__span">
                    <div className="next__content-icon"><BiEnvelope/></div>
                    <div className="next__content-links">
                        <h3>Mail Us</h3>
                        <NavLink to='/contact'>info@example.gmail.com</NavLink>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default NextNav
