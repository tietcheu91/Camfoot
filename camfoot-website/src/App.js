import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
          <div>
            <NavigationBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contactus" element={<Contact />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
            <Footer />
          </div>
        </Router>
  );
}

export default App;
