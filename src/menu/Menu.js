import React from 'react'
import "./Menu.css"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'Menu '+(menuOpen && 'active')}>
        <ul>
            <li>
                <a href="#intro">Introduction</a>
            </li>
            <li>
                <a href="#about">About me</a>
            </li>
            <li>
                <a href="#experience">Experience</a>
            </li>
        </ul>
    </div>
  )
}
