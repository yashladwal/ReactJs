import React  from 'react';
import {MyName, CrtTech} from './App';
const ComC = () =>{
    return(
         <>
            <MyName.Consumer>
                {
                    (fName) => {
                      return (
                      <CrtTech.Consumer>{
                        (ctech) =>{
                            return(
                                <div style={{textAlign:'center', background:"#ccc", margin:"0 0 15px", padding:"20px", }}> <h1>Hi <span style={{color:'green', fontSize:"33px"}} >{fName}</span></h1>
                                <h2>Red and Green color content call by  <span style={{color:'red', fontSize:"33px"}} >{ctech}</span> </h2>
                                </div>
                            )
                      }}</CrtTech.Consumer>
                      )
                    }
                }
              
            </MyName.Consumer>
           
         </>
    );
};

export default ComC;