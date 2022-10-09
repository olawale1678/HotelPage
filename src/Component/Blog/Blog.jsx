import React from 'react'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import BCard from './BCard'
import BData from './BData'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <HeaderTitle/>

      <div className="blog container">
        {
          BData.map((item) => {
            return <BCard item = {item} key = {item.id}/>
          })
        }
      </div>
    </>
  )
}

export default Blog
