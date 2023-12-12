import { createContext, useState  } from 'react';
export const MyContext = createContext();


export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    return (
      <MyContext.Provider value={{  userData, setUserData }}>
        {children}
      </MyContext.Provider>
    );
  };