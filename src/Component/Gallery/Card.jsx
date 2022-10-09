import React from 'react'
import {BsImage} from 'react-icons/bs'
import { useState } from 'react'

const Card = ({images, title, id}) => {

    const [display, setDisplay] = useState(false);

    const popUp = () => {
        setDisplay(true)
    }

    const popDown = () => {
        setDisplay(false)
    }
  return (
    <>
      <div className="gallery__item" onClick={popUp} key = {id}>
        <div className="gallery-image">
            <img src = {images}/>
            <BsImage className='overlay-image'/>
        </div>
        <div className="gallery-text">
            <p>{title}</p>
        </div>
      </div>

      {
        display && <div className='display'>
            <div className="display__cover container" key={id}>
                <div className='display__cover-img'>
                  <img src = {images}/>
                </div>
                <div className='display__cover-btn'>
                  <button onClick={popDown}>Close</button>
                </div>
            </div>
        </div>
      }
    </>
  )
}

export default Card
