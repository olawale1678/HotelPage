import React from 'react'
import WCard from './WCard'
import './Work.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import wData from './wData'
import Slider from "react-slick";


const Work = () => {


    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
  return (
    <>
        <section className="work container">
            {
                wData.map((item) => {
                    return <WCard item = {item}/>
                })
            }
        </section>

        <section className="image__bottom container">
            <Slider {...settings}>
                <div className="img"><img src="/images/gallery/gallery-1.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-2.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-3.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-4.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-5.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-1.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-2.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-3.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-4.png"/></div>
                <div className="img"><img src="/images/gallery/gallery-5.png"/></div>
            </Slider>
        </section>
    </>
  )
}

export default Work
