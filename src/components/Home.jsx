import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div>

      <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
      

      <div className="inputs">
        <div className="input">
            <FontAwesomeIcon icon={faUser} className='home-icon'/>
            <input type="text" className='HomeInput'placeholder='Enter your Full Name' required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
            <FontAwesomeIcon icon={faEnvelope} className='home-icon'/> 
            <input type="email" className='HomeInput' placeholder='Enter your email ID' required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
        <FontAwesomeIcon icon={faLock} className='home-icon'/>
            <input type="password" className='HomeInput' placeholder='Enter your Password' required/>
        </div>
      </div>

      <div className="inputs">
        <div className="input">
        <FontAwesomeIcon icon={faLock} className='home-icon'/>
            <input type="password" className='HomeInput' placeholder='Confirm Password' required/>
        </div>
      </div>

      <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>

      <div className="submit-container">
        <div className="submit" id="sign-in">Sign Up</div>
        <div className="submit">Login</div>
      </div>
      </div>

    </div>
  )
}

export default Home
