import React from 'react'
import './Header.css';
import logo from '../Assets/WhiteLogo.png'

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Logo"/>
        <h1>Statos Warehouse Management</h1>
    </header>
  )
}

export default Header