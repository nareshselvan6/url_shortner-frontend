import React, { useState } from 'react';
import"../Pages/Pages.css";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [registered,setRegistered]=useState()
  const navigate=useNavigate();
  
    const signup=async(e)=>{
      e.preventDefault();
      const payload={firstname,lastname,email,password}
      console.log(payload);

    try {
      await axios.post("https://backend-urlshortener.onrender.com/login/register",payload)
      .then(res=>{setRegistered(res.data)
        toast.success("check your mail and register")
      }).catch((error)=>console.log(error))

    } catch (error) {
      console.error(error);
    }

      
    }
            

    return (
        <div>
          <div className='totalcontent  totalurlshortner'>
          <div className='registerpage'>
          <div className='pagetitle'>
          <h2>Register Here!</h2>
          </div>
          <div className='content-body'>
                <form className='form' onSubmit={signup}>
                  <label> FirstName</label>
                    <input type="text" placeholder='john'  onChange={(e) => setFirstname(e.target.value)}/>
                    <label> LastName</label>
                    <input type="text" placeholder='doe16 '  onChange={(e) => setLastname(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder='johndoe@gmail.com'  onChange={(e) => setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******" onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-primary'>Signup</button>
                    <Link to="/login" className='atag' >Already Have An Account</Link>
                </form>
                <ToastContainer/>
            </div>
          </div>
          </div>
          </div>

    );
};

export default RegisterPage;