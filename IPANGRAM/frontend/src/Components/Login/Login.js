import React, { useState } from 'react';
import axios from 'axios'
import { useAppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import './Login.css';


export default function Login(props) {
    const user = props.user;
    console.log(user)
    const url = `http://localhost:3001/userAuth/${user}`
    const {dispatch} = useAppContext();
    const navigate = useNavigate();
   
    const [formData, setFormData] = useState({
        [`${user}Id`]: '',
        password: '',
    });

   

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post(url,formData);
         
          
            if (response.data.message) {
              
                await dispatch({ type: 'LOGIN', payload: response.data },{});
                navigate(`/${user}-dashboard`);
            } else {
                console.error('Login failed:', response.data.message);
                alert(response.data.message)
            }

        } catch (error) {
            console.error('Error during login:', error);

        }
    };

    return (
        <>
            <nav className='header flex row space-between align-center'>
                <Header />
            </nav>
            <main className="login center coloum">
                <h1>{user} Login</h1>
                <form onSubmit={handleSubmit} className="login-form relative center coloum space-evenly">
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
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    );
}
