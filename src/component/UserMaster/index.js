import React, { useState, useEffect} from 'react'
import MenuBar from '../MenuBar/index'
import Table from 'react-bootstrap/Table';
import {Heading ,AddUser} from './style.js'
import {Link, useNavigate} from 'react-router-dom';

const UserMaster = () => {
  const [userData, setUserData] = useState([])
  const navigate = useNavigate();

  const handleClick =() => {
    navigate("/adduser")
  }

  useEffect(()=>{
    getUser();
},[])

const getUser = () =>{
    const localstor = JSON.parse(localStorage.getItem('userDetails'));
    console.log(localstor, 'local');
    if(localstor){
      setUserData(localstor)
    }
    console.log(userData, 'userData')
}

const deleteUser = (userId) =>{  
    let userUpdatedDetails = userData.filter(element => element.srNo !== userId);
    localStorage.setItem('userDetails', JSON.stringify(userUpdatedDetails));
    getUser();
   
}
    
  return (
    <div>
     <div><MenuBar/> </div>
    <div>   
        <Heading>User Master</Heading>
    </div>
       <AddUser onClick ={ handleClick}>  <button>  Add User +</button>  </AddUser>

       <div style={{ marginLeft: '120px'}}>
        <table style={{ width:'85%', border: '1px solid black', margin: '20px',borderCollapse: 'collapse'}}>
            <tr style={{ backgroundColor: '#B6B6B4'}}>
              <th  style={{border: '1px solid black'}}>Sr.No.</th>
              <th  style={{border: '1px solid black'}}>Name</th>
              <th  style={{border: '1px solid black'}}>Contact Number</th>
              <th  style={{border: '1px solid black'}}>Email ID </th>
              <th  style={{border: '1px solid black'}}>Address</th>
              <th  style={{border: '1px solid black'}}>Edit </th>
              <th  style={{border: '1px solid black'}}>Delete</th>
            </tr>
            
               { userData &&
                userData.map( (userData) => {
                  return(
                    <tr> 
                      <td style={{border: '1px solid black',textAlign: 'center'}}> {userData.srNo}</td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}> {userData.name}</td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}> {userData.number}</td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}> {userData.email}</td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}> {userData.address}</td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}> <button><Link to={`/edit-usermaster/${userData.srNo}`}>Edit </Link>  </button></td>
                      <td style={{border: '1px solid black',textAlign: 'center'}}><button  onClick={()=> deleteUser(userData.srNo)}>Delete </button> </td>
                     
                    </tr>
                  )
                })
               }
        </table>
       </div>
    </div>
  )
}

export default UserMaster
