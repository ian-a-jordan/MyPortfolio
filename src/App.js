import './App.scss';
import NavBar from './Components/NavBar';
import Homepage from './Pages/HomePage'
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';
import {AnimatePresence,} from 'framer-motion';
import { useState} from 'react';


function App (){
    const [navToggle, setnavToggle] = useState(false);

    const navClick = () =>{
        setnavToggle(!navToggle)
    }

    return (
        <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
            <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
            <div className="lines-1"></div>
            <div className="lines-2"></div>
            <div className="lines-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
            <AnimatePresence>
                <Switch>
                    <Route path="/" exact>
                    <Homepage />
                    </Route>
                    <Route path="/about" exact>
                    <AboutPage />
                    </Route>
                    <Route path="/portfolios" exact>
                    <PortfoliosPage />
                    </Route>
                    <Route path="/contact" exact>
                    <ContactPage />
                    </Route>
                </Switch>
            </AnimatePresence>
            </div>
        </div>
        </div>
    );
}

export default App;
