import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
        <h2>This website is built using</h2>
        <div className='iconContainer'>
          <img src='assets/reactjs.png' id='a'></img>
          <img src='assets/material-ui.png' id='b'></img>
        </div>
    </div>
  )
}
