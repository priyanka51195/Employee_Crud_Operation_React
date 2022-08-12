import React, {useState, useEffect} from 'react'
import MenuBar from '../../MenuBar/index'
import { Form, Button } from 'react-bootstrap';
import {useNavigate,useParams} from 'react-router-dom';


const Addemploye = () => {
    const [initialValues, setInitialValues] = useState({
        empID: "",
        empName: "",
        empAtten: "",
        empLeaves: ""
      });
    const oldInfo = JSON.parse(localStorage.getItem('empDetails') || '[]');
    const [errorMsg,setErrorMsg] =useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const handleOnSubmit=(e) => {
        e.preventDefault();
       
        if(id){
            let employeeUpdatedDetails = oldInfo.filter(element => element.empID !== id);
            employeeUpdatedDetails.push(initialValues);
         
            var sortedEmployee = employeeUpdatedDetails.sort(function(a, b){
                return a.empID - b.empID
            });
            localStorage.setItem("empDetails", JSON.stringify(sortedEmployee));
            navigate("/employee");  
        }else{
            if(oldInfo.some(details => initialValues.empID !== details.empID) || oldInfo.length === 0){
                oldInfo.push(initialValues);
              
                var sortedEmployee = oldInfo.sort(function(a, b){
                    return a.empID - b.empID
                  });
                localStorage.setItem("empDetails", JSON.stringify(sortedEmployee));
                navigate("/employee");
            }else{
                setErrorMsg('User Id already present');
            }
      }
    }

    
    useEffect(()=>{
        if(id){
         const editValues = oldInfo.find(details => details.empID == id)
         setInitialValues(editValues);
        }
      },[])

    const title =()=>{
        if(id){
           return <h2>Update Employee</h2>
        }else{
          return <h2>Add Employee</h2>
        }
      }
    
  return (
    <div>
       <div><MenuBar/> </div>

       <div style={{ display: 'flex', justifyContent: 'center'}}>
       {
            title()
        } 
       </div>

        <div style={{ display: 'flex', justifyContent: 'center' , padding: '20px'}}>
          
        {errorMsg && <p className="errorMsg">{errorMsg}</p>} 
        <Form onSubmit={handleOnSubmit}>
        <label>Enter Employee ID:</label> <br></br>
        <input
          type="text" 
          value={initialValues.empID}
          onChange={(e)=> setInitialValues({ ...initialValues, empID: e.target.value})} required/> <br></br>

        <label>Enter Employee Name:</label> <br></br>
         <input
          type="text" 
          value={initialValues.empName}
          onChange={(e)=> setInitialValues({ ...initialValues, empName: e.target.value})} required/> <br></br>

        <label> Employee Attendance:</label> <br></br>
        <input
          type="number" 
          value={initialValues.empAtten}
          onChange={(e)=> setInitialValues({ ...initialValues, empAtten: e.target.value})} required/> <br></br>

        <label>No of Leaves:</label> <br></br>
        <input
          type="number" 
          value={initialValues.empLeaves}
          onChange={(e)=> setInitialValues({ ...initialValues, empLeaves: e.target.value})} required/> <br></br>

        <Button variant="primary" type="submit" style={{ padding: '10px', margin: '20px'}}>
          Submit
        </Button>
    
         </Form>
        </div>
     

    </div>
  )
}

export default Addemploye
