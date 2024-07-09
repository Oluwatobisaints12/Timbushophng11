import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';
import ShoppingPage from './components/ShoppingPage/ShoppingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/shoppingPage" element={<ShoppingPage to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
