import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {GrLinkNext, GrLinkPrevious} from 'react-icons/gr'
import {BsFillCircleFill} from 'react-icons/bs'
import Feature from '../About/Feature'
import DCard from '../Destination/DCard'
import Ddata from '../Destination/Ddata'
import HData from './HData'
import './Home.css'
import Popular from '../Popular/Popular'
import Download from '../Download/Download'
import Work from '../Work/Work'


const Home = () => {

  const [current, setCurrent] = useState(0)

  let length = HData.length;

  const prevBtn = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextBtn = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      nextBtn()
    }, 3000);

    return () => {
      clearTimeout(timeId)
    }
  }, [current])

  const nothing = () => {
    let ball;
  }

  const renderImages = HData.map((images, index) => {
    if (index === current) {
      return <div key={index} className = {index === current ? 'img active' : 'img'}>
        <img src = {images.img}/>
      </div>
    }
  })

  return (
    <>
      <section className="home">
        <div className="home__image">
          <div>
            {renderImages}
          </div>

          <div className="home__btn">
            <button onClick={prevBtn}> <span><GrLinkPrevious/></span></button>
            <button onClick={nextBtn}> <span><GrLinkNext/></span></button>
          </div>
        </div>
        
        <div className="form__heading">
          <form>
            <div className="text">
              <h1>Enjoy Your Holiday</h1>
              <p>Search and Book Hotel</p>
            </div>
            <div className="city">
              <input type="text" placeholder='Search City'/>
            </div>

            <div className="dates flex__span">
              <input type="date" />
              <input type="date" />
            </div>

            <div className="ages flex__span">
              <input type="number" placeholder='Adult(s)(+18)'/>
              <input type="number" placeholder='Children(0 - 17)'/>
            </div>

            <div className="room">
              <input type="number" placeholder='Rooms'/>
            </div>

            <div className="btn">
              <input type="submit" value = 'Search' onClick={nothing}/>
            </div>
          </form>
        </div>
        <Feature/>

        <section className="home__destination container">
          <div className="home__destination-heading">
            <h1 style={{color: 'var(--color-toggle)'}}>Most Popular Hotel</h1>
            <div className="underLine">
              <span><BsFillCircleFill/></span>
              <span>-----------------------------------</span>
              <span><BsFillCircleFill/></span>
            </div>
          </div>
        </section>

        <Popular/>

        <section className="home__destination container">
          <div className="home__destination-heading">
            <h1  style={{color: 'var(--color-toggle)'}}>Most Popular Destination</h1>
            <div className="underLine">
              <span><BsFillCircleFill/></span>
              <span>-----------------------------------</span>
              <span><BsFillCircleFill/></span>
            </div>
          </div>
        </section>

        <div className="destination__container">
          <div className='destination container'>
            {
              Ddata.map((item) => {
                return <DCard title = {item.title} image = {item.img}/>
              })
            }
          </div>
        </div>

        <Download/>

        <section className="home__destination container">
          <div className="home__destination-heading">
            <h1 style={{color: 'var(--color-toggle)'}}>How it Works</h1>
            <div className="underLine">
              <span><BsFillCircleFill/></span>
              <span>-----------------------------------</span>
              <span><BsFillCircleFill/></span>
            </div>
          </div>
        </section>
        <Work/>
      </section> 

      
    </>
  )
}

export default Home
