import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Albums from './pages/Albums';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/music' element={<Music />} />
          <Route exact path='/albums' element={<Albums />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
