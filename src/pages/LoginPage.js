import React from 'react'
import Footer from '../components/common-comp/Footer'
import CompanyInfo from '../components/login-page-comp/CompanyInfo'
import Header from '../components/login-page-comp/Header'
import HeadingCurosel from '../components/login-page-comp/HeadingCurosel'
import LoginModel from '../components/login-page-comp/LoginModel'
import PartTwo from '../components/login-page-comp/PartTwo'
import PopCities from '../components/login-page-comp/PopCities'
import RestaurentsInPocket from '../components/login-page-comp/RestaurentsInPocket'
import SearchField from '../components/login-page-comp/SearchField'
import SignupComp from '../components/login-page-comp/SignupComp'
import { useGlobalLoginContext } from '../context/LoginContext'
import './LoginPage.css'

const LoginPage = () => {
    const {login, handleLogin, signup, handleSignup} = useGlobalLoginContext();

    const handleSection=() => {
        if(login===true){
            handleLogin();
        }
        if(signup===true){
            handleSignup();
        }
    }

    
    return (
        <div>
           {
               login? <LoginModel/>:''
           }
           {
               signup? <SignupComp/>:''
           }
            <section onClick={handleSection}>
        <div className='loginpage-main' >
            
            <div className="loginpage-part1">
                <Header/>
                <HeadingCurosel />
                <SearchField />
                <PopCities/>
            </div>
            <div className="loginpage-part2"></div>
        </div>
            <PartTwo />
            <RestaurentsInPocket/>
            <CompanyInfo />
            <Footer/>
            </section>
        </div>
    )
}

export default LoginPage
