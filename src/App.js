import './App.css';
import Router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

function App() {
    return (
        <div className={'p-5 mx-5 text-center'}>
            <nav className={'mb-5'}>
                <Link className={'mx-2'} to="/">Home</Link>
                <Link className={'mx-2'} to="/add">Add Movie</Link>
            </nav>
            <Router/>
        </div>
    );
}

export default App;
