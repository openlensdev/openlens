import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Upload, Briefcase, MapPin, Clock, Send, Sparkles } from "lucide-react";

const openings = [
  { role: "Performance Marketing Specialist", type: "Full-time", loc: "Patna / Remote", exp: "2-4 yrs" },
  { role: "SEO Strategist", type: "Full-time", loc: "Patna", exp: "1-3 yrs" },
  { role: "Content Creator", type: "Internship", loc: "Remote", exp: "0-1 yr" },
  { role: "Graphic Designer", type: "Full-time", loc: "Patna", exp: "2+ yrs" },
];

export default function Career() {
  const root = useRef();
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".grow-label", { y: 20, opacity: 0, duration: 0.6 });
      gsap.from(".career-title", { y: 50, opacity: 0, duration: 0.9, ease: "power3.out" });
      gsap.from(".career-sub", { y: 30, opacity: 0, duration: 0.8, delay: 0.2 });
      gsap.from(".form-wrap", { x: 80, opacity: 0, duration: 1, delay: 0.3 });
      gsap.from(".job-card", { y: 40, opacity: 0, stagger: 0.1, duration: 0.7, delay: 0.5 });

      // floating badge
      gsap.to(".float-badge", { y: -10, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0f] text-zinc-900 dark:text-white transition-colors">
      {/* BG */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_20%,rgba(124,58,237,0.15),transparent),radial-gradient(50%_40%_at_80%_30%,rgba(236,72,153,0.12),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="grow-label inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> GROW WITH US
            </div>

            <h1 className="career-title mt-6 text-6xl lg:text-8xl font-black tracking-tighter">
              Careers
            </h1>

            <p className="career-sub mt-6 text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              Reach out to us and unlock a world of possibilities - let's connect and turn your dreams into reality.
            </p>

            <div className="float-badge mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium">Performance Marketing Agency in India</span>
            </div>

            <div className="mt-14">
              <h2 className="text-2xl font-bold">Career With Us</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-md">
                Join us and unlock a world of opportunities - let's connect and turn your dreams into reality.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="form-wrap relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-[2.2rem] blur-2xl opacity-20" />
            <div className="relative bg-white/80 dark:bg-zinc-900/70 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded- p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Send us a message</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/15 text-violet-700 dark:text-violet-300">We're hiring!</span>
              </div>

              <form className="space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Application sent!')}}>
                <input placeholder="Enter Your Name" required className="w-full h-12 px-4 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-violet-500/30" />

                <input type="email" placeholder="Your E-mail" required className="w-full h-12 px-4 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-violet-500/30" />

                <select required className="w-full h-12 px-4 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none text-zinc-700 dark:text-zinc-200">
                  <option value="">Role Applying for</option>
                  {openings.map(o=> <option key={o.role}>{o.role}</option>)}
                </select>

                {/* Resume Upload */}
                <label className="group relative block">
                  <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={e=>setFileName(e.target.files[0]?.name || "")} />
                  <div className="h-24 rounded-xl border-2 border-dashed border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10 transition grid place-items-center cursor-pointer">
                    <div className="text-center">
                      <Upload className="w-5 h-5 mx-auto mb-1.5 text-violet-600 dark:text-violet-400 group-hover:-translate-y-0.5 transition" />
                      <p className="text-sm font-medium">{fileName || "Drop your resume here"}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">PDF, DOC up to 5MB</p>
                    </div>
                  </div>
                </label>

                <textarea rows="3" placeholder="Write your message" className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 outline-none resize-none" />

                <button className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] active:scale-[0.98] transition">
                  <Send className="w-4 h-4" /> Send Application
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* VACANCY */}
        <div className="mt-28">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 font-semibold">Our Vacancy</p>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">Current Openings</h2>
            </div>
            <div className="hidden md:block text-sm px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
              Performance Marketing Agency in India
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {openings.map((job) => (
              <div key={job.role} className="job-card group relative p- rounded-2xl bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 hover:from-violet-500/50 transition">
                <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl p-6 hover:-translate-y-1 transition">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 grid place-items-center mb-4 group-hover:scale-110 transition">
                    <Briefcase className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="font-semibold leading-snug">{job.role}</h3>
                  <div className="mt-4 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.loc}</div>
                    <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {job.type} • {job.exp}</div>
                  </div>
                  <button className="mt-5 w-full h-9 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-violet-600 group-hover:text-white text-sm font-medium transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}