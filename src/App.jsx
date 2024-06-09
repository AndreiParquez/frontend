import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Rankings from './components/rankings';
import Footer from './components/footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rankings" element={<Rankings />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
