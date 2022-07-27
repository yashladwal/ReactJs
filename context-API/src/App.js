 import React, {createContext } from 'react';
 import ComA from './PageA';

 const MyName = createContext();
 const CrtTech = createContext();
 const UseCon = createContext();

 const App =() => {
  return (
    <div className="App">
      <MyName.Provider value={"Yash"}>
        <CrtTech.Provider value ={"Context API (With Consumer)"}> 
        <UseCon.Provider value= {"Use Context"}>
          <ComA />
          </UseCon.Provider> 
          </CrtTech.Provider>
       </MyName.Provider>
    </div>
  );
};

export default App;
export { MyName, CrtTech, UseCon };
