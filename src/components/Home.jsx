import React from 'react';
const Home=(props)=>{
    return(
        <div>
        <h1>Home</h1>
        <h1>{props.title}</h1>
        <h1>{localStorage.getItem("myToken")}</h1>
        </div>
    )
}


export default Home;