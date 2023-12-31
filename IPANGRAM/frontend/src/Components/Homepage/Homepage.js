import React from 'react'
import Header from '../Header/Header'
import './Homepage.css'


export default function Homepage() {
  return (
    <>
      <nav className='header flex row space-between align-center'>
          <Header/>
      </nav>
      <main className="homepage center relative coloum">
        <h1>Welcome To IPANGRAM </h1>
        <img src="https://static.wixstatic.com/media/bd286f_79d9526fd63b4c09b670e04cd035740f~mv2.png/v1/fill/w_150,h_86,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/i-Pangram.png" alt="IPANGRAM company logo" />
      </main>
    </>
  )
}
