import React from 'react'
import './Maneger.css'
import { Link } from 'react-router-dom'
import Department from '../Departments/Department'
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import Employees from '../ListOfEmployees/Employees'
import Footer1 from '../Footer/Footer1'


export default function Manager(props) {

  const handleclick = () =>{
    try {
      
    } catch (error) {
      
    }
  }

  
 const url = props.url;
  return (
    <>
      <main className="maneger-dashboard flex row relative">
        <nav className="maneger-navbar flex coloum relative space-between">
          <div className="profile center">
            Maneger-id-123
          </div>
          <header className='manager-header center coloum '>
            <Link to='/Manager-dashboard/personal' >Personal Details</Link>
            <Link to='/Manager-dashboard/employees' onClick={handleclick}>Emplyees</Link>
            <Link to='/Manager-dashboard/department' >Department</Link>
          </header>
          <Footer1/>
        </nav>

        <main className="maneger-controller relative center coloum">
          {
          url === 'personal' ? <PersonalDetails/>:
          url === 'department' ? <Department/> :
          url === 'employees' ? <Employees/> : 
          <PersonalDetails/>
          }

        
        
        </main>
      </main>


    </>
  )
}
