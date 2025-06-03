import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Country from '../pages/Country';
import Layout from './Layout'; // ✅ Import the layout

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='country' element={<Country />} />
      </Route>
    </Routes>
  );
};

export default Router;
