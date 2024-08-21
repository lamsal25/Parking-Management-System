import React from 'react'
import Navigation from '../navigation/Navigation'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <>
    <div>
     <Navigation/>
      <main>{children}</main>
      <Footer/>
    </div>
    </>
  )
}
