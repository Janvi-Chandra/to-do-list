import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/home-img.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if(!storedUser)
        {
            alert('No account found, Please sign up first');
            return;
        }

        if(storedUser.email!==email)
        {
            alert("Email does not exist. Please sign up first");
            return;
        }

        if(storedUser.password!==password)
        {
            alert("Incorrect Password");
            return;
        }

        navigate('/todolist');
    }   
  return (
    
    <div className="login-page">
        <h1 className='Login-heading'>Welcome Back to Check-it List!</h1>

    <div className='page-container'>

      <div className="container">
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
      

      <div className="inputs">
        <div className="input">
            <FontAwesomeIcon icon={faEnvelope} className='home-icon'/> 
            <input 
            type="email" 
            className='HomeInput' 
            placeholder='Enter your email ID' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
        <FontAwesomeIcon icon={faLock} className='home-icon'/>
            <input 
            type="password" 
            className='HomeInput' 
            placeholder='Enter your Password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
        </div>
      </div>

      <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>

      <div className="submit-container">
        <div className="submit" id="login" onClick={handleSubmit}>Login</div>
      </div>
      </div>

      <div className='login-container'>
        <div className="left-side">
          <img src={logo} className='left-img'/>
          <p className='left-text'>Don't have an account yet? Let's sign you up</p>
          <div className="left-login" onClick={()=>navigate('/')}>Sign Up</div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Login
