import React from 'react';

import { useAppContext } from '../../Context/AppContext';
import './Footer.css'

export default function Footer1() {
    const { dispatch} = useAppContext();
    const handleLogout = () =>{
        dispatch({type:'LOGOUT', payload:''})   
    }
    return (
        <footer className="maneger-footer center">
            <button onClick={handleLogout}>Logout</button>
        </footer>
    )
}
