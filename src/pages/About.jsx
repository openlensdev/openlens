import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SparkleGraphic from '../components/SparkleGraphic';

gsap.registerPlugin(ScrollTrigger);

export default function About({ dark }) {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TOP SECTION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      tl.from('.about-eyebrow', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.about-title .line', { 
          yPercent: 100, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power4.out' 
        }, '-=0.3')
        .from('.about-text p', { 
          y: 20, 
          opacity: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out' 
        }, '-=0.4')
        .from('.about-tag', { 
          scale: 0.8, 
          opacity: 0, 
          duration: 0.5, 
          stagger: 0.08, 
          ease: 'back.out(1.7)' 
        }, '-=0.3');

      // Service cards
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        rotationX: -15,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        }
      });

      // TEAM SECTION ANIMATION
      gsap.from('.team-eyebrow', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
        }
      });

      gsap.from('.team-para', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 78%',
        }
      });

      gsap.from('.team-card', {
        y: 60,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 70%',
        }
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const bgGradient = dark 
    ? 'bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#1c1130]' 
    : 'bg-gradient-to-br from-[#eef2ff] via-[#f0fdf4] to-[#fff7ed]';

  const services = ['Social Media', 'Marketing', 'PR', 'Branding', 'Web Development'];

  const team = [
    { name: 'Strategist', role: 'Strategy Lead', img: 'https://i.pravatar.cc/300?img=11' },
    { name: 'Creator', role: 'Creative Director', img: 'https://i.pravatar.cc/300?img=5' },
    { name: 'Marketer', role: 'Performance Marketing', img: 'https://i.pravatar.cc/300?img=15' },
  ];

  return (
    <>
      {/* TOP SECTION */}
      <section 
        ref={sectionRef}
        className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 ${bgGradient}`}
      >
        <SparkleGraphic dark={dark} />
        
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="about-eyebrow text-sm font-bold tracking-[0.2em] text-teal-500 mb-6 uppercase">About Us</p>
              
              <h1 className="about-title text-[clamp(40px,6vw,72px)] font-black leading-[0.9] tracking-tight mb-8">
                <span className={`block overflow-hidden ${dark ? 'text-white' : 'text-gray-900'}`}>
                  <span className="line block">Different minds,</span>
                </span>
                <span className={`block overflow-hidden ${dark ? 'text-white' : 'text-gray-900'}`}>
                  <span className="line block">One vision —</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="line block text-[#e81c7e]">OpenLens.</span>
                </span>
              </h1>
              
              <div className={`about-text space-y-4 text-lg leading-relaxed max-w-xl ${dark ? 'text-white/70' : 'text-gray-600'}`}>
                <p>From <strong className={dark ? 'text-white' : 'text-gray-900'}>Bihar to the United States</strong>, we shared a belief: great ideas know no boundaries.</p>
                <p>Together, we built OpenLens: a 360° digital agency helping brands shine, no matter where they're from.</p>
                <p>Because growth depends not on location, but on devotion to the dream.</p>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {['Strategy', 'Design', 'Development', 'Marketing'].map(tag => (
                  <span key={tag} className={`about-tag px-5 py-2.5 rounded-full text-sm font-semibold border backdrop-blur-sm transition-all hover:scale-105 ${dark ? 'bg-white/5 border-white/10 text-white/90 hover:bg-white/10' : 'bg-black/5 border-black/10 text-gray-800 hover:bg-black/10'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-gradient-to-r from-[#e81c7e]/20 to-[#6b21a8]/20 blur-3xl rounded-full" />
                <div className={`relative w-80 h-80 rounded-full border-2 ${dark ? 'border-white/10' : 'border-black/10'} flex items-center justify-center backdrop-blur-xl ${dark ? 'bg-white/5' : 'bg-black/5'}`}>
                  <div className="text-center">
                    <div className="text-6xl font-black text-[#e81c7e] mb-2">360°</div>
                    <div className={`text-sm uppercase tracking-widest ${dark ? 'text-white/60' : 'text-gray-600'}`}>Digital Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servicesRef} className={`relative py-24 border-t ${dark ? 'bg-[#050811] border-white/5' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <svg viewBox="0 0 500 500" className="w-full max-w-lg mx-auto" fill="none">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e81c7e" />
                    <stop offset="100%" stopColor="#6b21a8" />
                  </linearGradient>
                  <filter id="glow"><feGaussianBlur stdDeviation="20" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <circle cx="250" cy="250" r="180" stroke="url(#g1)" strokeOpacity="0.15" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="140" stroke="url(#g1)" strokeOpacity="0.25" strokeWidth="1.5" fill="none" />
                <circle cx="250" cy="250" r="100" stroke="url(#g1)" strokeOpacity="0.35" strokeWidth="2" fill="none" />
                <rect x="200" y="200" width="100" height="100" rx="24" fill="url(#g1)" filter="url(#glow)" />
                <path d="M235 250 L265 230 L265 270 Z" fill="white" opacity="0.95"/>
                {[120,380,150,370].map((x,i)=>(
                  <circle key={i} cx={x} cy={[150,180,350,340][i]} r={[8,6,7,5][i]} fill={i%2?'#6b21a8':'#e81c7e'} opacity="0.8">
                    <animate attributeName="cy" values={`${[150,180,350,340][i]};${[150,180,350,340][i]-10};${[150,180,350,340][i]}`} dur={`${2.5+i*0.3}s`} repeatCount="indefinite"/>
                  </circle>
                ))}
              </svg>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className={`text-[clamp(32px,5vw,52px)] font-black leading-[1.1] mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>
                We Don't Just Post.
                <br />
                <span className="text-[#e81c7e]">We Build Brands.</span>
              </h2>
              
              <div className={`space-y-4 text-lg leading-relaxed mb-12 max-w-xl ${dark ? 'text-white/70' : 'text-gray-600'}`}>
                <p className={`font-bold text-xl ${dark ? 'text-white' : 'text-gray-900'}`}>Open Lens Media Private Limited is a full-service digital agency.</p>
                <p>We combine creativity, strategy, and media expertise to grow your brand.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="service-card group relative">
                    <div className={`relative overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-br from-[#e81c7e]/40 to-[#6b21a8]/40 group-hover:from-[#e81c7e] group-hover:to-[#6b21a8] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#e81c7e]/25 group-hover:-translate-y-1`}>
                      <div className={`relative h-full rounded-2xl px-6 py-5 backdrop-blur-sm ${dark ? 'bg-[#0b1020]/90' : 'bg-white'}`}>
                        <div className="flex items-center justify-between">
                          <span className={`font-bold text-lg ${dark ? 'text-white' : 'text-gray-900'}`}>{service}</span>
                          <span className="text-[#e81c7e] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION - NEW */}
      <section ref={teamRef} className={`relative py-28 border-t ${dark ? 'bg-[#070b14] border-white/5' : 'bg-[#f8fafc] border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="team-eyebrow text-sm font-bold tracking-[0.25em] text-[#e81c7e] mb-4 uppercase">Our Team</p>
          
          <h2 className={`text-[clamp(32px,5vw,48px)] font-black mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>
            The minds behind OpenLens
          </h2>
          
          <p className={`team-para max-w-3xl mx-auto text-lg md:text-xl leading-relaxed ${dark ? 'text-white/70' : 'text-gray-600'}`}>
            “We’re a team of strategists, creators, and performance marketers focused on delivering real business results—not just likes and views.”
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
            {team.map((member, i) => (
              <div key={i} className="team-card group">
                <div className="relative mx-auto w-44 h-44">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full p- bg-gradient-to-br from-[#e81c7e]/50 to-[#6b21a8]/50">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                  <p className="text-[#e81c7e] font-medium mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}