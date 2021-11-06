import React, { useState, useEffect } from "react";
import { useGlobalLoginContext } from "../../context/LoginContext";
import SideModel from "../common-comp/SideModel";
import { Redirect } from "react-router";
import { useFormik } from "formik";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length < 10) {
    errors.phoneNumber = "Must be 10 characters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 10) {
    errors.password = "Must be 10 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const SignupComp = () => {
  const [list, setList] = useState(getLocalStorage());
  const [sub, setSub] = useState(false);
  const { signup, handleSignup, handleLogin } = useGlobalLoginContext();

  const handleCreateToLogin = () => {
    handleSignup();
    handleLogin();
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      name: "",
      email: "",
      password:'',
    },
    validate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      const count = list.length;
      const newItem = {
        id: count,
        name: values.name,
        phoneNumber: values.phoneNumber,
        email: values.email,
        password: values.password,
      };
      setList([...list, newItem]);
      setSub(true);
    },
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <SideModel open={signup} onClose={handleSignup}>
      <div className="model-main">
        <div className="login-head">
          <div className="login-name">
            <div>
              <h1 className="model-head">Sign up</h1>
              <p className="model-para">
                or{' '}
                <span className="model-org" onClick={handleCreateToLogin}>
                  login to your account
                </span>
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
              type="text"
              id="phoneNumber"
              className="inp-num"
              placeholder="Phone number"
              {...formik.getFieldProps("phoneNumber")}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}
            <input
              type="text"
              id="name"
              className="inp-num"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <input
              id="email"
              type="email"
              placeholder='email'
              className="inp-num"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <input
              id="password"
              type="password"
              placeholder='password'
              className="inp-num"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
          </div>

          <button type="submit" className="btn-login">
            Create
          </button>
          {sub === true && formik.errors && <Redirect to='/home' />}
        </form>
        <p>
          By clicking on Create, I accept the{" "}
          <span className="tc">Terms & Conditions & Privacy Policy</span>
        </p>
      </div>
    </SideModel>
  );
};

export default SignupComp;