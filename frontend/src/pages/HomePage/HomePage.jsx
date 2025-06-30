import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Card from "../../components/Card/Card.jsx";
import './HomePage.css'

const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    

    const fetchEntries = async () => {
        try {
            const response = await axios.get(`${API_URL}/entry/`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            });
            
            setEntries(response.data);

        } catch (error) {
            if (error.response.status === 403) {
                navigate('/');
                return;
            }
            else {
                console.error('Error fetching entries:', error);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, []);


    const [showForm, setShowForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const payload = {
            subject: formData.get('subject'),
            content: formData.get('content'),
            mood: formData.get('mood'),
            challenge: formData.get('challenge'),
            lesson: formData.get('lesson'),
            peak: formData.get('peak'),
            pit: formData.get('pit'),
            gratitude: formData.get('gratitude')
        }

        setLoading(true);

        try {
            const response = await axios.post(`${API_URL}/entry/`, payload ,
            { headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            });

            // Refresh entries to show the latest post
            await fetchEntries()

            // Clear form
            e.target.reset();
            setShowForm(false)
        } 
        catch (err) {
            console.error('Login error:', err);
            setErrorMsg('Invalid credentials or server error.');
        }
        finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;

    return(
        <div className="homepage">
            <Navbar >
                <h1 className="savate-bold" style={{ textAlign: 'center', fontSize: 'large' }}>{sessionStorage.getItem("name")}</h1>
                <div onClick={() => setShowForm(!showForm)}>
                    <svg width="50" height="50" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="green" />
                    </svg>
                </div>
            </Navbar>
            <div className='home-content'>
                {entries
                .slice()
                .sort((a, b) => new Date(b.entry_date) - new Date(a.entry_date))
                .map(entry => (
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
            {showForm && (
                <div className='post-form-container'> 
                    <form onSubmit={handleSubmit} className='post-form'>
                        <input
                            type="text"
                            name='subject'
                            placeholder="Subject..."
                            required
                        />
                        <input
                            type="text"
                            name='content'
                            placeholder="Content..."
                            required
                        />
                        <select
                            name='mood'
                            required
                            style={{ marginBottom: '10px' }}
                        >
                            <option value="" disabled>Mood...</option>
                            <option value="happy">Happy</option>
                            <option value="sad">Sad</option>
                            <option value="anxious">Anxious</option>
                            <option value="angry">Angry</option>
                            <option value="inspired">Inspired</option>
                            <option value="angry">Angry</option>
                            <option value="flat">Flat</option>
                        </select>
                        <input
                            type="text"
                            name='challenge'
                            placeholder="Challenge..."
                            required
                        />
                        <input
                            type="text"
                            name='lesson'
                            placeholder="Lesson..."
                            required
                        />
                        <input
                            type="text"
                            name='peak'
                            placeholder="Peak..."
                            required
                        />
                        <input
                            type="text"
                            name='pit'
                            placeholder="Pit..."
                            required
                        />
                        <input
                            type="text"
                            name='gratitude'
                            placeholder="Gratitude..."
                            required
                        />
                        <div className="button-container">
                            <button className="button-74" role="button" type="submit">Post</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default HomePage;