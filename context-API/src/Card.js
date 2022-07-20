import React, { useEffect, useState } from 'react';
const CrtCard = () =>{

  const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch('https://api.github.com/users');
  //   setUsers(await response.json()); 
  // }
  
  const getUsers =  () => {
    
    fetch('./data.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setUsers(myJson)
      }).catch((err) => {
        console.log(err, ' error')
      })
  }

  useEffect(() => {
    getUsers(); 
    
  }, []);

  return(
    <>
    <h1>Card statu(online, offline, busy) by API </h1>
    <section className='cardWrap' >
      {
      users.map((crtElem)=>{
        return( 
          <div className='card' key={crtElem.id}>
            <span className={crtElem.status} ></span>
              <img src={crtElem.displayPicture} alt={crtElem.firstName} />
              <h2>{crtElem.firstName} {crtElem.lastName}</h2>
              <p>{crtElem.role}</p>
          </div> 
        )
      })
    }
    </section>
    </>

  )
}
 

export default CrtCard;
