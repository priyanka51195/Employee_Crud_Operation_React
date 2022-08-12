import React from "react";
import './App.css';
import LoginPage from "./component/Login/index";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import Employeepage from './component/Employee/index'
import Header from './component/Header/index'
import UserMaster from './component/UserMaster/index'
import Addemploye from './component/Employee/AddEmp/Addemploye'
import AddUser from './component/UserMaster/AddUser/index'


const App =() => { 

  return (
    <div>
      <div>
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/employee" element={<Employeepage/>}></Route> 
            <Route path="/usermaster" element={<UserMaster/>}></Route>
    
            <Route path="/addEmp" element={<Addemploye/>}></Route>   
            <Route path="/adduser" element={<AddUser/>}></Route>
            <Route path="/edit-usermaster/:sNo" element={<AddUser/>}></Route>
            <Route path="/edit-employee/:id" element={<Addemploye/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
