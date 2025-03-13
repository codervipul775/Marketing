import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const footerLinks: { name: string; url: string; }[] = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Contact', url: '/contact' }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer copyright=" 2025 My Project" links={footerLinks} />
    </div>
  )
}

export default App