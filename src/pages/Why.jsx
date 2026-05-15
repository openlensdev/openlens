import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SparkleGraphic from '../components/SparkleGraphic';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs({ dark }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left visual - IMAGE ANIMATION
      gsap.from('.why-left', {
        x: -80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Right content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });

      tl.from('.why-eyebrow', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
       .from('.why-title.line', {
          xPercent: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power4.out'
        }, '-=0.2')
       .from('.why-desc', {
          x: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.4')
       .from('.why-point', {
          x: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out'
        }, '-=0.3');

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const bgGradient = dark
   ? 'bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-[#1c1130]'
    : 'bg-gradient-to-br from-[#fff7ed] via-[#eef2ff] to-[#f0fdf4]';

  const points = [
    { title: 'Fast Execution', desc: 'Quick delivery with high quality output.' },
    { title: 'Platform Based Strategy', desc: 'Custom strategy for Instagram, Google & YouTube.' },
    { title: 'Data Driven Growth', desc: 'We focus on real results not fake metrics.' },
    { title: 'Dedicated Support', desc: 'Always available for your business.' },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center overflow-hidden py-20 transition-colors duration-500 ${bgGradient}`}
    >
      <SparkleGraphic dark={dark} />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL - NEW IMAGE */}
          <div className="why-left relative order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-[#e81c7e]/30 to-[#6b21a8]/30 blur-3xl rounded-full" />

              {/* Image container with same style as your site */}
              <div className={`relative overflow-hidden rounded-[2.5rem] p- bg-gradient-to-br from-[#e81c7e]/40 to-[#6b21a8]/40 shadow-2xl shadow-[#e81c7e]/20`}>
                <div className={`relative rounded-[2.4rem] overflow-hidden ${dark? 'bg-black/20' : 'bg-white/50'} backdrop-blur-sm`}>
                  <img
                    src="/images/laptop_person.jpg"
                    alt="Person working on laptop"
                    className="w-full max-w-lg h- object-cover"
                  />
                  {/* subtle gradient overlay to match theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - SAME AS BEFORE */}
          <div className="order-1 lg:order-2">
            <p className="why-eyebrow text-sm font-bold tracking-[0.2em] text-[#e81c7e] mb-5 uppercase">Why Choose Us</p>

            <h2 className="why-title text-[clamp(36px,5vw,56px)] font-black leading-[1.1] tracking-tight mb-6">
              <span className={`block overflow-hidden ${dark? 'text-white' : 'text-gray-900'}`}>
                <span className="line block">Grow Your Brand With</span>
              </span>
              <span className="block overflow-hidden">
                <span className="line block text-[#e81c7e]">Smart Digital Strategy</span>
              </span>
            </h2>

            <p className={`why-desc text-lg leading-relaxed max-w-xl mb-10 ${dark? 'text-white/70' : 'text-gray-600'}`}>
              We help startups and businesses build a strong online presence using creative design and data-driven marketing strategies.
            </p>

            <div className="space-y-5">
              {points.map((point) => (
                <div key={point.title} className="why-point group flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#e81c7e] to-[#6b21a8] flex items-center justify-center shadow-lg shadow-[#e81c7e]/20">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 6l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${dark? 'text-white' : 'text-gray-900'} group-hover:text-[#e81c7e] transition-colors`}>
                      {point.title}
                    </h3>
                    <p className={`text-base ${dark? 'text-white/60' : 'text-gray-600'}`}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}