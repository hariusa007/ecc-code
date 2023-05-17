import React from 'react';

const Card=({item})=>{
    return(
        <div id="container">
          <h1>{item.name}</h1>
          <img width={"50px"} height={"100px"} src={item.picture}/>
        </div>
    )
}


export default Card;