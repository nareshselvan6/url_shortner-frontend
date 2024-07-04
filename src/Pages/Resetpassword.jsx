import React, { useState } from 'react';
import"../Pages/Pages.css";
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Resetpassword = () => {
    const {id,token}=useParams();

    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const[registered,setRegistered]=useState()



    const resetpassword=async(e)=>{
        e.preventDefault();


        const payload={password};
        const response= `https://backend-urlshortener.onrender.com/login/resetpassword/${id}/${token}`;

        try {
            await axios.put(response,payload)
            .then(res=>{setRegistered(res.data)
                toast.success("PassWord Reset Successfull")
                setTimeout(()=>{
                    
                    navigate("/login")

                },2000)
            })
            .catch((error)=>console.log(error));
        
            navigate('/')
            
        } catch (error) {
            console.log("error occured while reseting password" + error);
        }
    }
    return (
        <div>
            <div className='totalreset   totalurlshortner'>
            <div className='resetpassword'>
             <form className='form reset' onSubmit={resetpassword} >
                <h2>Reset Password</h2>
                    <label>New Password</label>
                    <input type="text" placeholder='*******' onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit' className='btn btn-success'>Update</button>
                   
                </form>
                </div>
                </div>
        </div>
    );
};

export default Resetpassword;