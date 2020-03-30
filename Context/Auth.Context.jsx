import React,{useState,createContext} from 'react'

export const AuthContext=createContext()

export default function AuthContextProvider({children}){
  const [state,setState]=useState(null)
  
  return(
    <AuthContext.Provider value={{...state}}>
      {children}
    </AuthContext.Provider>
  )
}