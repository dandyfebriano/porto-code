import React, { useState } from 'react'
import './Experience.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { Icon } from '@mui/material';

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "workOutline",
      title: "Akletion",
      desc:
" As a final assignment for `Proyek Pengembangan Sistem Informasi` course, me and my team develop Akletion, an information system built for Akseleran to help the relationship manager on managing the institutional lender. In this project, i worked on managing user and roles feature. This project started from February 2020 to June 2020. The tech stacks that are used in this system are Flask for backend, ReactJS, Redux, and Semantic-UI for the frontend.",
      img:
        "assets/akletion.jpg",
    },
    {
      id: "2",
      icon:"workOutline",
      title: "PT Dagsap Endura Eatore",
      desc:
      "Doing internship from September 2021 to December 2021 as a fullstack developer. In this company, me and my intern colleague worked on a Complaint Management System for the company. The tech stacks that are used in this system are Django for backend and Bootstrap 5 for CSS Framework",
      img:
      "assets/dagsap.jpg"
    },
    {
      id: "3",
      icon: "workOutline",
      title: "Try Out dan Bedah Kampus Saimala Eldorado 2019",
      desc: "Worked as a PIC of Equipment in the Roadshow, Transportation and Equipment division. In this division, i'm responsible to provide the logistics that are necessary for the series of events such as roadshow to 50+ schools, Saimala Car Free Day and the main event of TOBK Saimala Eldorado 2019.",
      img: "assets/eldorado.png"
    }
  ]

  const handleClick = (x) => {
    x === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className='experience' id='experience'>
        <h1>Experience</h1>
        <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className="imgContainer">
                    <Icon children={d.icon}/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                </div>
              </div>
              <div className='right'>
                <img src={d.img}>

                </img>
              </div>
            </div>
          </div>
          ))}
        </div>
        <ArrowBackIosRoundedIcon className='arrow left' onClick={() =>handleClick("left")}/> 
        <ArrowForwardIosRoundedIcon className='arrow right' onClick={() =>handleClick()}/>
    </div>
  )
}
