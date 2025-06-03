import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Country from '../pages/Country';
import Layout from './Layout'; // ✅ Import the layout
import Notfound from '../pages/Notfound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path='contact' element={<Contact />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='country' element={<Country />} />
        </Route>
        <Route path='*' element = { <Notfound />} /> 
    </Routes>
  );
};

export default Router;
