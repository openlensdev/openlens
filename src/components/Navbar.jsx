import { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { services } from '../data'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Career', path: '/career' },
  { name: 'Why Open Lens', path: '/why' },
  { name: 'Contact', path: '/contact' },
]

// slugify helper
const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function Navbar({ dark, setDark }) {
  const navigate = useNavigate()
  const location = useLocation()
  const navRef = useRef(null)
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // GSAP: Navbar entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -80, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.nav-link', { y: -20, opacity: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: 'power2.out' })
    })
    return () => ctx.revert()
  }, [])

  // GSAP: Dropdown animation
  useEffect(() => {
    if (!dropdownRef.current) return
    if (servicesOpen) {
      gsap.set(dropdownRef.current, { display: 'block' })
      gsap.fromTo(dropdownRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      )
      gsap.fromTo('.dropdown-item', { x: -10, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2, stagger: 0.03, delay: 0.1 })
    } else {
      gsap.to(dropdownRef.current, { opacity: 0, y: -10, scale: 0.95, duration: 0.2, ease: 'power2.in', onComplete: () => gsap.set(dropdownRef.current, { display: 'none' }) })
    }
  }, [servicesOpen])

  const go = (path) => {
    navigate(path)
    setOpen(false)
    setServicesOpen(false)
  }

  const isActive = (p) => location.pathname === p
  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <header ref={navRef} className={`fixed top-0 left-0 right-0 z-50 border-b ${dark ? 'bg-[#050811] border-gray-800' : 'bg-white border-gray-200'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go('/')} className="flex items-center gap-2 group" onMouseEnter={(e) => gsap.to(e.currentTarget.querySelector('.logo-box'), { scale: 1.1, rotate: 5, duration: 0.3 })} onMouseLeave={(e) => gsap.to(e.currentTarget.querySelector('.logo-box'), { scale: 1, rotate: 0, duration: 0.3 })}>
          <div className="logo-box w-9 h-9 rounded-xl bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] grid place-items-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 4C7 4 2.7 7.1 1 12c1.7 4.9 6 8 11 8s9.3-3.1 11-8c-1.7-4.9-6-8-11-8zm0 9a3 3 0 110-6 3 3 0 010 6z"/></svg>
          </div>
          <span className={`text-[22px] font-black ${dark ? 'text-white' : 'text-black'}`}>Open<span className="text-[#e81c7e]">Lens</span></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home */}
          <div className="nav-link">
            <button onClick={() => go('/')} className={`px-4 py-2 rounded-lg text-[15px] font-medium transition ${isActive('/') ? 'text-[#e81c7e]' : dark ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-black/5'}`}>Home</button>
          </div>

          {/* Services Dropdown - NO direct /services link */}
          <div className="relative nav-link" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`px-4 py-2 rounded-lg text-[15px] font-medium transition flex items-center gap-1 ${isServicesActive ? 'text-[#e81c7e]' : dark ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-black/5'}`}>
              Services
              <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
            </button>

            <div ref={dropdownRef} style={{ display: 'none' }} className="absolute left-0 top-full mt-2 w-[340px] z-50">
              <div className={`rounded-2xl border shadow-2xl p-2 ${dark ? 'bg-[#0b1020] border-gray-700' : 'bg-white border-gray-200'}`}>
                {services.map((s) => {
                  const slug = slugify(s.t)
                  return (
                    <button key={s.t} onClick={() => go(`/services/${slug}`)} className={`dropdown-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition ${dark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                      <span className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.g} grid place-items-center shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.i}/></svg>
                      </span>
                      <div>
                        <div className={`text-[14px] font-medium ${dark ? 'text-white' : 'text-gray-900'}`}>{s.t}</div>
                        <div className={`text-[12px] ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{s.l[0]}</div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Other links */}
          {links.slice(1).map(l => (
            <div key={l.name} className="nav-link">
              <button onClick={() => go(l.path)} className={`px-4 py-2 rounded-lg text-[15px] font-medium transition ${isActive(l.path) ? 'text-[#e81c7e]' : dark ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-black hover:bg-black/5'}`}>{l.name}</button>
            </div>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className={`w-9 h-9 grid place-items-center rounded-lg border transition ${dark ? 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black'}`}>{dark ? '☀️' : '🌙'}</button>
          <button onClick={() => go('/contact')} className="hidden sm:block px-4 py-2 rounded-lg bg-[#e81c7e] text-white text-sm font-semibold hover:bg-[#d11670] hover:shadow-lg hover:shadow-pink-500/20 transition-all">Get Proposal</button>
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 grid place-items-center">
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 transition-all ${dark ? 'bg-white' : 'bg-black'} ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 transition-all ${dark ? 'bg-white' : 'bg-black'} ${open ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 transition-all ${dark ? 'bg-white' : 'bg-black'} ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`md:hidden border-t ${dark ? 'bg-[#050811] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            <button onClick={() => go('/')} className={`w-full text-left px-3 py-2.5 rounded-lg ${isActive('/') ? 'bg-[#e81c7e]/10 text-[#e81c7e]' : dark ? 'text-gray-300' : 'text-gray-700'}`}>Home</button>
            
            <div className="pt-2">
              <div className={`px-3 py-1 text-[12px] font-semibold uppercase tracking-wider ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Services</div>
              {services.map(s => {
                const slug = slugify(s.t)
                return <button key={s.t} onClick={() => go(`/services/${slug}`)} className={`w-full text-left px-3 py-2 rounded-lg text-[14px] ${dark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>• {s.t}</button>
              })}
            </div>

            {links.slice(1).map(l => (
              <button key={l.name} onClick={() => go(l.path)} className={`w-full text-left px-3 py-2.5 rounded-lg ${isActive(l.path) ? 'bg-[#e81c7e]/10 text-[#e81c7e]' : dark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}>{l.name}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
