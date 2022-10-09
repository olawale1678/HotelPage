import React from 'react'
import './Download.css'
import {HiOutlineCheck} from 'react-icons/hi'

const Download = () => {
  return (
    <>
        <section className="download">
            <div className="download__container container">
                <div className="download__left">
                    <h3>Download Our app</h3>
                    <h1>Wow! Get This Template App For Your Mobile</h1>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <p><HiOutlineCheck/> Get paperless confirmation</p>
                    <div className="stores">
                        <div className="img__left"><img src="/images/appstore-button.png"/></div>
                        <div className="img__right"><img src="/images/google-play-button.png"/></div>
                    </div>
                </div>
                <div className="download__right"><img src="/images/app-image-1.png"/></div>
            </div>
        </section>
    </>
  )
}

export default Download
