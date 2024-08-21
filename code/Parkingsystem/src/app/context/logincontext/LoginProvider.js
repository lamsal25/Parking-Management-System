"use client"
import React, { useState } from 'react'
import Logincontext from './LoginContext'


export default function Loginprovider({children}) {
    const [isLoggedIn, setIsLoggedIn]= useState(false)
  return (
    <Logincontext.Provider value={{isLoggedIn,setIsLoggedIn}} >
        {children}
    </Logincontext.Provider>
  )
}
