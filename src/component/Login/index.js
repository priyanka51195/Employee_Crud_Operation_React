import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { Heading, MainContainer} from './style'



const LoginPage = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState('');
  const [error, setError]= useState ('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    var user= 'admin'
    var pass= '123'
    if (user=== username && pass === password){
       navigate("/dashboard");
    } else {
      setError('You have entered an invalid username or password');
    }
  
  }

 
  return (
    <>
    <MainContainer >
      
      <form onSubmit={handleSubmit}>
        <Heading >Please Log In</Heading>
        <h4 style={{color: 'red'}}> {error}</h4>
          <label className='usname' style={{  marginLeft: '20px',fontSize: '20px'}}> Username  </label> <br></br>
          <input type="text"  className='inname' onChange={e => setUserName(e.target.value)} placeholder = 'Enter Username' required/> <br></br>
          <label className='pass'>Password  </label> <br></br>
          <input type="password"  className='password' onChange={e => setPassword(e.target.value)} placeholder = 'Enter Password' required /> <br></br>
          <div style={{ margin: '20px'}}>
            <button type="submit" className='buttsub'> LOGIN </button>
          </div>
      </form>
    </MainContainer>
    </>
  )
}

export default LoginPage
