import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Phone, Mail, Globe, MapPin, Send, Navigation } from "lucide-react";

export default function Contact() {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-sub", { y: 40, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from(".info-item", { x: -30, opacity: 0, stagger: 0.1, duration: 0.8, delay: 0.4 });
      gsap.from(".form-card", { y: 50, opacity: 0, duration: 1, delay: 0.3 });
      gsap.from(".map-section", { y: 40, opacity: 0, duration: 1, delay: 0.5 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative min-h-screen overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0f] text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.12),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.1),transparent_50%)] dark:opacity-100 opacity-60" />
        <svg className="absolute -top-32 -right-32 w- opacity-[0.15] dark:opacity-30" viewBox="0 0 500 500">
          <defs><linearGradient id="g1"><stop stopColor="#7c3aed"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
          <path fill="url(#g1)" d="M425,306Q395,362,335,398T211,440Q147,446,105,393T49,286Q35,232,71,185T148,103Q189,68,247,59T356,95Q417,140,436,195T425,306Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="hero-title text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white">
              LET'S WORK<br/>TOGETHER
            </h1>

            <p className="hero-sub mt-6 text-xl lg:text-2xl font-medium text-zinc-700 dark:text-zinc-200">
              Ready to Grow your Brand? <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Contact us Today!</span>
            </p>

            <div className="mt-12 space-y-5">
              {[
                { icon: Phone, text: "+91-8271084686", href: "tel:+918271084686" },
                { icon: Mail, text: "info@openlens.in", href: "mailto:info@openlens.in" },
                { icon: Globe, text: "www.openlens.in", href: "https://www.openlens.in" },
                { icon: MapPin, text: "Corporate Office: 204, Jagdamba Palace, Sheikhpura bagicha, Patna-800014." },
              ].map((item, i) => (
                <a key={i} href={item.href} className="info-item flex items-start gap-4 group">
                  <div className="mt-1 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-violet-500/20 transition">
                    <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-300" />
                  </div>
                  <span className="text- leading-snug text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-4">
                Connect with us on:
              </p>
              <div className="flex gap-3">
                {["in","ig","fb","x"].map(s => (
                  <a key={s} href="#" className="w-11 h-11 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 grid place-items-center hover:scale-110 transition text-zinc-700 dark:text-zinc-300 hover:bg-black/10 dark:hover:bg-white/10">
                    <span className="text-sm font-semibold uppercase">{s}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="form-card relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded- blur-2xl opacity-10 dark:opacity-20" />
            <div className="relative bg-white/80 dark:bg-zinc-900/70 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded- p-8 lg:p-10 shadow-xl">
              <form className="space-y-5">
                {["Full Name","Email-Id","Subject"].map(p => (
                  <input key={p} placeholder={p} className="w-full h-14 px-5 bg-black/[0.02] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl outline-none focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/10 text-zinc-900 dark:text-white placeholder:text-zinc-500 dark:placeholder:text-zinc-500" />
                ))}
                <textarea rows="5" placeholder="Your Message..." className="w-full px-5 py-4 bg-black/[0.02] dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl outline-none focus:border-violet-500/50 text-zinc-900 dark:text-white placeholder:text-zinc-500" />
                <button type="submit" className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98] transition">
                  <Send className="w-4 h-4"/> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* === GOOGLE MAP SECTION - NEECHE ADD KIYA === */}
        <div className="map-section mt-24">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <MapPin className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">Visit Our Patna Office</h2>
            </div>
            <a
              href="https://www.google.com/maps?cid=10423367512015384524"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition text-sm font-medium"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>

          <div className="relative w-full h- overflow-hidden rounded- border border-black/10 dark:border-white/10 shadow-2xl">
            {/* Dark mode ke liye subtle overlay */}
            <div className="absolute inset-0 bg-black/0 dark:bg-black/10 pointer-events-none z-10 mix-blend-multiply hidden dark:block" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9!2d85.115!3d25.594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90a8c9c9c9c9c9c9!2sJagdamba%20Palace%2C%20Sheikhpura%2C%20Patna!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OpenLens Office Location"
              className="grayscale-[0.2] dark:grayscale-[0.3] dark:invert-[0.92] dark:hue-rotate-180"
            ></iframe>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            204, Jagdamba Palace, Sheikhpura Bagicha, Patna - 800014
          </p>
        </div>

      </div>
    </div>
  );
}