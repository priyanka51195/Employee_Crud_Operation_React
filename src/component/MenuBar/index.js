import React from 'react'
import {useNavigate} from 'react-router-dom';


const MenuBar = () => {
  const navigate = useNavigate();
   
  const handleClick =()=>{
    navigate("/employee");
  }

  const handleUser =() => {
    navigate("/usermaster")
  }

  const handleDash =() => {
    navigate("/dashboard")
  }

  return (
<div>
  <div style={{ display: 'flex', justifyContent: 'space-evenly',  backgroundColor: '#736F6E', padding: '20px', cursor: 'pointer', color: 'white'}}>
    <span onClick= {handleDash}>Dashboard </span>
    <span onClick= {handleClick}>Employee Master</span>
    <span onClick= {handleUser} >User Master </span>
  </div>
  

</div>
      
    
  )
}

export default MenuBar
