import React from 'react'
import { NavLink } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const BCard = ({item}) => {
  return (
    <>
        <section className="blog__container">
            <div className="blog__image"><img src = {item.img} /></div>

            <div className="blog__content">
                <div className="blog__content-heading flex__span">
                    <p>{item.date}</p>
                    <span>{item.barge}</span>
                </div>

                <div className="blog__desc">
                    <h3>{item.title}</h3>
                    <p>{item.para}</p>
                    <NavLink to={`/singleblog/${item.id}`}>READ MORE <HiOutlineArrowNarrowRight className='icon'/></NavLink>
                </div>
            </div>
        </section> 
    </>
  )
}

export default BCard
