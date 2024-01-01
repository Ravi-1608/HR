import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <>

      <section className="logo">
        <Link to="/">
          <img src="https://static.wixstatic.com/media/bd286f_79d9526fd63b4c09b670e04cd035740f~mv2.png/v1/fill/w_150,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/i-Pangram.png" alt="IPANGRAM-Logo" />
        </Link>
      </section>
      <header className="navigation flex space-evenly align-center">
        <div className="authsection center flex wrap space-evenly">
          <header className='center'>
            <h1>Employee</h1>
          </header>
          <button>
            <Link to="/Employee-login">Login</Link>
          </button>
          <button>
            <Link to="/Employee-register">Register</Link>
          </button>
        </div>

        <div className="authsection center flex wrap space-evenly">
          <header className='center'>
            <h1>Manager</h1>
          </header>
          <button>
            <Link to="/Manager-login">Login</Link>
          </button>
          <button>
            <Link to="/Manager-register">Register</Link>
          </button>
        </div>

        <div className="authsection center flex wrap space-evenly">
          <header className='center'>
            <h1>Admin</h1>
          </header>

          <button>
            <Link to="/Admin-login">Login</Link>
          </button>
          <button>
            <Link to="/Admin-register">Register</Link>
          </button>
        </div>
      </header>


    </>
  )
}
