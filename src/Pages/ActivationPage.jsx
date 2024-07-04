import React, { useState } from 'react';
import"../Pages/Pages.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivationPage = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [registered,setRegistered]=useState()
  const navigate=useNavigate();

  console.log(registered);
  
    const signup=async(e)=>{
      e.preventDefault();
      const payload={email,password}
      console.log(payload);

    try {
      await axios.put("https://backend-urlshortener.onrender.com/login/accountactivation",payload)
      .then(res=>{setRegistered(res.data) 
      
            toast.success("Account activated successfully!")
            setTimeout(() => {
              
              navigate("/login")
              
            }, 3000);
        
    }).catch((error)=>{
        toast.error("Error")
        console.log(error)
    })
    

    //   navigate("/login")

    } catch (error) {
      console.error(error);
    }

     
    }
            
    return (
        <div>
          <div className='totalcontent  totalurlshortner'>
          <div className='registerpage'>
          <div className='pagetitle'>
          <h2>Activate Your Account Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={signup}>
                    <label>Email</label>
                    <input type="email" placeholder='johndoe@gmail.com'  onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-primary'>Signup</button>
                    <Link to="/login"  className='atag'>Already Have An Account</Link>
                </form>
                <ToastContainer />
            </div>
          </div>
          </div>
          </div>

    );
};

export default ActivationPage;