import React from 'react'
import './Topbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Topbar({menuOpen, setMenuOpen}){
  return (
    <div className={"topbar " +(menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
              <MenuRoundedIcon className='icon'
              style={{cursor:'pointer'}} onClick={() => setMenuOpen(!menuOpen)}/>
          </div>
          <div className="right">
            <a href = "https://www.linkedin.com/in/dandy-febriano-294363194/">
              <div className='itemContainer' style={{cursor:'pointer'}}>
                  <LinkedInIcon className='icon' />
                  <span>Dandy Febriano</span>                
              </div>
            </a>
            <a href = "https://www.instagram.com/dandy_febriano/">
              <div className='itemContainer' style={{cursor:'pointer'}}>
                  <InstagramIcon className='icon' />
                  <span>Dandy Febriano</span>                
              </div>
            </a>
              <div className='itemContainer' style={{cursor:'pointer'}}>
                <EmailIcon className='icon' />
                <span>febrianod@gmail.com</span>
              </div>
              <a href = "https://bit.ly/3htGudD">
              <div className='itemContainer' style={{cursor:'pointer'}}>
                  <span>Funfacts about me</span>                
              </div>
            </a>
              <a href="#intro" className='logo'>hello.</a>
          </div>
        </div>
    </div>
  )
}
