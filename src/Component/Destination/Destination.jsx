import React from 'react'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import DCard from './DCard'
import Ddata from './Ddata'
import { NavLink } from 'react-router-dom'
import './Destination.css'

const Destination = () => {
  return (
    <>
      <HeaderTitle/>

      <div className='destination container'>
        {
          Ddata.map((item) => {
            return <NavLink to={`/singlepage/${item.id}`}>
              <DCard image = {item.img} title = {item.title} key={item.id}/>
            </NavLink>
          })
        }
      </div>
    </>
  )
}

export default Destination
