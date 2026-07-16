import React from 'react'
import style from '../../assets/style'
const MenuBar = () => {
  return (
    <div style={style.menubar}>
        <div style={style.titleDiv}>
            <div style={style.subtitleMenu}></div>
            <div style={style.subtitleMenu}></div>
            <div style={style.subtitleMenu}></div>
            <div style={style.subtitleMenu}></div>
        </div>
        <div style={style.profile}></div>
    </div>
  )
}

export default MenuBar