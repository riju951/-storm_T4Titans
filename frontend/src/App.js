import Home from './components/LandingPage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Blogs from './components/Blogs/Blogs';
import Assesment from './components/Assessment/Assesment';
import { BlogForm } from './components/Blogs/BlogForm'
import React from 'react';
import { RoadmapForm } from './components/Roadmaps/RoadmapForm';
import { Checkout } from './components/Checkout/Checkout';
function App() {
  return (
    // <div className="">
    //   <Home/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myassessment" element={<Assesment />} />
        <Route path="/blogs/addblog" element={<BlogForm />} />
        <Route path="/admin/addRoadmap" element={<RoadmapForm />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
