import React from 'react'
import Menubar from '../layouts/Menubar'
import Products from '../components/skeleton/Products'
const Homepage = () => {
  return (
    <>
      <Menubar/>
      <Products count={20}/>
    </>
  )
}

export default Homepage