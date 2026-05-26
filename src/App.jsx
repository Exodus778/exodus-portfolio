import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "./assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const myProjects = [
    {
      title: "Anita's Pizza",
      type: "A pizza restaurant website",
      description:
        "A high-conversion ordering platform built for a boutique pizzeria.",
      caseStudy:
        "Redesigned the digital ordering flow, resulting in a 40% increase in mobile checkouts by simplifying the menu architecture.",
      review:
        "Gregory delivered a site that finally matches the quality of our food. Our customers love the new experience.",
      client: "Anita Adewole - Owner",
      video: "/anita-pizza.mp4",
    },
    {
      title: "Dax Colluseum",
      type: "LUXURY WATCH BRAND",
      description: "A high-end e-commerce experience for luxury timepieces.",
      caseStudy:
        "Focused on high-fidelity animations and performance optimization to ensure a premium feel across all devices.",
      review:
        "The attention to detail in the motion design is incredible. Truly a masterpiece.",
      client: "Matthew Folmid - Lead Sales Rep",
      video: "/dax-luxury-watches.mp4",
    },
    {
      title: "Exodeploy",
      type: "DEVOPS & DEPLOYMENT PLATFORM",
      description:
        "A cloud deployment engine designed for automated workflow scaling.",
      caseStudy:
        "Engineered an optimized CI/CD bridging protocol that reduced production pipeline deployment lag by 25%.",
      review:
        "Effortless, raw performance. It stripped away all unnecessary friction from our software delivery cycles.",
      client: "Internal Product - Core Dev",
      video: "/exodeploy.mp4",
    },
    {
      title: "Beauty Sense Cosmetics",
      type: "E-COMMERCE & BRAND EXPERIENCE",
      description:
        "A luxury skincare and cosmetics digital flagship retail store.",
      caseStudy:
        "Architected a headless commerce storefront utilizing ultra-fast page routing and custom micro-interactions to elevate product discovery.",
      review:
        "The brand aesthetics translate beautifully into the digital space. It feels like a high-end storefront from the very first frame.",
      client: "Internal Concept - Design Lab",
      video: "/beauty-sense-cosmetics.mp4",
    },
  ];

  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".nav-anim", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-bg-text",
          { scale: 1.2, opacity: 0, duration: 2, ease: "expo.out" },
          "-=0.5",
        )
        .from(
          ".main-char",
          { y: 100, opacity: 0, duration: 1.2, ease: "power3.out" },
          "-=1.2",
        )
        .from(
          ".red-belt",
          { x: "100%", duration: 1, ease: "expo.out" },
          "-=0.8",
        );

      const sections = gsap.utils.toArray(".reveal-section");
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".reveal-item"), {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scroll = (id) =>
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={mainRef}
      className="bg-[#030303] text-white selection:bg-red-600 overflow-x-hidden"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* --- Wrapper around the entire nav structure --- */}
        <div className="absolute top-0 w-full p-10 z-50">
          <nav className="w-full flex justify-between items-center uppercase tracking-[0.4em]">
            {/* --- Interactive Frontend Developer Box --- */}
            <div className="nav-anim group border border-white/10 bg-zinc-950/40 backdrop-blur-md py-3 px-5 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] select-none">
              <p className="font-black text-xs leading-none text-white group-hover:text-black transition-colors duration-300">
                Frontend
              </p>
              <p className="text-[16px] text-red-600 font-[1000] tracking-normal mt-1 group-hover:text-black transition-colors duration-300">
                Developer
              </p>
            </div>

            {/* --- Styled Navigation Links --- */}
            <div className="hidden lg:flex gap-16 items-center font-black text-[11px] text-zinc-400">
              <button
                onClick={() => scroll("works")}
                className="nav-anim relative py-2 cursor-pointer transition-colors duration-300 hover:text-white group"
              >
                Projects
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
              </button>
              <button
                onClick={() => scroll("about")}
                className="nav-anim relative py-2 cursor-pointer transition-colors duration-300 hover:text-white group"
              >
                About
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
              </button>
              <button
                onClick={() => scroll("contact")}
                className="nav-anim relative py-2 cursor-pointer transition-colors duration-300 hover:text-white group"
              >
                Contact
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
              </button>
            </div>

            {/* --- Interactive Name Branding Box --- */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="nav-anim group text-right border border-white/10 bg-zinc-950/40 backdrop-blur-md py-3 px-5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] select-none"
            >
              <p className="font-black text-xs leading-none text-zinc-400 group-hover:text-black transition-colors duration-300">
                Gregory
              </p>
              <p className="text-[16px] text-white font-black tracking-normal mt-1 group-hover:text-black transition-colors duration-300">
                [2026]
              </p>
            </button>
          </nav>
        </div>

        <h1 className="hero-bg-text absolute text-[28vw] font-[1000] italic leading-none select-none z-0 tracking-tighter opacity-90">
          EXODUS
        </h1>

        <div className="main-char relative z-20 h-[88vh] pointer-events-none">
          <img
            src={heroImg}
            className="h-full object-contain drop-shadow-[0_0_100px_rgba(255,0,0,0.1)]"
            alt="Gregory"
          />
        </div>

        {/* --- INFINITE MARQUEE WITH CUSTOM LOGO --- */}
        <div className="red-belt absolute bottom-[18%] w-[120%] -rotate-2 z-30 bg-red-600 py-6 border-y-8 border-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-12 text-black font-[1000] italic text-lg uppercase"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>VUE</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>FRAMER</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>REACT EXPERT</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>MOTION DESIGN</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>NEXT.JS</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>SEO SPECIALIST</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>UI/UX</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
                <span>FRONTEND</span>
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
                </svg>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="reveal-section min-h-screen bg-[#030303] px-6 sm:px-12 lg:px-20 py-32 md:py-48 flex items-center justify-center"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 sticky lg:top-32">
            <h2 className="reveal-item text-6xl sm:text-7xl md:text-8xl lg:text-[7vw] font-[1000] italic uppercase tracking-tighter leading-[0.85]">
              Your vision
              <br /> <span className="text-red-600">My Code.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 border border-white/5 bg-zinc-950/20 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <p className="reveal-item text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.2] text-zinc-200">
              Bridging the gap between ambitious business ideas and the
              technical reality{" "}
              <span className="text-white underline decoration-red-600 decoration-2 underline-offset-4">
                required
              </span>{" "}
              to make them{" "}
              <span className="text-red-600 font-[1000]">SCALE.</span>
            </p>
            <div className="reveal-item h-0.5 w-16 bg-red-600 rounded-full"></div>
            <p className="reveal-item text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              I’m a developer who hates friction. I don’t just write code; I
              audit chaos and engineer clarity. While others focus on pixels, I
              focus on performance, scalability, and solving the "impossible"
              bottlenecks.
              <br />
              <br />
              I’m here to turn your technical debt into a seamless digital asset
              that actually works for you. Most see a bug, I see a chance to
              build something better. Let’s build something that makes your life
              easier.
            </p>
          </div>
        </div>
      </section>

      {/* --- WORKS SECTION --- */}
      <section
        id="works"
        className="reveal-section min-h-screen bg-[#050505] px-10 py-32"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="reveal-item text-8xl md:text-[10vw] font-[1000] italic uppercase tracking-tighter leading-[0.85] mb-20">
            Selected <span className="text-red-600">Works.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
            {myProjects.map((project, index) => (
              <ProjectCard
                key={index}
                num={`0${index + 1}`}
                name={project.title}
                tag={project.type}
                review={project.review}
                client={project.client}
                video={project.video}
                caseStudy={project.caseStudy}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section
        id="contact"
        className="reveal-section min-h-screen bg-red-600 flex items-center justify-center p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 font-[1000] text-[40vw] text-black italic select-none pointer-events-none leading-none flex items-center justify-center">
          HELLO
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h2 className="reveal-item text-black text-7xl md:text-[12vw] font-[1000] italic uppercase leading-none mb-10">
            Let’s <br /> Connect.
          </h2>
          <a
            href="mailto:gregorydwayne6@email.com"
            className="reveal-item bg-black text-white px-12 py-6 font-[1000] text-2xl italic uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* --- FOOTER COMPONENT --- */}
      <footer className="py-12 px-10 bg-[#030303]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.8em] uppercase italic font-bold opacity-30 order-2 md:order-1">
            Adewole Gregory © 2024
          </p>

          <div className="flex gap-8 text-xs font-bold tracking-[0.3em] uppercase order-1 md:order-2">
            <a
              href="https://github.com/Exodus778"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-2"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ExodusonX_"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-red-600 transition-colors duration-300 flex items-center gap-2"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ num, name, tag, review, client, video, caseStudy }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="reveal-item group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video border border-white/5 group-hover:border-red-600 overflow-hidden transition-all duration-500 bg-zinc-900 mb-8">
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <span className="absolute top-8 left-8 text-7xl font-[1000] italic text-white/5 group-hover:text-red-600 transition-colors duration-500 z-10 select-none">
          {num}
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-[1000] italic uppercase">{name}</h3>
          <p className="text-red-600 font-bold text-xs tracking-widest uppercase mt-2">
            {tag}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">
              Case Study
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">{caseStudy}</p>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">
              Review / {client}
            </p>
            <p className="text-white text-sm italic leading-relaxed">
              "{review}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
