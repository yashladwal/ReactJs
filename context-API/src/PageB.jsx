import React, { useContext } from 'react';
 import ComC from './pageC';
import {MyName, CrtTech, UseCon} from './App';
const ComB = () =>{
    const fName = useContext(MyName);
    const ctech = useContext(CrtTech);
    const uc = useContext(UseCon);
    return(
        <> 
        <div style={{textAlign:'center', background:"#ccc", margin:"0 0 15px", padding:"20px", }}> <h1>Hi <span style={{color:'green', fontSize:"33px"}} >{fName}</span></h1>
        <h2>Red and Green color content call by  <span style={{color:'red', fontSize:"33px"}} >{uc} </span> </h2>
      
        </div>
         <ComC />
        </>
    )
}

export default ComB;