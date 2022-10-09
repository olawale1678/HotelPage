import React from 'react'
import './About.css'

const Feature = () => {
  return (
    <> 
      <section className="about container">
          <div className="about__text">
          <h3>About Us</h3>
          <h1>
              We <span>Provide Solution</span> to grow your business
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos laboriosam excepturi, modi tenetur provident fuga doloremque animi quisquam impedit officiis quo dolore non? Earum eaque aliquid voluptate cupiditate molestias.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus dignissimos laboriosam excepturi, modi tenetur provident fuga doloremque animi quisquam impedit officiis quo dolore non? Earum eaque aliquid voluptate cupiditate molestias.</p>
          <button className='primary-btn'>Explore More<span>	&#8594; </span></button>
          </div>

          <div className="about__img">
          <img src="/images/about-img-1.jpg"/>
          </div>
      </section>    
    </>
  )
}

export default Feature
