import React from 'react'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import Card from './Card'
import GData from './GData'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
      <HeaderTitle/>

      <section className="gallery container">
        {
          GData.map((item) => {            
            return <Card key={item.id} images = {item.img} id = {item.id} title = {item.text}/>
          })
        }
      </section>
    </>
  )
}

export default Gallery
