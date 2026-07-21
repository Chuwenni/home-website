import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "../Context/ToastContext";
import axios from 'axios';
export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const { showToast } = useToast();

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const result = await axios.post("http://localhost:3500/login", form);

            console.log(result)

            if(result.status == 200){
                showToast("Login successful", "success")
            }
        }catch(err){
            
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome Back</h1>
                <p>Sign in to continue shopping.</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <div className="auth-options">
                        <label>
                            <input
                                type="checkbox"
                                name="remember"
                                checked={form.remember}
                                onChange={handleChange}
                            />
                            Remember me
                        </label>

                        <Link to="/password">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
                </form>

                <p className="auth-footer">
                    Don't have an account?{" "}
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}