import React from 'react';
import error from '../images/error.gif'
 
const E404 = () => {
 
    return(
        <div className="container text-center align-center mt-5">
            <div className="row">
            <h3 className="ml-5 col-3 mr-5" style={{marginTop: "80px", marginLeft:"20px", display:"flex", fontSize:"40px"}}>Página não encontrada</h3>
            <img className=" ml-5 col-6" style={{display:"flex", marginRight:"100px"}} src={error}/>
            </div>
        </div>
    )
};
 
export default E404;