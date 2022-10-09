import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import HeaderTitle from '../../../Common/HeaderTitle/HeaderTitle.jsx'
import Ddata from '../Ddata.jsx'
import {MdOutlineSmartphone} from 'react-icons/md'
import './SinglePage.css'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import Error from '../../Error/Error.jsx'

const SinglePage = () => {

  const params = useParams()
  const getItem = Ddata.find((item) => item.id == params.id);

  return (
    <>
      {
        getItem &&  <HeaderTitle/>
      }

      {
        getItem ? <section className="singlePage container">
        <NavLink to = '/destination' className = 'singlePage-btn primary-btn'><MdOutlineKeyboardBackspace/> Go Back</NavLink>
        <div className="singlePage__header">
          <div className="singlePage__image-left">
            <img src = {getItem.img}/>
          </div>

          <div className="singlePage__image-right">
            <div className="singlePage__top">
              <h1>How can we help you?</h1>
              <p className="first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus expedita architecto ad dolore corrupti iste consectetur perspiciatis quibusdam molestias, error minima velit dolores debitis qui suscipit? Fugiat perspiciatis optio quam ex, possimus quia corrupti explicabo veniam, accusantium, blanditiis dolor voluptatum!</p>
              <button className='singlePage__image-btn'> <MdOutlineSmartphone/> Contact Us</button>
            </div>

            <div className="singlePage__bottom">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, accusamus. adipisicing elit. Veniam aliquid ullam fuga in, dolore optio modi ut hic saepe possimus dolorem doloribus voluptates accusamus! Ex odio fuga nisi dolor debitis.</p>
            </div>
          </div>
        </div>

        <div className="singlePage__text">
          <p>{getItem.desc} {getItem.desc}</p>
          <p>{getItem.para} {getItem.para}</p>

          <div className="singlePage__text-second">
            <p>{getItem.desc}</p>
            <p>{getItem.para}</p>
          </div>
          
          <div className="singlePage__question">
            <h1>What is {getItem.title} the City?</h1>
            <p>{getItem.desc} {getItem.desc}</p>

            <div className="singlePage__question-image">
              <div className="image">
                <img src = '/images/singlepage/single-1.jpg'/>
              </div>

              <div className="image">
                <img src = '/images/singlepage/single-2.jpg'/>
              </div>
            </div>  
            <p>{getItem.desc} {getItem.desc}</p>
          </div>
        </div>

      </section> : <Error/>
      }
    </>
  )
}

export default SinglePage
