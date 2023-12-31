import React from 'react'
import './Department.css'

export default function Department() {
    return (
        <>
            <nav className="department-navbar center relative">
                <button>Create Department</button>
            </nav>
            <ul className='depatment-list flex relative coloum align-center'>
                <li className='list1 relative center'>
                    <h2 className="center">Department</h2>
                    <h3 className="center">Update</h3>
                    <h3 className="center">Delete</h3>
                </li>
                <li className='list relative center'>
                    <h5 className="center">IT</h5>
                    <h6 className="center"> <button>Update</button> </h6>
                    <h6 className="center"> <button>Delete</button> </h6>
                </li>
            </ul>
        </>
    )
}
