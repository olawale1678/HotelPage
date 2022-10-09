import React from 'react'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import TCard from './TCard'
import TData from './TData'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <>
      <HeaderTitle/>

      <section className="testimonial container">
        {
          TData.map((item) => {
            return <TCard item = {item} key = {item.img}/>
          })
        }
      </section>
    </>
  )
}

export default Testimonial
