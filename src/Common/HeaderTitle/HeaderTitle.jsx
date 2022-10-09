import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './HeaderTitle.css'

const HeaderTitle = () => {

    const location = useLocation()
    const locate = location.pathname.split('/')[1];

  return (
    <>
        <section className='headertitle__bg'>
            <div className="headertitle__text flex__span container">
                <div className="section">
                    <h1>{locate}</h1>
                </div>

                <div className="path">
                    <NavLink to='/home'>Home  /</NavLink>
                    <h4>{locate}</h4>
                </div>
            </div>
        </section> 
    </>
  )
}

export default HeaderTitle
