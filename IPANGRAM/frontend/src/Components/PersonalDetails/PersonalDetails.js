import React from 'react'
import { useAppContext } from '../../Context/AppContext'
import './PersonalDetails.css'

export default function PersonalDetails() {

  const { state } = useAppContext();
  const {name,EmployeeId,email,department,location,mobileNo} = state.currentUser
  return (
    <>
    <ol className="maneger-info relative center coloum">
      <li>
        <b>Employee Id :- </b>
        <p>{EmployeeId}</p>
      </li>
      <li>
        <b>Name :- </b>
        <p>{name}</p>
      </li>
      <li>
        <b>Email :- </b>
        <p>{email}</p>
      </li>
      <li>
        <b>Mobile Number :- </b>
        <p>{mobileNo}</p>
      </li>
      <li>
        <b>Location:- </b>
        <p>{location}</p>
      </li>
      <li>
        <b>Department:- </b>
        <p>{department}</p>
      </li>
    </ol>
    
    </>
   
  )
}
