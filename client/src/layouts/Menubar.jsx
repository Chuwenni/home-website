import {Link} from 'react-router-dom'
import React from 'react'
import style from '../assets/style'
const Menubar = () => {
  return (
    <div style={style.menubar}>
        <div style={style.titleDiv}>
            <Link to={"/"}>Home</Link>
            <Link to={"/shops"}>Shops</Link>
            <Link to={"/myCart"}>Your Cart</Link>
            <Link to={"/myShop"}>Your Shop</Link>
        </div>
        <Link style={style.profile} to={"/profile"}></Link>
    </div>
  )
}

export default Menubar