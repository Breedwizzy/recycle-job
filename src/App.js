import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Products } from './navcomponents/products/Products';
import { Projects } from './navcomponents/projects/Projects';
import { Team } from './navcomponents/team/Team';
import { Awards } from './navcomponents/awards/Awards';
import { Contact } from './navcomponents/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import { News } from './navcomponents/news/News';
import { Aboutus } from './components/Aboutus';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>

      <Navbar />

      {/* Define your routes using the <Routes> component */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/teams" element={<Team />}></Route>
        <Route path="/awards" element={<Awards />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        {/* Add routes for other pages */}
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
