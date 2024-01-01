import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Header/Header';
import './Register.css'
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
    const user = props.user
    const url = `http://localhost:3001/createUser/add${user}`
    const navigate = useNavigate();

    // emplyee registeration data 
    const [formData, setFormData] = useState({
        name: "",
        [`${user}Id`]: "",
        email: "",
        department: "",
        location: "",
        mobileN: "",
        password: ""
    });

    // Api to handle registration of User

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(url, formData);


            if (response.data.message) {


                navigate(`/${user}-login`);
            } else {
                console.error('Login failed:', response.data.message);
                alert(response.data.message)
            }

        } catch (error) {
            console.error('Error during login:', error);

        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }


    return (
        <>
            <nav className='header flex row space-between align-center'>
                <Header />
            </nav>
            <main className="register center coloum">
                <h1>{user} Register</h1>
                <form onSubmit={handleSubmit} className="register-form flex row wrap space-evenly">


                    <div className="input-container">
                        <label htmlFor={user}>{user} Name:</label>
                        <input
                            type="Text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor={user}>{user} ID:</label>
                        <input
                            type="number"
                            id={`${user}Id`}
                            name={`${user}Id`}
                            value={formData[`${user}Id`]}
                            onChange={handleChange}
                            placeholder={`Enter ${user}ID`}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor={user}>{user} Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor={user}>{user} Mobile No:</label>
                        <input
                            type="mobileNo"
                            id="mobileNo"
                            name="mobileNo"
                            value={formData.mobileNo}
                            onChange={handleChange}
                            placeholder="Enter mobileNo"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor={user}>{user} Department:</label>
                        <input
                            type="department"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder="Enter Department"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor={user}>{user} Location:</label>
                        <input
                            type="location"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter Location"
                            required
                        />
                    </div>
                    <div className="input-container relative center space-evenly coloum">
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter-Password"
                            autoComplete="current-password"
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </main>

        </>
    )
}
