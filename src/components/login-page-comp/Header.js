import React from 'react'
import { SiSwiggy } from 'react-icons/si'
import { useGlobalLoginContext } from '../../context/LoginContext'
import './Heading.css'

const Header = () => {
    const {handleLogin, handleSignup} = useGlobalLoginContext();

    return (
        <div className='heading-main'>
            <div className='swiggy-heading'>
                <span className='swiggy-icon'><SiSwiggy /></span>
                <div className='swiggy-heading-text'>Swigyy</div>
            </div>
            <div className='heading-btns'>
                <button className='login-btn' onClick={handleLogin}>Login</button>
                <button className='signup-btn' onClick={handleSignup}>Sign up</button>
            </div>
        </div>
    )
}

export default Header
