import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';

import ShoppingPage from './components/ShoppingPage/ShoppingPage';
import Header from './components/Homepage/Header';
import Layout from './components/Layout';

function App() {
 

  return (
    <BrowserRouter>
            <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shoppingPage" element={<ShoppingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
