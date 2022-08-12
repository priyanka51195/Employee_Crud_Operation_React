import React, {useState, useEffect} from 'react'
import MenuBar from '../../MenuBar/index'
import { Form, Button } from 'react-bootstrap';
import {useNavigate,useParams} from 'react-router-dom';

const AddUser = () => {
    const [initialUserValues, setInitialUserValues] = useState({
        srNo: "",
        name: "",
        number: "",
        email: "",
        address: "",
      });

      const oldInfo = JSON.parse(localStorage.getItem('userDetails') || '[]');
      const [errorMsg,setErrorMsg] =useState('');
      const navigate = useNavigate();
      const {sNo} = useParams();
  
      const handleOnSubmit=(e) => {
          e.preventDefault();
         
          if(sNo){
              let userUpdatedDetails = oldInfo.filter(element => element.srNo !== sNo);
              userUpdatedDetails.push(initialUserValues);
              //console.log(oldInfo);
              var sortedUser = userUpdatedDetails.sort(function(a, b){
                  return a.srNo - b.srNo
              });
              localStorage.setItem("userDetails", JSON.stringify(sortedUser));
              navigate("/usermaster");  
          }else{
            console.log(oldInfo,"oldinfo1");
              if(oldInfo.some(details => initialUserValues.srNo !== details.srNo) || oldInfo.length === 0){
                  oldInfo.push(initialUserValues);
                  console.log(oldInfo);
                  var sortedUser = oldInfo.sort(function(a, b){
                      return a.srNo - b.srNo
                    });
                  localStorage.setItem("userDetails", JSON.stringify(sortedUser));
                  navigate("/usermaster");
              }else{
                setErrorMsg('User Id already present');
              }
        }
      }
  
      
      useEffect(()=>{
          if(sNo){
           const editValues = oldInfo.find(details => details.srNo == sNo)
           setInitialUserValues(editValues);
          }
        },[])
  
      const title =()=>{
        console.log (sNo, 'sNo')
          if(sNo){
             return <h2>Update User</h2>
          }else{
            return <h2>Add User</h2>
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
        {errorMsg && <p className="errorMsg">{errorMsg}</p>} 

       <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Form onSubmit={handleOnSubmit}>
            <label> User Sr.No.  </label> <br></br>
            <input type='number'
             value={initialUserValues.srNo}
             placeholder= 'Enter No.'
             onChange={(e)=> setInitialUserValues({ ...initialUserValues, srNo: e.target.value})} required/> <br></br>

            <label> User Name  </label> <br></br>
            <input type='text'
             value={initialUserValues.name}
             placeholder= 'Enter User Name'
             onChange={(e)=> setInitialUserValues({ ...initialUserValues, name: e.target.value})} required/> <br></br>

            <label> Contact Number  </label> <br></br>
            <input type='number'
             value={initialUserValues.number}
             placeholder= 'Enter Contact Number'
             onChange={(e)=> setInitialUserValues({ ...initialUserValues, number: e.target.value})} required/> <br></br>

            <label> Email Id   </label> <br></br>
            <input type='email'
             value={initialUserValues.email}
             placeholder= 'Enter Email ID'
             onChange={(e)=> setInitialUserValues({ ...initialUserValues, email: e.target.value})} required/> <br></br>

            <label> Address  </label> <br></br>
            <input type='text'
             value={initialUserValues.address}
             placeholder= 'Enter Address'
             onChange={(e)=> setInitialUserValues({ ...initialUserValues, address: e.target.value})} required/> <br></br>

            <Button variant="primary" type="submit" style={{ padding: '10px', margin: '20px'}}>
                  Submit
            </Button>
    

        </Form>
       </div>
       
      
    </div>
  )
}

export default AddUser
