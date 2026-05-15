import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Palette,
  Code2,
  TrendingUp,
  Star,
  Radio,
  Search,
  FileText,
  Share2,
  Mail,
  Users,
  PenTool,
  Video,
  Layout,
  Smartphone,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Core Digital Marketing",
    desc: "Full-funnel acquisition that compounds: search, social, content, and paid.",
    icon: Megaphone,
    color: "from-violet-600 to-fuchsia-600",
    items: [
      { name: "SEO", detail: "on-page, off-page, technical, local, audits", icon: Search },
      { name: "Content Marketing", detail: "blogs, case studies, eBooks, infographics", icon: FileText },
      { name: "Social Media Marketing", detail: "Facebook, Instagram, LinkedIn, X, YouTube, WhatsApp, Pinterest, Reddit, Telegram, Quora, Discord, GMB", icon: Share2 },
      { name: "Paid Advertising", detail: "Google Ads, PPC, CPC, display, app downloads", icon: Target },
      { name: "Email Marketing", detail: "automation, drip campaigns, newsletters", icon: Mail },
      { name: "Influencer Marketing", detail: "Instagram/TikTok/Shorts collabs, niche creators", icon: Users },
    ],
  },
  {
    id: 2,
    title: "Branding & Creative",
    desc: "Distinctive identities and design systems that earn attention and trust.",
    icon: Palette,
    color: "from-pink-600 to-orange-500",
    items: [
      { name: "Brand Strategy", detail: "positioning, messaging, storytelling", icon: PenTool },
      { name: "Logo & Graphic Design", detail: "Logo Design & Graphic Design", icon: Palette },
      { name: "Video Production", detail: "AI video, film shooting, documentaries, reels", icon: Video },
      { name: "UI/UX Design", detail: "website/app interfaces, premium aesthetics", icon: Layout },
    ],
  },
  {
    id: 3,
    title: "Web & App Development",
    desc: "Blazing-fast, scalable products built with modern architecture.",
    icon: Code2,
    color: "from-blue-600 to-cyan-500",
    items: [
      { name: "Full-Stack Development", detail: "frontend + backend", icon: Code2 },
      { name: "App Development", detail: "iOS, Android, hybrid", icon: Smartphone },
      { name: "API Integrations", detail: "third-party tools, payment gateways, CRM, automation", icon: Zap },
      { name: "Website Optimization", detail: "speed, security, maintenance", icon: TrendingUp },
    ],
  },
  {
    id: 4,
    title: "Advanced Growth Services",
    desc: "Experimentation, automation, and data to multiply what works.",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-500",
    items: [
      { name: "Conversion Rate Optimization", detail: "A/B testing, landing page optimization", icon: Target },
      { name: "Marketing Automation", detail: "HubSpot, Mailchimp, CRM workflows", icon: Zap },
      { name: "Analytics & Reporting", detail: "Google Analytics, dashboards, ROI tracking", icon: BarChart3 },
      { name: "Market Research", detail: "competitor analysis, audience insights", icon: Search },
    ],
  },
  {
    id: 5,
    title: "Review and Growth Services",
    desc: "Turn real customer voice into acquisition and retention.",
    icon: Star,
    color: "from-amber-500 to-orange-600",
    items: [
      { name: "Product Feedback", detail: "Your company product feedback", icon: Star },
    ],
  },
  {
    id: 6,
    title: "Public Relations",
    desc: "Earned media and narrative control that builds lasting authority.",
    icon: Radio,
    color: "from-rose-600 to-pink-600",
    items: [
      { name: "Press Releases", detail: "launch announcements, company news, campaign updates", icon: FileText },
      { name: "Press Conferences", detail: "event planning, media coordination, brand messaging", icon: Users },
      { name: "Media Outreach", detail: "media outreach and publication pitching", icon: Megaphone },
      { name: "Reputation Building", detail: "trust building, credibility, and online authority", icon: Star },
    ],
  },
];

export default function Services() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      });

      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
          },
          y: 48,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.04,
          ease: "power2.out",
        });

        const glow = card.querySelector(".card-glow");

        card.addEventListener("mouseenter", () => {
          gsap.to(glow, { opacity: 0.28, duration: 0.25 });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(glow, { opacity: 0, duration: 0.25 });
        });
      });

      gsap.utils.toArray(".service-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 92%",
          },
          x: -16,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0f] text-zinc-900 dark:text-white overflow-hidden"
    >
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(124,58,237,0.16),transparent_60%)]" />
      </div>

      <section className="hero max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-10 md:pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-semibold">
          PREMIUM SERVICES
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A professional agency engineered for scale. We combine performance
          marketing, iconic brand craft, and elite engineering.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-24">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-5 lg:gap-6 space-y-5 lg:space-y-6">
          {services.map((s) => {
            const Icon = s.icon;

            return (
              <article
                key={s.id}
                className="service-card group relative break-inside-avoid mb-5 lg:mb-6"
              >
                <div
                  className={`card-glow absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r ${s.color} opacity-0 blur-2xl transition-opacity`}
                />

                <div className="relative bg-white/85 dark:bg-zinc-900/75 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[1.5rem] p-5 sm:p-6 lg:p-7 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${s.color} p-[1.5px] mb-5`}
                  >
                    <div className="w-full h-full rounded-[0.9rem] bg-white dark:bg-zinc-900 grid place-items-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900 dark:text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {s.items.map((it) => {
                      const Ico = it.icon;

                      return (
                        <div
                          key={it.name}
                          className="service-item flex items-start gap-3 rounded-xl p-2 -mx-2 transition group/item hover:bg-black/5 dark:hover:bg-white/5"
                        >
                          <div className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-black/5 dark:bg-white/5 group-hover/item:bg-violet-500/15 transition">
                            <Ico className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-snug break-words">
                              {it.name}
                            </p>

                            {it.detail && (
                              <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-0.5 leading-relaxed break-words">
                                {it.detail}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600">
            <div className="bg-[#fafafa] dark:bg-[#0a0a0f] rounded-2xl px-5 sm:px-8 py-6">
              <h4 className="text-lg sm:text-xl font-bold">
                Need a bespoke growth system?
              </h4>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-md">
                We architect integrated playbooks across all 6 services.
              </p>

              <button className="mt-4 px-6 h-11 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition">
                Book Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
