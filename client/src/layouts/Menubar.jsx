import { NavLink } from "react-router-dom";
import "../assets/MenuBar.css";
import { useApp } from "../Context/appContext";
export default function Menubar() {

    const { user } = useApp();
    return (
        <nav className="navbar">
            <h2 className="logo">ShopEase</h2>

            <div className="nav-links">
                <NavLink to="/home" end>Home</NavLink>
                <NavLink to="/home/shops">Shops</NavLink>
                <NavLink to="/home/myCart">My Cart</NavLink>
                <NavLink to="/home/myShop">My Shop</NavLink>
            </div>

            {user.isLogin
            ?
            <div className="profile"></div>
            :
            <NavLink className="login-btn" to="/login">Login</NavLink>}
        </nav>
    );
}