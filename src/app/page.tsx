  import React from 'react'
 import Navbar from './components/Navbar'
 import Sidebar from './components/sidebar'
 import Hero  from './components/Homecar'
 import Footer from './components/Footer'
import Link from 'next/link'




 
 export default function home() {
   return (
     <div>
      <Navbar/>     
      <Hero/>     
      <Footer/>
     </div>
   )
 }
 




