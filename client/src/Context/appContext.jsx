import { createContext, useContext } from "react";

const appContext = createContext();

export const AppContext = ({children}) => {

    const name = ""

    return(
        <appContext.Provider value={{name}}>
            {children}
        </appContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(appContext);

    if(!context){
        throw new Error("useApp needs to be wrapped in AppContext")
    }

    return context
}