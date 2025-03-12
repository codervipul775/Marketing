import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Influencers from './pages/Influencers'
import Contact from './pages/Contact'
import Brand from './pages/Brand'

export default function App() {
  const footerLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/influencers" element={<Influencers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand" element={<Brand />} />
          </Routes>
        </main>
        <Footer copyright=" 2025 My Project" links={footerLinks} />
      </div>
    </Router>
  )
}