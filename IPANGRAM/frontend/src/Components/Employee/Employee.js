import React from 'react'
import './Employee.css'
import { Link } from 'react-router-dom'
import PersonalDetails from '../PersonalDetails/PersonalDetails'
import Footer1 from '../Footer/Footer1';

export default function Employee(props) {
  const url = props.url;
  console.log(url)
  return (
    <>
      <main className="employee-dashboard flex row relative">
        <nav className="employee-navbar flex coloum relative space-between">
          <div className="profile center">
            Employee-id-123
          </div>
          <header className='employee-header center coloum '>
            <Link to='/Employee-dashboard/personal'>Personal Details</Link>
            <Link to='/Employee-dashboard/task'>Task</Link>
            <Link to='/Employee-dashboard/salary'>Salary Slip</Link>
          </header>
         <Footer1/>
        </nav>

        <main className="employee-controller relative center coloum">
          {
            url === 'personal' ? <PersonalDetails/> :
            url === 'task' ? <h1>task will Be Available soon</h1> :
            url === 'salary' ? <h1>salary slip will Be Available soon</h1> :
            <h1>Emplyee DashBoard</h1>

          }
          
   

        </main>
      </main>

    </>
  )
}
