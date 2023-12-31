import React from 'react'
import './Employees.css'
import { useAppContext } from '../../Context/AppContext'

export default function Employees() {

    const {state } = useAppContext();
  return (
    <>
    <nav className="employees-navbar center">
         <input type="search" name="searchby" id="searchby" />
         <button>Search</button>
     </nav>

   <ol className="employee-list flex coloum">
     <li style={{background:'green', color: 'white', fontWeight: 'bold' }} className="employee-details center relative space-between">
       <p>Sr.No  </p>
       <p>Name</p>
       <p>Employee Id</p>
       <p>Employee Email</p>
       <p>Department</p>
       <p>Location</p>
       <p>Mobile Number</p>
     </li>
     {state.Employees.map((employee,index)=>{
       return(
         <li className="employee-details center relative space-between" >
         <p>{index+1}</p>
         <p>{employee.name}</p>
         <p>{employee.EmployeeId}</p>
         <p>{employee.email}</p>
         <p>{employee.department}
          <button style={{width:'2rem',height:'1rem',fontSize:'0.5rem' ,position:'relative',left:"1rem"}}>change</button>
         </p>
         <p>{employee.location}</p>
         <p>{employee.mobileNo}</p>
       </li>
       )})}
    
     
   </ol>
   </>
  )
}
