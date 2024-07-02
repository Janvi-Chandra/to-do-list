import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/home-img.png'

const Home = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(name.length<=2)
    {
      alert("Please enter a valid name");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email))
    {
      alert("Please enter a valid email ID");
      return;
    }

    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}$/;
    if(!passwordPattern.test(password))
      {
        alert("Password must be at least 8 characters long, contain at least 1 number, 1 special character, 1 uppercase letter, 1 lowercase letter, and no white spaces.");
        return;
      }

    if(password!==confirmPassword)
    {
      alert('Passwords do not match');
      return;
    }

    if(!agreeTerms)
    {
      alert("You must agree to the terms and conditions");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, password }));

    navigate('/login');

  }

  return (
    <div className='page-container'>

      <div className='left-container'>
        <div className="left-side">
          <h1>Welcome to the </h1>
          <h1>Check-it List!</h1>
          <img src={logo} className='left-img'/>
          <p className='left-text'>Already have an account? Let's log you in</p>
          <div className="left-login" onClick={()=>navigate('/login')}>Login</div>
        </div>
      </div>

      <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
      
      <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input">
            <FontAwesomeIcon icon={faUser} className='home-icon'/>
            <input 
            type="text" 
            className='HomeInput'
            placeholder='Enter your Full Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <FontAwesomeIcon icon={faEnvelope} className='home-icon'/> 
            <input 
            type="email" 
            className='HomeInput' 
            placeholder='Enter your email ID' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)} 
            required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
        <FontAwesomeIcon icon={faLock} className='home-icon'/>
            <input 
            type="password" 
            className='HomeInput' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder='Confirm Password' 
            required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input-check">
            <input 
            type="checkbox" 
            className='check-box'
            value={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)} 
            required/>
            <label>I agree to the terms and conditions</label>
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" id="sign-in" onClick={handleSubmit}>Sign Up</div>
      </div>
      </form>
      </div>

      <footer>
        <div className="copright">
          Copyright © 2024
        </div>
        <div className="termsConditions">
          Privacy Policy | Terms and conditions
        </div>
      </footer>
    </div>

  )
}

export default Home
