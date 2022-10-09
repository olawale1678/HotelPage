import React from 'react'

const TCard = ({item}) => {
  return (
    <>
        <div className="testimonial__container">
            <div className="testimonial__text"><p>{item.desc}</p></div>
            
            <div className="testimonial__profile">
                <div className="image"><img src = {item.img} /></div>
                <div className="id">
                    <h1>{item.name}</h1>
                    <p>{item.occupation}</p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default TCard
