import React, { useState } from 'react';
import"../Pages/Pages.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [registered,setRegistered]=useState();
      const navigate=useNavigate();

        const login=async(e)=>{
          e.preventDefault();
          const payload={email,password}
          console.log(email);
          try {
             await axios.put("https://backend-urlshortener.onrender.com/login/loginuser",payload)
             .then(res=>{setRegistered(res.data)
              toast.success("Login Succesful")
              setTimeout(()=>{
                
                navigate("/urldashboard")
              },2000)
              console.log(res.data.loginuser.email);
             }).catch((error)=>{
              console.log(error)
              toast.error("Check Credientials")
             });

          } catch (error) {
            console.error(error);
            
          }
           
        }            

    return (
        <div>
             <div className='totallogincontent   totalurlshortner'>
          <div className='Loginpage'>
          <div className='pagetitle'>
          <h2>Login Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={login} >
                    <label>Email</label>
                    <input type="email" placeholder='johndoe@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******"  onChange={(e) => setPassword(e.target.value)}/>
                    <Link to="/forgotpassword" className='white'>Forgot Password?</Link>
                    <button type='submit' className='btn btn-primary'>Login</button>
                   
                </form>
                <ToastContainer/>
            </div>
          </div>
          </div>
           
          </div>
    );
};

export default LoginPage;