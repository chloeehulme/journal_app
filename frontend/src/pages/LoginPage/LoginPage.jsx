import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from "../../components/Card/Card.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import './LoginPage.css'

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage() {
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const response = await axios.post(`${API_URL}/user/login`, {
                username,
                password
            });

            const token = response.data.token;

            if (token) {
                sessionStorage.setItem('token', token);
                navigate('/home');
            } else {
                setErrorMsg('Login failed. Please check your credentials.');
            }
        } 
        catch (err) {
            console.error('Login error:', err);
            setErrorMsg('Invalid credentials or server error.');
        }
    };

    return(
        <div className="homepage">
            <Navbar >
                <h1 className="savate-bold" style={{ textAlign: 'center', fontSize: '200%' }}>Journal App</h1>
            </Navbar>
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2 className="savate-normal" style={{ color: '#E0E0FF' }}>Please login...</h2>
                    <div className="login-container">
                        <input className="savate-normal" type="text" id="username" name="username" placeholder="Username..." />
                        <input className="savate-normal" type="password" id="pass" name="password" placeholder="Password..." minLength="10" required />
                    </div>
                    <div className="button-container">
                        <button className="button-74" role="button" type="submit">Login</button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;