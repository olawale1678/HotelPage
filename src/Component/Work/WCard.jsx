import React from 'react'

const WCard = ({item}) => {
  return (
    <>
        <div className="work__item">
            <div className="work__image">
                <img src = {item.img}/>
            </div>
            
            <div className="work__text">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
            </div>
        </div>
    </>
  )
}

export default WCard
