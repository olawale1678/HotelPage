import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {BsPlayCircle} from 'react-icons/bs'
import BData from '../BData';
import Error from '../../Error/Error';
import HeaderTitle from '../../../Common/HeaderTitle/HeaderTitle';
import './SingleBlog.css'
import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import { useState } from 'react';

const SingleBlog = () => {

  const params = useParams();
  const getItems = BData.find((item) => item.id == params.id)
  const [scro, setScro] = useState(null)

  document.addEventListener('scroll', () => {
    setScro(window.scrollY)
  })
  

  return (
    <>
      
      {
        getItems &&  <HeaderTitle/>
      }

      {
        getItems ? <section className="singleblog container">
          <NavLink className = {scro > 10 ? 'primary-btn single-blog-btn top' : 'primary-btn single-blog-btn'} to = '/blog'><MdOutlineKeyboardBackspace className='icon'/>Go Back</NavLink>
          <div className="single__blog-container">            
            <div className="singleblog__left">
              <div className="singleblog__image"><img src = {getItems.img} /></div>

              <div className='singleblog__left-next'>
                <div className="singleblog__text">
                  <div className="singleblog__text-top flex__span">
                    <p>{getItems.date}</p>
                    <span>{getItems.barge}</span>
                  </div>

                  <div className="singleblog__text-bottom">
                    <h1>{getItems.title}</h1>
                    <p>{getItems.text}</p>
                    <p>{getItems.text}</p>
                  </div>

                  <div className="column">
                    <h3>Two Column Text Sample</h3>
                    <div className="text">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, at aliquid enim voluptatum ipsum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis illo qui maiores voluptatem sint. Ducimus repudiandae placeat vel!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, at aliquid enim voluptatum ipsum aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis illo qui maiores voluptatem sint. Ducimus repudiandae placeat vel!</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="singleblog__right">
              <div className="singleblog__right-heading">
                <h2>Category</h2>
                <span>.....................</span>
              </div>

              <div className="singleblog__right-body">
                <ul>
                  <li><BsPlayCircle className='icon'/> Business</li>
                  <li><BsPlayCircle className='icon'/> Traveling</li>
                  <li><BsPlayCircle className='icon'/> Development</li>
                  <li><BsPlayCircle className='icon'/> Motion Designer</li>
                  <li><BsPlayCircle className='icon'/> Content Writing</li>
                  <li><BsPlayCircle className='icon'/> Web Development</li>
                  <li><BsPlayCircle className='icon'/> Business Strategy</li>
                  <li><BsPlayCircle className='icon'/> UI/UX Designer</li>
                  <li><BsPlayCircle className='icon'/> Conent Writing</li>
                </ul>
              </div>
            </div>
          </div>
        </section> : <Error/>
      }
    </>
  )
}

export default SingleBlog
