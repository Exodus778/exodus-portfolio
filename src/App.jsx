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
        <nav className="absolute top-0 w-full flex justify-between p-10 z-100 uppercase tracking-[0.4em]">
          <div className="nav-anim border-l-4 border-red-600 pl-4">
            <p className="font-[1000] text-sm leading-none">Frontend</p>
            <p className="text-[10px] text-zinc-500 font-bold">Developer</p>
          </div>

          <div className="hidden lg:flex gap-16 items-center font-[1000] text-[11px] text-zinc-400">
            <button
              onClick={() => scroll("works")}
              className="nav-item cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scroll("about")}
              className="nav-item cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scroll("contact")}
              className="nav-item cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="nav-anim text-right border-r-4 border-red-600 pr-4">
            <p className="font-[1000] text-sm leading-none uppercase">
              Gregory
            </p>
            <p className="text-[10px] text-zinc-500 font-bold">[2026]</p>
          </div>
        </nav>

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

        <div className="red-belt absolute bottom-[18%] w-[120%] -rotate-2 z-30 bg-red-600 py-6 border-y-8 border-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 text-black font-[1000] italic text-lg uppercase"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i}>
                ● VUE ● FRAMER ● REACT EXPERT ● MOTION DESIGN ● NEXT.JS ● SEO
                SPECIALIST ● UI/UX ● FRONTEND ●{" "}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="reveal-section min-h-screen bg-[#030303] px-10 py-48 md:py-64 flex items-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-40">
          <h2 className="reveal-item text-8xl md:text-[10vw] font-[1000] italic uppercase tracking-tighter leading-[0.8] mb-12 lg:mb-0">
            Your vision
            <br /> <span className="text-red-600">My Code.</span>
          </h2>
          <br />
          <div className="reveal-item flex flex-col justify-center gap-12">
            <p className="text-3xl md:text-5xl font-bold leading-[1.1] text-zinc-300">
              Bridging the gap between ambitious business ideas and the
              technical reality . <span className="text-white">Required</span>{" "}
              to make them <span className="text-red-600">SCALE.</span>
            </p>
            <div className="h-2px] w-20 bg-red-600"></div>
            <p className="text-zinc-500 text-lg md:text-xl max-w-lg leading-relaxed">
              I’m a developer who hates friction. I don’t just write code; I
              audit chaos and engineer clarity. While others focus on pixels, I
              focus on performance, scalability, and solving the "impossible"
              bottlenecks. I’m here to turn your technical debt into a seamless
              digital asset that actually works for you.Most see a bug, I see a
              chance to build something better. Let’s build something that makes
              your life easier."
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
            Let’s <br /> Connect
          </h2>
          <a
            href="mailto:gregorydwayne6@email.com"
            className="reveal-item bg-black text-white px-12 py-6 font-[1000] text-2xl italic uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl"
          >
            Send Message
          </a>
        </div>
      </section>

      <footer className="py-10 text-center opacity-30 border-t border-white/5">
        <p className="text-[9px] tracking-[0.8em] uppercase italic font-bold">
          Adewole Gregory © 2024
        </p>
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
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-8 left-8 text-7xl font-[1000] italic text-white/5 group-hover:text-red-600 transition-colors z-10">
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
