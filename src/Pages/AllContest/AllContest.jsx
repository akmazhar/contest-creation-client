import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Contest from "./Contest";
import {Helmet} from "react-helmet";
import Search from "./Search/Search";






    const AllContest  = () => {
   
      
    return (


     <>
     <Helmet><title>Contest Creation Platform || All Contest </title></Helmet>    

        <div>
          <div className='max-w-screen-2xl mx-auto bg-lime-100'>
            <img src="https://i.ibb.co/CnybRxR/ko.png" alt="" />
             {/* <div className="hero h-[600px] mb-1" style={{ backgroundImage: "linear-gradient(rgba(2,2,2,0.8), rgba(2,2,2,0.8)), url(https://i.ibb.co/4P669Tj/All.png)", }}>    */}
               {/* <div className="hero h-[600px] mb-1" style={{ backgroundImage: "linear-gradient(rgba(2,2,2,0.8), rgba(2,2,2,0.8)), url(https://i.ibb.co/JqcJhPF/All-1.png)", }}>    */}
              
              </div>
      <Search></Search>
      <Contest></Contest>         
          </div>     
        </> 
       ); 
    };


   export default AllContest;