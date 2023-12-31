import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>
      
        <section className="logo">
          <Link to="/">
            <img src="https://static.wixstatic.com/media/bd286f_79d9526fd63b4c09b670e04cd035740f~mv2.png/v1/fill/w_150,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/i-Pangram.png" alt="IPANGRAM-Logo"  />
          </Link>
        </section>
        <header className="navigation flex space-evenly align-center">
          <Link to="/Employee-login">EmployeeLogin</Link>
          <Link to="/Manager-login">ManegerLogin</Link>
          <Link to="/Admin-login">AdminLogin</Link>
        </header>


    </>
  )
}
