import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Footer from './components/footer/Footer';
import EmailSent from './pages/Auth/EmailSent';


const App = () => {
  return (
    
    <>
      <Navbar />
      <div className="pt-16 min-h-screen w-full backdrop-blur-sm "> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />


          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/email-sent" element={<EmailSent/>}/>


          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
      </>
  );
};

export default App;
