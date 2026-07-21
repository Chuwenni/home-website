import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useToast} from '../Context/ToastContext'

export default function Register() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { showToast } = useToast();

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3500/register", form,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            
                console.log(response)
                if(response.status == 200){
                    showToast(response.data.message, "success")
                }
              
        } catch (err) {
            showToast(err.error, 'error')
        }
    }

    return (
        <div className="auth-page">

            <div className="auth-card">

                <h1>Create Account</h1>

                <p>Create your account to continue.</p>

                <form onSubmit={handleSubmit}>

                    <input
                        name="username"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />

                    <button onClick={(e) => handleSubmit(e)}>Create Account</button>

                </form>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>

            </div>

        </div>
    );
}