import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Urltotalcount = () => {

    const[link,setLinks]=useState();
    const[visit,setVisit]=useState();

    useEffect(()=>{
        totallinks()
    },[visit])

    const totallinks=async()=>{
        try {
           await axios.get(`https://backend-urlshortener.onrender.com/api/totallinks`)
            .then(res=>{
              setLinks(res.data)
              setVisit(res.data)})
            .catch((error)=>console.log(error))
        } catch (error) {
            console.log(error);
            
        }
    }

    console.log(link);

    const url="{https://backend-urlshortener.onrender.com/api/geturl/${ele.shortId}}"

  
    return (
        <div className='total totalurlshortner d-flex justify-content-center align-items-center'>

        <div className='table-responsive tble'>
    <table className="table table-striped  ">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">ShortUrl</th>
      <th scope="col">OriginalUrl</th>
      <th scope="col">Visitcount</th>
    </tr>
  </thead>
  <tbody>
    {link?.totallinks?.map((ele,index)=>{
        return(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><a href={`https://backend-urlshortener.onrender.com/api/geturl/${ele.shortId}`} target='_blank'>https://backend-urlshortener.onrender.com/api/geturl/{ele.shortId}</a></td>
      <td>{ele.redirectURL}</td>
      <td>{ele.visitHistory.length}</td>
    </tr>
    )
    })}
  </tbody>
</table>

            
        </div>

        </div>
    );
};

export default Urltotalcount;