import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesGrid({ dark }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.card',
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '#services', start: 'top 75%' }
        }
      )
      document.querySelectorAll('.card').forEach(card => {
        const inner = card.querySelector('.card-inner')
        const icon = card.querySelector('svg')
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, duration: 0.35, ease: 'power2.out' })
          gsap.to(inner, { boxShadow: dark ? '0 20px 40px rgba(232,28,126,0.15)' : '0 20px 40px rgba(0,0,0,0.08)', duration: 0.35 })
          gsap.to(icon, { scale: 1.2, rotate: 8, duration: 0.35, ease: 'back.out(1.7)' })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.35 })
          gsap.to(inner, { boxShadow: '0 0 0 rgba(0,0,0,0)', duration: 0.35 })
          gsap.to(icon, { scale: 1, rotate: 0, duration: 0.35 })
        })
      })
    })
    return () => ctx.revert()
  }, [dark])

  const cardWrap = dark ? 'border-white/10 bg-white/[0.03] hover:border-[#e81c7e]/40' : 'border-black/10 bg-black/[0.03] hover:border-[#e81c7e]/40'
  const cardInner = dark ? 'bg-[#0b1020]/70' : 'bg-white/80'
  const titleCls = dark ? 'text-white' : 'text-gray-900'
  const descCls = dark ? 'text-white/65' : 'text-gray-600'

  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
      <h2 className="split text-4xl font-black text-center mb-12 reveal">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(s=>(
          <div key={s.t} className={`card group rounded-[28px] border p-[1px] transition-colors duration-300 will-change-transform ${cardWrap}`}>
            <div className={`card-inner h-full rounded-[27px] backdrop-blur-xl p-7 flex flex-col ${cardInner}`}>
              <div className={`size-12 rounded-xl bg-gradient-to-br ${s.g} grid place-items-center mb-4`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.i}/></svg>
              </div>
              <h3 className={`font-bold text-lg ${titleCls}`}>{s.t}</h3>
              <p className={`text-sm mt-2 leading-relaxed flex-grow ${descCls}`}>{s.l?.join(' • ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
