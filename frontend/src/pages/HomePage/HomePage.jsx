import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";
import './HomePage.css'

const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchEntries = async () => {
        try {
            const response = await axios.get(`${API_URL}/entry/`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            });
            setEntries(response.data);
        } catch (error) {
            console.error('Error fetching entries:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchEntries();
  }, []);

  if (loading) return <p>Loading...</p>;

    return(
        <div className="homepage">
            <Navbar >
                <h1 className="savate-bold" style={{ textAlign: 'center', fontSize: '200%' }}>{sessionStorage.getItem("name")}</h1>
            </Navbar>
            <div className='header-container'>
                <h1 className="savate-bold" style={{ fontSize: 'large', margin: '0px' }}>Your posts...</h1>
            </div>
            {entries.map(entry => (
                <Card>
                    <div key={entry.id}>
                    <h3>{entry.subject}</h3>
                    <p>{entry.content}</p>
                    <p>Mood: {entry.mood}</p>
                    <p className='entry_date'>{entry.entry_date}</p>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default HomePage;