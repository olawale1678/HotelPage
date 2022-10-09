import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {MdOutlineHorizontalRule} from 'react-icons/md'

const PCard = ({item}) => {
  return (
    <>
        <div className="popular__container" key={item.id}>
            <div className="popular__image">
                <img src = {item.img}/>
                <h4 className='location'><IoLocationSharp/>{item.location}</h4>
            </div>
            <div className="popular__text">
                <div className="stars">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>
                <div className="price">
                    <h4>{item.name}</h4>
                    <div className="lines">
                        <span className='first'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule className='sec'/></span>
                        <span className='second'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule className='fir'/><MdOutlineHorizontalRule className='sec'/><MdOutlineHorizontalRule className='thir'/></span>
                    </div>
                    <h4 className='price__amount'>{item.price}</h4>
                    <span className='price__text'>Per Night</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default PCard
