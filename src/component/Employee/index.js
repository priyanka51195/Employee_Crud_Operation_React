import React, { useEffect, useState } from 'react';
import MenuBar from '../MenuBar/index';
import {Heading, AddEmp} from './style';
import {Link, useNavigate} from 'react-router-dom';
import employee from '../Dummy/Employeedummy/index'


const Employeepage = () => {
    const [empData, setEmpData] = useState([])
    const navigate = useNavigate();
    const handleClick =() =>{
        navigate("/addEmp")
    }

    useEffect(()=>{
        getEmployee();
    },[])

    const getEmployee = () =>{
        const localstor = JSON.parse(localStorage.getItem('empDetails'));
        console.log(localstor);
        if(localstor){
            setEmpData(localstor)
        }
        //console.log(empData,'empData')
    }

    const deletEmployee = (employeeId) =>{  
        let employeeUpdatedDetails = empData.filter(element => element.empID !== employeeId);
        localStorage.setItem('empDetails', JSON.stringify(employeeUpdatedDetails));
        getEmployee();
    }

  return (
    <div>
       <div><MenuBar/> </div>
       <div>   
        <Heading>Employee Master</Heading>
       </div>
       <AddEmp onClick ={ handleClick}> <button>  Add Employee +</button> </AddEmp>

    
      <div style={{ marginLeft: '120px'}}>
        <table style={{ width:'85%', border: '1px solid black', margin: '20px',borderCollapse: 'collapse'}}>
           
            <tr style={{ backgroundColor: '#B6B6B4'}}>
                <th style={{border: '1px solid black'}}> Employee Id </th>
                <th style={{border: '1px solid black'}}> Name </th>
                <th style={{border: '1px solid black'}}> Attendance </th>
                <th style={{border: '1px solid black'}}> No Of leaves </th>
                <th style={{border: '1px solid black'}}> Add </th>
                <th style={{border: '1px solid black'}}> Delete </th>
            </tr>

            { empData &&
               empData.map( (empdata) => {
                return(
                    <tr >
                        <td style={{border: '1px solid black',textAlign: 'center'}}> {empdata.empID} </td>
                        <td style={{border: '1px solid black',textAlign: 'center'}}> {empdata.empName}  </td>
                        <td style={{border: '1px solid black',textAlign: 'center'}}> {empdata.empAtten} </td>
                        <td style={{border: '1px solid black',textAlign: 'center'}}> {empdata.empLeaves}  </td>
                        <td style={{border: '1px solid black',textAlign: 'center'}}> <button><Link to={`/edit-employee/${empdata.empID}`}>Edit </Link> </button> </td>
                        <td style={{border: '1px solid black',textAlign: 'center'}}><button  onClick={()=> deletEmployee(empdata.empID)}>Delete </button> </td>
                    </tr>
                  )
               })
            }
         
        </table>
      </div>
    </div>
  )
}

export default Employeepage;
