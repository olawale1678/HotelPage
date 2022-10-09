import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderTitle from '../../Common/HeaderTitle/HeaderTitle'
import './Contact.css'

const Contact = () => {

  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    number: '',
    email: '',
    subject: '',
    company: '',
    message: '',
  })

  const [cond, setCond] = useState(false)
  const [one, setOne] = useState(false)

  const onInputChange = (e) => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const rem = (e) => {
    setCond(false)
  }

  useEffect(() => {
    if ((inputs.firstname.length >= 3 || inputs.firstname.length < 10) && (inputs.lastname.length >= 3 || inputs.lastname.length < 10) && inputs.number.length === 10 && inputs.subject.length >= 5 && inputs.company.length >= 5 && inputs.message.length > 10) {
      setOne(true)
    }
  }, [inputs])
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    setCond(true)
  }

  return (
    <>
      <HeaderTitle/>

      <div className="contact container">
        <div className="contact__heading">
          <h1>Contact Form</h1>
          <p>Fill out the form below, we will get back to you soon</p>
        </div>

        <div className="form">
          <form>
            <div className="input-one grid">
              <div className="one">
                <p>First Name</p>
                <input onChange={onInputChange} value = {inputs.firstname} type="text" name='firstname' />
              </div>

              <div className="two">
                <p>Last Name</p>
                <input onChange={onInputChange} value = {inputs.lastname} type="text" name='lastname'/>
              </div>
            </div>

            <div className="input-two grid">
              <div className="one">
                <p>Phone Number</p>
                <input onChange={onInputChange} value = {inputs.number} type="number" name='number'/>
              </div>

              <div className="two">
                <p>Email</p>
                <input onChange={onInputChange} value = {inputs.email} type="email" name='email'/>
              </div>
            </div>

            <div className="input-three grid">
              <div className="one">
                <p>Subject</p>
                <input onChange={onInputChange} value = {inputs.subject} type="text" name='subject'/>
              </div>

              <div className="two">
                <p>Your Company</p>
                <input onChange={onInputChange} value = {inputs.company} type="text" name='company'/>
              </div>
            </div>

            <div className="textarea">
              <p>Write Your Message</p>
              <textarea onChange={onInputChange} value = {inputs.message} name="message" cols="30" rows="10"></textarea>
            </div>

            <button onClick={ one ? onFormSubmit : null} className="primary-btn">Submit</button>
          </form>

          {
            cond && <div className="response">
              <div className="response__container">
                <p>First Name: {inputs.firstname}</p>
                <p>Last Name: {inputs.lastname}</p>
                <p>Phone Number: {inputs.number}</p>
                <p>Email: {inputs.email}</p>
                <p>Subject: {inputs.subject}</p>
                <p>Company: {inputs.company}</p>
                <p>Message: {inputs.message}</p>
              </div>

            <button onClick={rem} to = '/contact' className = 'primary-btn'>Go Back</button>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Contact
