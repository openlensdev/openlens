import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const slides = [
  { img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80', pos: 'center', title: ['We Build', 'Tech That Scales.'], color: 'text-[#e81c7e]', sub: 'Modern Tech Agency • AI, Web Apps, Mobile & Cloud.' },
  { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80', pos: 'center 22%', title: ['Ship Products', 'In 6 Weeks.'], color: 'text-yellow-400', sub: 'Next.js, Flutter, Python, AWS — production-ready teams.' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80', pos: 'center', title: ['AI & Automation', 'Built-In.'], color: 'text-cyan-400', sub: 'Chatbots, RAG agents, workflows that cut costs 40%.' },
  { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80', pos: 'center 30%', title: ['Scale On Cloud', 'Securely.'], color: 'text-[#e81c7e]', sub: 'DevOps, CI/CD, 99.9% uptime architecture.' },
];

export default function HeroSlider({ dark }) {
  const [current, setCurrent] = useState(0);
  const track = useRef(null);
  const progress = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.split-text').forEach((h) => {
        if (!h.dataset.split) {
          h.dataset.split = '1';
          h.innerHTML = [...h.textContent].map((c) => `<span class="char inline-block">${c === ' '? '&nbsp;' : c}</span>`).join('');
        }
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slideTo = (i) => {
        gsap.to(track.current, { x: -i * window.innerWidth, duration: 1.1, ease: 'power3.inOut' });
        const slide = document.querySelector(`[data-s="${i}"]`);
        if (slide) {
          gsap.fromTo(slide.querySelectorAll('.char'), { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.015, duration: 0.6, ease: 'back.out(1.7)' });
        }
        // ORIGINAL PROGRESS BAR ANIMATION
        gsap.killTweensOf(progress.current);
        gsap.set(progress.current, { width: 0 });
        gsap.to(progress.current, { width: '100%', duration: 5, ease: 'none', onComplete: () => setCurrent((i + 1) % slides.length) });
      };
      slideTo(current);
      const onR = () => gsap.set(track.current, { x: -current * window.innerWidth });
      window.addEventListener('resize', onR);
      return () => window.removeEventListener('resize', onR);
    });
    return () => ctx.revert();
  }, [current]);

  return (
    <div className="text-white antialiased overflow-hidden">
      <section className="relative h-screen w-full overflow-hidden">
        <div ref={track} className="flex h-full">
          {slides.map((s, i) => (
            <div key={i} data-s={i} className="relative w-screen h-screen shrink-0">
              <img src={s.img} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: s.pos }} alt={s.title.join(' ')} />
              {/* Light mode fix - no white wash */}
              <div className={`absolute inset-0 ${dark? 'bg-gradient-to-b from-black/70 via-black/50 to-black/85' : 'bg-gradient-to-b from-black/45 via-black/30 to-black/65'}`} />

              <div className="relative z-10 h-full flex items-center justify-center px-4 text-center pt-20">
                <div className="overflow-hidden">
                  <h1 className="font-black leading-[0.85] tracking-[-0.02em] text-[clamp(2.5rem,10vw,7.5rem)] text-white">
                    <span className="block split-text">{s.title[0]}</span>
                    <span className={`block split-text ${s.color}`}>{s.title[1]}</span>
                  </h1>
                  <p className="mt-5 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">{s.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORIGINAL PROGRESS BAR - wapas add kiya */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/10">
          <div ref={progress} className="h-full w-0 bg-gradient-to-r from-[#e81c7e] to-[#6b21a8]" />
        </div>
      </section>
    </div>
  );
}