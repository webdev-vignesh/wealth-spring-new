'use client';

import React, { useRef } from "react";
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo from "@/../public/logo1.png";
import CryptoJS from "crypto-js";
import jwt  from "jsonwebtoken";
import { Formik } from "formik";
import * as Yup from "yup";
import { setLoggedIn } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setPassword, setUser } from "@/store/userSlice";


const  LoginAuth = () => {

  // declaring state variables
  // const user = useSelector((state) => state.user.user);
  // const password = useSelector((state) => state.user.password);
  
  const [breakpoint, setBreakpoint] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const router = useRouter();
  const dispatch = useDispatch();
  
  const captchaRef = useRef(null);

  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for(let i=0; i<6; i++){
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaValue(captcha);
  }

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 576) {
        setBreakpoint('xs');
      } else if (windowWidth >= 576 && windowWidth < 768) {
        setBreakpoint('sm');
      } else if (windowWidth >= 768 && windowWidth < 992) {
        setBreakpoint('md');
      } else if (windowWidth >= 992 && windowWidth < 1200) {
        setBreakpoint('lg');
      } else {
        setBreakpoint('xl');
      }
    };

    handleResize();
    generateCaptcha();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  // function to encrypt the username and password using CryptoJS
  function encryptedCredentials(user, password, SECRET_KEY) {
    const salt= CryptoJS.enc.Utf8.parse('This is a static salt');
    const iterations = 1000;
    const keySize = 256 / 32 + 128 / 32;
    const key = CryptoJS.PBKDF2(SECRET_KEY, salt, { keySize: keySize, iterations: iterations });
    const keyString = CryptoJS.enc.Hex.stringify(key);
    console.log(keyString)
    const iv = CryptoJS.enc.Hex.parse("26463b878c7e8239e01aa17b21d8228e");
    
    const encryptedUser = CryptoJS.AES.encrypt(user, key, { iv: iv }).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(password, key, { iv: iv }).toString();    
    
    return {encryptedUser, encryptedPassword};
  }

  // onsubmit function 
  const submitLogin = (values) => {
    
    // destructuring values object
    const { username, password, captcha } = values;
    // dispatch(setLoggedIn(true));
    // router.push('/admin');

    // checking if login credentials are correct
    if(username === 'admin12' && password === 'admin12' && captcha === captchaValue){

      // signing the username, password with secret key
      // using jwt to create a authentication token
      
      const { encryptedUser, encryptedPassword } = encryptedCredentials(username, password, process.env.NEXT_PUBLIC_SECRET_KEY);
      const token = jwt.sign({encryptedUser, encryptedPassword}, process.env.NEXT_PUBLIC_SECRET_KEY);

      console.log(token);
      // posting the authorized token to backend,
      // based on the received respone 200 or 404 
      // redirecting user to next page
      fetch("http://localhost:8082/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          // body: token,
      })
      .then(response => {
          if (response.status === 200) {
            // authentication successful
            // redirect user to dashboard or home page
    
            dispatch(setLoggedIn(true));
            router.push('/admin');
          } 
          else {
            // authentication failed
            // display error message to user
    
            alert("Invalid credentials");
          }
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
    }
  };

  // Yup validation schema structure
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(10, "Username must be at most 10 characters")
      .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must be at least 5 characters"),
    captcha: Yup.string()
      .required("Captcha is required")
  });

  return (
    <div className="container">

      {/* Sign in page */}
      <Formik
      validationSchema={validationSchema}
      initialValues={{ username: "", password: "", captcha: "" }}
      onSubmit={(values) => submitLogin(values)}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="login row">
          <div className="form d-flex align-items-center justify-content-center col" style={{height: "100vh"}}>
            
            {/* Form */}
            {/* Passing onSubmit parameter to handleSubmit function */}
            <form noValidate onSubmit={handleSubmit} style={{width: ''}} className="border border-gray rounded p-5">
              <div  className="text-center">
                <Image src={logo} width={200} height={60} alt="wealth spring logo" />
              </div>
              <p className="fw-normal text-center my-4 fs-4">Sign in <span className="fw-normal fs-6"><br/>to your account</span></p>
              
              {/* Username */}
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  className="form-control inp_text mt-4 border-secondary-subtle fs-6"
                  id="username"
                />
              {/* If validation is not passed show errors */}
              <p className="error text-danger" style={{fontSize: '12px'}}>
                {errors.username && touched.username && errors.username}
              </p>
              
              {/* Password */}
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}                
              {showPassword 
              ? (
                <div className="input-group">
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control border-secondary-subtle fs-6"
                />
                <button className="btn border" type="button" id="password-visible" onClick={() => setShowPassword(false)}><i className="bi bi-eye"></i></button>
              </div>
              )
              : (
                <div className="input-group">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  aria-label="password hidden"
                  aria-description="password-hide"
                  className="form-control border-secondary-subtle fs-6"
                />
                <button className="btn border" type="button" id="password-hide" onClick={() => setShowPassword(true)}><i className="bi bi-eye-slash"></i></button>
              </div>
              )
              }

                {/* If validation is not passed show errors */}
              <p className="error text-danger" style={{fontSize: '12px'}}>
                {errors.password && touched.password && errors.password}
              </p>

              {/* Captcha */}
              <div className="w-75">
                <div className="input-group mb-3" style={{width: '70%'}}>
                  <input 
                    disabled
                    type="text" 
                    className="form-control bg-secondary-subtle" 
                    value={captchaValue}
                    aria-label="Captcha" 
                    aria-describedby="button-addon2" 
                  />
                  <button className="btn border" type="button" id="button-addon2" onClick={generateCaptcha}><i className="bi bi-arrow-clockwise"></i></button>
                </div>
                  <p>Type the word above:</p>
                  <input
                    type="text"
                    placeholder="Enter Captcha"
                    name="captcha"
                    className="form-control border-secondary-subtle"
                    value={values.captcha}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ref={captchaRef}
                  />
              </div>
              <p className="error text-danger" style={{fontSize: '12px'}}>
                {errors.captcha && touched.captcha && errors.captcha}
              </p>

              {/* Click on submit button to submit the form */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-md m-2 text-center">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
    </div>
  );
}

export default LoginAuth;
