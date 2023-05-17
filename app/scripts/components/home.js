/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React,{useState} from 'react';
import Card from './card';



const Home =({data})=>{
    return (
        <>
        <section id="home">
                 <div className="content">
                    {data.map((ele)=>
                      <Card item={ele}/>
                    )}
                    
                 </div>
             </section>
             </>
    )
}





export default Home;