import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
