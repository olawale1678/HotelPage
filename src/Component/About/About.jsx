import React from 'react'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import Feature from './Feature'
import './Feature.css'

const About = () => {
  return (
    <>
      <HeaderTitle/>
      <Feature/>

      <section className="feature container">
        <div className="feature__image">
          <img src="/images/feature-img-1.jpg"/>
        </div>

        <div className="feature__text">
          <h3>Our <span>Features</span> </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit impedit voluptatem numquam, quia veritatis, itaque accusamus minima repellat similique labore facere magnam voluptatibus molestias magni deserunt aspernatur animi, tempore tempora.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit impedit voluptatem numquam, quia veritatis, itaque accusamus minima repellat similique labore facere magnam voluptatibus molestias magni deserunt aspernatur animi, tempore tempora.</p>
          <button className='primary-btn'>Explore More<span>	&#8594; </span></button>
        </div>
      </section> 

    </>
  )
}

export default About
