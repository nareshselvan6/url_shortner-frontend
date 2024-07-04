import axios from 'axios';
import React, { useState } from 'react';

const Urlshortner = () => {
    const[inputval,setInputVal]=useState();

    const[url,setUrl]=useState();

    const[display,setDisplay]=useState(false);

    // console.log(inputval);

    const submit=(e)=>{
        e.preventDefault();
      shortner();
    }

    const shortner=async()=>{
        try {
           await axios.post("https://backend-urlshortener.onrender.com/api/createurl", { url: inputval })
            .then(res=>{
                setUrl(`https://backend-urlshortener.onrender.com/api/geturl/${res.data.id}`)
            setDisplay(true)
        })
            .catch((error)=>console.log(error))
        } catch (error) {
            console.log(error);
            
        }
    }
  

    return (
        <div className='totalurlshortner'>
            <div className='forcss'>
        <div className=' total '> 
        <div className='shortner'>
        <div className='url d-flex justify-content-center align-items-center flex-column'>
            <h2 className='urlshortner'>URL SHORTNER</h2>
            <form className='urlshortner submit-form' onSubmit={submit}>
                <div className='form-into'>
                <input type="text" className='longurl ' onChange={e=>setInputVal(e.target.value)} />
                <button className='submit-btn btn btn-success' type='submit'> Submit </button>
                </div>
            </form>
        </div>
        </div>
       { display?<div className='totalshorturl d-flex justify-content-center align-items-center'> 
         <div className='shorturl d-flex justify-content-center align-align-items-center flex-column m-3'>
            <h2 className='shorturlin'>ShortUrl</h2><br />
            <div><a href={url}  className='shorturlin' target='_blank'>{url}</a></div>
        </div>
        </div>
      :null}
        </div>
        </div>
        <div className='ttlinks d-flex justify-content-center align-items-center'>
            <a href="/urltotalcount">TotalLinks</a>
        </div>
        </div>
    
    );
};

export default Urlshortner;