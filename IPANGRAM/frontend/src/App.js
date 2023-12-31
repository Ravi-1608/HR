import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage';

import Footer from './Components/Footer/Footer';
import Employee from './Components/Employee/Employee';
import Manager from './Components/Manager/Manager';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import { useAppContext } from './Context/AppContext';


function App() {

  const { state } = useAppContext();

  return (
    <>

      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* login Routes */}

        <Route path='/Employee-login' element={<Login user='Employee' />} />
        <Route path='/Manager-login' element={<Login user='Manager' />} />
        <Route path='/Admin-login' element={<Login user='Admin' />} />

        {/* Dashboard Routes */}

        <Route path='/Employee-dashboard' element={state.isLoggedIn ? <Employee /> : <Login user="Employee" />} />
        <Route path='/Manager-dashboard' element={state.isLoggedIn ? <Manager /> : <Login user="Manager" />} />
        <Route path='/Admin-dashboard' element={state.isLoggedIn ? <Admin /> : <Login user="Admin" />} />

        {/* Maneger Dashboard Routes */}

        <Route path='/Manager-dashboard/personal' element={state.isLoggedIn ? <Manager url="personal"/> : <Login user="Manager" />}  url="personal" />
        <Route path='/Manager-dashboard/employees' element={state.isLoggedIn ? <Manager url="employees"/> : <Login user="Manager" />} url="employees" />
        <Route path='/Manager-dashboard/department' element={state.isLoggedIn ? <Manager url="department"/> : <Login user="Manager" />} url="department" />

        {/* Employee Dashboard Routes */}

        <Route path='/Employee-dashboard/personal' element={state.isLoggedIn ? <Employee url="personal"/> : <Login user="Employee" />}  />
        <Route path='/Employee-dashboard/task' element={state.isLoggedIn ? <Employee url="task"/> : <Login user="Employee" />} />
        <Route path='/Employee-dashboard/salary' element={state.isLoggedIn ? <Employee url="salary" /> : <Login user="Employee" />} />

      </Routes>
      <footer className='footer center'>
        <Footer />
      </footer>



    </>
  );
}

export default App;
