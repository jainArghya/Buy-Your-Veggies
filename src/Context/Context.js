import { createContext, useReducer, useState } from "react";

export const User = createContext();
 
const Context = ({children}) => {
    const [user, setUser] = useState({
        loggedIn: false,
        id: "",
        username: "",
        email:""
    });
    const [cartitems, setCartitems] = useState([]);

    return <User.Provider value={{user, setUser, cartitems, setCartitems}}>{children}</User.Provider>
}

export default Context;
