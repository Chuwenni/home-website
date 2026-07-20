import { NavLink } from "react-router-dom";
import "../assets/MenuBar.css";

export default function Menubar() {
    return (
        <nav className="navbar">
            <h2 className="logo">ShopEase</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shops">Shops</NavLink>
                <NavLink to="/myCart">My Cart</NavLink>
                <NavLink to="/myShop">My Shop</NavLink>
            </div>

            <NavLink className="login-btn" to="/login">
                Login
            </NavLink>
        </nav>
    );
}