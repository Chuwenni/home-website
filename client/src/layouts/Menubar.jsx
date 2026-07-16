import {Link} from 'react-router-dom'
import React from 'react'
import style from '../assets/style'
const Menubar = () => {
  return (
    <div style={style.menubar}>
        <div style={style.titleDiv}>
            <Link to={"/"}>Home</Link>
            <Link to={"/shops"}>Shops</Link>
            <Link to={"/myCart"}>My Cart</Link>
            <Link to={"/myShop"}>My Shop</Link>
        </div>
        {/* <Link style={style.profile} to={"/profile"}></Link> */}
        <Link to={"/login"}>Login First</Link>
    </div>
  )
}

export default Menubar