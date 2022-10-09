import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'

const DCard = ({image, title}) => {
  return (
    <>
        <div className="destination__card">
            <div className="destination__image">
                <img src = {image}/>
                <FaExternalLinkAlt className='destination__image-icon'/>
            </div>
            <div className="destination__text">
                <p>{title}</p>
            </div>
        </div>
    </>
  )
}

export default DCard
