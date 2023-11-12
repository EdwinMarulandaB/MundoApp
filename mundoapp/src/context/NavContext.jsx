import { useContext, createContext, useState } from "react";
import {logedRequest} from '../api/login.api'
export const NavContext = createContext();

export const useNavBar = () => {
  const context = useContext(NavContext);
 
  return context;
};

// eslint-disable-next-line react/prop-types
export const NavContextProvider = ({ children }) => {

  const [loged, setloged] = useState(false);


  const logerar = async(data) => {

    const response = await logedRequest(data)
    
    if ( response.data.value === true){
      
      setloged(true)
      return response.data.type 
    }

    return response.data.value
  }
  
  return (
    <NavContext.Provider
      value={{
        loged,
        
        logerar
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
