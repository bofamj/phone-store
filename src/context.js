import React,{useState,useEffect,useContext} from 'react';

const AppContext = React.createContext()


const AppProvider = ({children})=>{
    const [isOpen,setIsOpen]=useState(false)
    return(
        <AppContext.Provider value={{setIsOpen,isOpen}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}