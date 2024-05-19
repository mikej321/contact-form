import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <Form />
}

const Form = () => {
  return (
    <div className="form_container">
      <h1 className="title">Contact Us</h1>
      <div className="form_input first_name_input">
        <label htmlFor="first_name">
          First Name <span>*</span>
        </label>
        <input type="text" name="first_name" id="first_name" />
      </div>
      <div className="form_input last_name_input">
        <label htmlFor="last_name">
          Last Name <span>*</span>
        </label>
        <input type="text" name="last_name" id="last_name" />
      </div>
      <div className="form_input email_input">
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="form_input query_input">
        <label>
          Query Type <span>*</span>
        </label>
        <div className="query_radio_buttons">
          <div className="radio_container">
            <input type="radio" name="gen_inquiry" id="gen_inquiry" />
            <p>General Enquiry</p>
          </div>
          <div className="radio_container">
            <input type="radio" name="sup_request" id="sup_request" />
            <p>Support Request</p>
          </div>
        </div>
      </div>
      <div className="form_input message_input">
        <label htmlFor="message">Message 
          <span>*</span>
        </label>
        <input className="message_area" type="text" name="message" id="message" />
      </div>
      <div className="consent_container">
        <input type="checkbox" name="consent_check" id="consent_check" />
        <p>I consent to being contacted by the team <span>*</span></p>
      </div>
      <button className="submit_button" type="button">Submit</button>
    </div>
  )
}

export default App
