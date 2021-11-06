import React, {useEffect, useState} from "react";
import { useGlobalLoginContext } from "../../context/LoginContext";
import SideModel from "../common-comp/SideModel";
import "./LoginModel.css";
import { useFormik } from "formik";
import { Redirect } from "react-router";

const validate = values => {
  const errors = {};
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (values.phoneNumber.length < 5) {
    errors.phoneNumber = 'Must be 5 characters or more';
  }

  return errors;
}

const LoginModel = () => {
  const { login, handleLogin, handleSignup } = useGlobalLoginContext();
  const [numError, setNumError] = useState('')
  const [data, setData] = useState([])
  const [pdata, setPdata] = useState(false)

  useEffect(()=>{
      setData(JSON.parse(localStorage.getItem('list')));
  },[])

  const handleLoginToCreate = () => {
    handleSignup();
    handleLogin();
}

const formik = useFormik({
  initialValues: {
    phoneNumber: "",
  },
  validate,
  onSubmit: (values) => {
    const dc = values.phoneNumber
    const g = data.filter(item=> item.phoneNumber === dc)
    try{
    if(g[0].phoneNumber === dc){
      setPdata(true)
    }
    else{
      setPdata(false)
    }
  }catch{
    setNumError('please check your number');
  }
    
  },
});


  return (
    <SideModel open={login} onClose={handleLogin}>
      <div className="model-main">
        <div className='login-head'>
          <div className='login-name'>
            <div>
            <h1 className="model-head">Login</h1>
            <p className='model-para'>
              or <span className="model-org" onClick={handleLoginToCreate}>create an account</span>
            </p>
            </div>
          </div>
          <div>
            <img
              className="roll-img"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="roll"
            />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="login-num">
            
          <input 
                type='text'
                id='phoneNumber'
                className="inp-num"
                {...formik.getFieldProps('phoneNumber')}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
          {numError? <p>{numError}</p>:null}
          </div>
          
          <button type='submit' className='btn-login'>Login</button>
          {pdata === true && formik.errors && <Redirect to='/home' />}
        </form>
        <p>
          By clicking on Login, I accept the <span className='tc'>Terms & Conditions & Privacy Policy</span>
        </p>
      </div>
    </SideModel>
  );
};

export default LoginModel;
