import Card from "../components/Card/Card";
import Navbar from '../components/Navbar/Navbar.jsx';
import './HomePage.css'

function HomePage() {
    return(
        <div className="homepage">
            <Navbar >
                <h2 className="savate-bold" style={{ textAlign: 'center' }}>Journal App</h2>
            </Navbar>
            <Card>
                <form>
                    <h3 className="savate-normal" style={{ color: '#fbeee0' }}>Please login...</h3>
                    <div className="login-container">
                        <input className="savate-normal" type="text" id="username" name="username" placeholder="Username..."/>
                        <input className="savate-normal" type="password" id="pass" name="password" placeholder="Password..." minlength="10" required />
                    </div>
                    <button class="button-74" role="button">Login</button>
                </form>
            </Card>
        </div>
    );
}

export default HomePage;