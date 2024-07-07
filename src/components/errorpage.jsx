import React from "react";
import NavBar from "./navbar";


const Errorpage=()=>{
    return(
        <>
       <NavBar/>
        <div className="content" style={{margin:'10% 20%'}}>
            <h1>
                Page Not Found 😔   Try again later !!!!
            </h1>
           
        </div>
        <div id="page">
        <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3" style={{color:"red"}}>error</div>
        </div>
</div>
        </>
    )
}
export default Errorpage;