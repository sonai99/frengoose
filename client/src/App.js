import { Link, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <>
    <Navbar />
    <Routes>  
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Errorpage />}/>
    </Routes>

    </>
  );
}

export default App;
