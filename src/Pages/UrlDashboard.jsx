import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UrlDashboard = () => {

    const[links,setLinks]=useState()
    const[linktoday,setLinktoday]=useState();

    const linkcount =async()=>{
        try {
            axios.get("https://backend-urlshortener.onrender.com/api/totallinks")
            .then(res=>setLinks(res.data))
            .catch((error)=>console.log(error))
            
        } catch (error){
            console.log(error);
        } 
   
    }

    const todaylinks=async()=>{
        try {
           await axios.get("https://backend-urlshortener.onrender.com/api/todaylinks")
            .then(res=>setLinktoday(res.data))
            .catch((error)=>console.log(error))
            
        } catch (error){
            console.log(error);
        } 
   
        
    }
    useEffect(()=>{
        linkcount()
        todaylinks()
    },[])


    return (
        <div>
            <div className='container-fluid'>
                <div className='innerdashboard'>
                    <div className='inner-heading'>
                <h1>Dashboard</h1>
                    </div>
                    <div className='inner-topics'>
                       <p className='i-topics'>TotalLinks Created: {links?.totallinks.length}</p>
                    </div>
                    <div  className='inner-topics'>
                    <p className='i-topics'>Links Created Today: {linktoday?.todaylinks.length}</p>
                    </div>
                    <div className='links'>
                    <div className='innerlinks'>
                    <Link to={"/urlshortner"}> Go To URLShortner</Link>
                    </div>
                    <div  className='innerlinks'>
                    <Link to={"/urltotalcount"}> Go To Total-Urls</Link>
                    </div>
                    </div>
                </div>
                <div>
                </div>

            </div>
            
        </div>
    );
};

export default UrlDashboard;