import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Career from './pages/Career'
import Why from './pages/Why'
import Contact from './pages/Contact'
import ServiceDetail from './pages/ServiceDetail'


gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [dark, setDark] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/' // ← add

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) setDark(saved === 'dark')
  }, [])

  // Page transition animation
  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.fromTo('.page-content', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
  }, [location.pathname])

  // Global text split
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.split').forEach(h => {
        if (!h.dataset.split) {
          h.dataset.split = '1'
          h.innerHTML = [...h.textContent].map(c => `<span class="char inline-block">${c === ' ' ? '&nbsp;' : c}</span>`).join('')
        }
      })
    })
    return () => ctx.revert()
  }, [location.pathname])

  return (
    <div className={`${dark ? 'bg-[#050811] text-white' : 'bg-[#f8fafc] text-gray-900'} antialiased transition-colors duration-500 min-h-screen`}>
      <Navbar dark={dark} setDark={setDark} isHome={isHome} /> {/* ← isHome pass */}
      <div className={`page-content ${!isHome? 'pt-[70px]' : ''}`}> {/* ← Home par NO padding */}
        <Routes>
          <Route path="/" element={<Home dark={dark} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/career" element={<Career dark={dark} />} />
          <Route path="/why" element={<Why dark={dark} />} />
          <Route path="/contact" element={<Contact dark={dark} />} />
        </Routes>
      </div>
    </div>
  )
}
