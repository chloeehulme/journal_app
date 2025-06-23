import Navbar from "../../components/Navbar/Navbar.jsx";
import './HomePage.css'

function HomePage() {

    return(
        <div className="homepage">
            <Navbar >
                <h1 className="savate-bold" style={{ textAlign: 'center', fontSize: '200%' }}>Journal App</h1>
            </Navbar>
            <h1>You are on the home page!</h1>
        </div>
    );
}

export default HomePage;