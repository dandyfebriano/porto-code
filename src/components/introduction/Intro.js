import React, { useEffect, useRef } from 'react'
import './Intro.css'
import { init } from 'ityped'

export default function Intro() {

  const textRef = useRef();
  const name = useRef();
  
  useEffect(() => {
    init(name.current, { 
      showCursor: true, 
      backSpeed: 200,
      strings: ['Dandy Febriano'] 
    });
    },[])

  useEffect(() => {
      init(textRef.current, { 
        showCursor: true,
        backSpeed: 200, 
        strings: ['Frontend Developer'] 
      });
      },[])
  return (
    <div className='intro' id='intro'>
      <div className='leftIntro'>
      <div className="imgContainer">
          <img src="assets/photo.png" alt="" />
        </div>
      </div>
      <div className='rightIntro'>
        <div className='wrapperIntro'>
          <h2>Hello there, I'm</h2>
          <h3><span ref={name}></span></h3>
          <h3>You can call me Dandy!</h3>
          <h3>I'm an aspiring <span ref={textRef}></span></h3>
        </div>
      </div>
    </div>
  )
}
