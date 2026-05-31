import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "./assets/hero.png";
import anitaPizzaVideo from "../public/anita-pizza.mp4";
import daxWatchesImage from "../public/Dax-Watches.png";
import exodeployImage from "../public/Exodeploy.png";
import beautySenseImage from "../public/Beauty-Sense.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    details: "",
  });

  const myProjects = useMemo(
    () => [
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
        video: anitaPizzaVideo,
        outcome: "+40% mobile checkout uplift",
        role: "Frontend Strategy, UX Refinement, Conversion Optimization",
        timeline: "5 Weeks",
        stack: ["React", "Framer Motion", "GSAP", "Responsive UX"],
        challenges: [
          "Customers were dropping off on mobile before reaching checkout.",
          "The original menu architecture created friction and slowed ordering.",
        ],
        process: [
          "Mapped the full ordering journey to identify high-friction touchpoints.",
          "Rebuilt menu hierarchy to reduce decision fatigue and speed up item discovery.",
          "Introduced cleaner section transitions and stronger mobile-first CTAs.",
        ],
        results: [
          "40% increase in mobile checkouts",
          "Improved ordering completion speed",
          "Clearer navigation for repeat customers",
        ],
      },
      {
        title: "Dax Colluseum",
        type: "Luxury watch brand",
        description: "A high-end e-commerce experience for luxury timepieces.",
        caseStudy:
          "Focused on high-fidelity animations and performance optimization to ensure a premium feel across all devices.",
        review:
          "The attention to detail in the motion design is incredible. Truly a masterpiece.",
        client: "Matthew Folmid - Lead Sales Rep",
        video: daxWatchesImage,
        outcome: "Premium motion with stable performance",
        role: "Motion Direction, Frontend Build, Performance Tuning",
        timeline: "6 Weeks",
        stack: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
        challenges: [
          "The visual experience needed to feel premium without hurting performance.",
          "Product storytelling needed stronger emotional impact across devices.",
        ],
        process: [
          "Built animation systems around product reveals and scroll pacing.",
          "Optimized video and transition timing to preserve performance budgets.",
          "Balanced luxury aesthetics with responsive interaction design.",
        ],
        results: [
          "Smoother cross-device interactions",
          "Higher perceived product value",
          "Improved visual consistency across breakpoints",
        ],
      },
      {
        title: "Exodeploy",
        type: "DevOps & deployment platform",
        description:
          "A cloud deployment engine designed for automated workflow scaling.",
        caseStudy:
          "Engineered an optimized CI/CD bridging protocol that reduced production pipeline deployment lag by 25%.",
        review:
          "Effortless, raw performance. It stripped away all unnecessary friction from our software delivery cycles.",
        client: "Internal Product - Core Dev",
        video: exodeployImage,
        outcome: "-25% production deployment lag",
        role: "Product Engineering, System UX, Workflow Optimization",
        timeline: "8 Weeks",
        stack: ["React", "CI/CD", "Workflow Design", "System Interfaces"],
        challenges: [
          "Deployment workflows had too many manual dependencies.",
          "The platform experience needed to simplify technical complexity.",
        ],
        process: [
          "Audited the pipeline handoff points creating avoidable delays.",
          "Designed a cleaner workflow interface focused on speed and visibility.",
          "Reduced friction in the deployment lifecycle through streamlined states.",
        ],
        results: [
          "25% reduction in deployment lag",
          "Clearer deployment visibility",
          "Less operational friction for the core team",
        ],
      },
      {
        title: "Beauty Sense Cosmetics",
        type: "E-commerce & brand experience",
        description:
          "A luxury skincare and cosmetics digital flagship retail store.",
        caseStudy:
          "Architected a headless commerce storefront utilizing ultra-fast page routing and custom micro-interactions to elevate product discovery.",
        review:
          "The brand aesthetics translate beautifully into the digital space. It feels like a high-end storefront from the very first frame.",
        client: "Internal Concept - Design Lab",
        video: beautySenseImage,
        stack: [
          "React",
          "Headless Commerce",
          "Micro-interactions",
          "UX Systems",
        ],
        challenges: [
          "The shopping journey needed to feel elevated while staying intuitive.",
          "Product discovery had to be fast without sacrificing premium aesthetics.",
        ],
        process: [
          "Structured a storefront experience around fast category exploration.",
          "Added subtle motion cues to increase product engagement.",
          "Designed a more editorial product browsing rhythm for brand alignment.",
        ],
        results: [
          "Faster product exploration",
          "Stronger luxury brand perception",
          "More engaging product discovery flow",
        ],
      },
    ],
    [],
  );

  const testimonials = [
    {
      quote:
        "Gregory delivered a site that finally matches the quality of our food. Our customers love the new experience.",
      author: "Anita Adewole",
      role: "Owner, Anita's Pizza",
    },
    {
      quote:
        "The attention to detail in the motion design is incredible. Truly a masterpiece.",
      author: "Matthew Folmid",
      role: "Lead Sales Rep, Dax Colluseum",
    },
    {
      quote:
        "Effortless, raw performance. It stripped away all unnecessary friction from our software delivery cycles.",
      author: "Core Dev Team",
      role: "Internal Product Stakeholders",
    },
  ];

  const skillGroups = [
    {
      title: "Frontend Engineering",
      items: [
        "React",
        "Next.js",
        "Component Architecture",
        "Responsive Systems",
      ],
    },
    {
      title: "Motion & Interaction",
      items: [
        "GSAP",
        "Framer Motion",
        "Micro-interactions",
        "Scroll Storytelling",
      ],
    },
    {
      title: "Performance",
      items: [
        "Core Web Vitals",
        "Render Optimization",
        "Asset Strategy",
        "UX Speed",
      ],
    },
    {
      title: "Product Thinking",
      items: [
        "Conversion UX",
        "Audit & Refactor",
        "Design Systems",
        "Scalable UI",
      ],
    },
  ];

  const trustStats = [
    { value: "40%", label: "Mobile checkout growth" },
    { value: "25%", label: "Deployment lag reduced" },
    { value: "4", label: "Featured case studies" },
    { value: "24h", label: "Estimated response window" },
  ];

  const services = [
    "Premium portfolio & business websites",
    "High-conversion landing pages",
    "Motion-heavy frontend experiences",
    "Frontend refactors & performance optimization",
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
          stagger: 0.12,
          ease: "power3.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const mailtoHref = `mailto:gregorydwayne6@email.com?subject=${encodeURIComponent(
    `New project inquiry from ${contactForm.name || "your portfolio"}`,
  )}&body=${encodeURIComponent(
    `Name: ${contactForm.name}
Email: ${contactForm.email}
Budget: ${contactForm.budget}
Timeline: ${contactForm.timeline}

Project Details:
${contactForm.details}`,
  )}`;

  return (
    <div
      ref={mainRef}
      className="bg-[#030303] text-white selection:bg-red-600 overflow-x-hidden"
    >
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 w-full p-6 sm:p-10 z-50">
          <nav className="relative w-full flex items-center uppercase tracking-[0.4em]">
            <div className="nav-anim group border border-white/10 bg-zinc-950/40 backdrop-blur-md py-3 px-5 rounded-xl flex flex-col justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] select-none">
              <p className="font-black text-xs leading-none text-white group-hover:text-black transition-colors duration-300">
                Frontend
              </p>
              <p className="text-[16px] text-red-600 font-[1000] tracking-normal mt-1 group-hover:text-black transition-colors duration-300">
                Developer
              </p>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-10 xl:gap-16 items-center font-black text-[11px] text-zinc-300">
              {[
                ["Projects", "works"],
                ["Expertise", "expertise"],
                ["Testimonials", "testimonials"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scroll(id)}
                  className="nav-anim relative py-2 cursor-pointer transition-colors duration-300 hover:text-white group"
                >
                  {label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </button>
              ))}
            </div>
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

        <div className="red-belt absolute bottom-[18%] w-[120%] -rotate-2 z-30 bg-red-600 py-6 border-y-8 border-black shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap items-center gap-12 text-black font-[1000] italic text-lg uppercase"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <span>VUE</span>
                <PlusIcon />
                <span>FRAMER</span>
                <PlusIcon />
                <span>REACT EXPERT</span>
                <PlusIcon />
                <span>MOTION DESIGN</span>
                <PlusIcon />
                <span>NEXT.JS</span>
                <PlusIcon />
                <span>SEO SPECIALIST</span>
                <PlusIcon />
                <span>UI/UX</span>
                <PlusIcon />
                <span>FRONTEND</span>
                <PlusIcon />
              </span>
            ))}
          </motion.div>
        </div>
      </section>

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
              focus on performance, scalability, and solving the impossible
              bottlenecks.
              <br />
              <br />I turn technical debt into seamless digital assets that
              actually work for the business behind them. Most see a bug, I see
              a chance to build something better.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustStats.map((stat) => (
                <div
                  key={stat.label}
                  className="reveal-item border border-white/10 rounded-2xl p-5 bg-black/30"
                >
                  <p className="text-3xl font-[1000] italic text-red-600">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="reveal-section bg-[#050505] px-6 sm:px-10 lg:px-20 py-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="reveal-item text-[10px] tracking-[0.55em] uppercase text-zinc-500 mb-4">
                Skills / Expertise
              </p>
              <h2 className="reveal-item text-6xl md:text-[8vw] font-[1000] italic uppercase tracking-tighter leading-[0.9]">
                Built for
                <span className="text-red-600"> modern product teams.</span>
              </h2>
            </div>
            <div className="reveal-item max-w-xl text-zinc-400 text-lg leading-relaxed">
              Clear systems, premium interactions, and frontend architecture
              designed to convert attention into trust.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="reveal-item border border-white/10 rounded-3xl p-8 bg-zinc-950/40 backdrop-blur-sm"
              >
                <p className="text-[11px] tracking-[0.45em] uppercase text-zinc-500 mb-5">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 mt-6">
            <div className="reveal-item border border-white/10 rounded-3xl p-8 bg-black/40">
              <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 mb-4">
                Services
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service}
                    className="border border-white/10 rounded-2xl p-5 text-zinc-200 font-medium"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-item border border-red-600/30 rounded-3xl p-8 bg-red-600/10">
              <p className="text-[10px] tracking-[0.5em] uppercase text-red-300 mb-4">
                Availability
              </p>
              <h3 className="text-3xl font-[1000] italic uppercase mb-4">
                Open for select builds.
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Best fit for founders, product teams, and brands that need a
                premium frontend presence with measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="works"
        className="reveal-section min-h-screen bg-[#030303] px-6 sm:px-10 lg:px-16 py-32"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <h2 className="reveal-item text-7xl md:text-[10vw] font-[1000] italic uppercase tracking-tighter leading-[0.85]">
              Selected <span className="text-red-600">Works.</span>
            </h2>
            <p className="reveal-item max-w-xl text-zinc-400 text-lg leading-relaxed">
              Each project is structured as a case study preview with role,
              process, outcome, and a deeper breakdown available on demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {myProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                num={`0${index + 1}`}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="reveal-section bg-[#050505] px-6 sm:px-10 lg:px-20 py-28"
      >
        <div className="max-w-7xl mx-auto">
          <p className="reveal-item text-[10px] tracking-[0.55em] uppercase text-zinc-500 mb-4">
            Testimonials / Trust
          </p>
          <h2 className="reveal-item text-6xl md:text-[8vw] font-[1000] italic uppercase tracking-tighter leading-[0.9] mb-16">
            Built with
            <span className="text-red-600"> confidence.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((item) => (
              <div
                key={item.author}
                className="reveal-item border border-white/10 rounded-3xl p-8 bg-zinc-950/40"
              >
                <p className="text-2xl text-red-600 font-[1000] italic mb-6">
                  “
                </p>
                <p className="text-zinc-200 text-lg leading-relaxed mb-8">
                  {item.quote}
                </p>
                <div className="border-t border-white/10 pt-5">
                  <p className="font-bold uppercase tracking-[0.22em] text-sm">
                    {item.author}
                  </p>
                  <p className="text-zinc-500 text-sm mt-2">{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {trustStats.map((stat) => (
              <div
                key={`trust-${stat.label}`}
                className="reveal-item rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-4xl font-[1000] italic text-white">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500 mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="reveal-section min-h-screen bg-red-600 p-6 sm:p-10 relative overflow-hidden flex items-center"
      >
        <div className="absolute inset-0 opacity-10 font-[1000] text-[36vw] text-black italic select-none pointer-events-none leading-none flex items-center justify-center">
          HELLO
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <div className="reveal-item text-black">
            <p className="text-[10px] tracking-[0.55em] uppercase mb-4">
              Contact / Booking
            </p>
            <h2 className="text-6xl md:text-[8vw] font-[1000] italic uppercase leading-[0.9] mb-8">
              Let’s build
              <br />
              something sharp.
            </h2>
            <div className="space-y-5 max-w-lg">
              <p className="text-lg font-semibold text-black/80">
                Response window: within 24 hours
              </p>
              <p className="text-black/80 leading-relaxed">
                Share your goals, timeline, and budget range. I’ll review the
                brief and reply with the best next step for the project.
              </p>
              <div className="grid gap-3">
                <div className="bg-black text-white rounded-2xl px-5 py-4 font-bold uppercase tracking-[0.2em] text-sm">
                  Best for: brands, founders, product teams
                </div>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-black px-5 py-4 font-[1000] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
                >
                  Book Discovery Call
                </a>
                <a
                  href="https://wa.me/2349024233860"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-black px-5 py-4 font-[1000] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors"
                >
                  WhatsApp Direct Note
                </a>
              </div>
            </div>
          </div>

          <form className="reveal-item bg-black/90 border border-black/20 rounded-4xl p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <FormField
                label="Name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
              <FormField
                label="Email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                type="email"
              />
              <FormField
                label="Budget"
                name="budget"
                value={contactForm.budget}
                onChange={handleInputChange}
                placeholder="$1k - $3k"
              />
              <FormField
                label="Timeline"
                name="timeline"
                value={contactForm.timeline}
                onChange={handleInputChange}
                placeholder="2 - 6 weeks"
              />
            </div>

            <label className="block mb-6">
              <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3 block">
                Project details
              </span>
              <textarea
                name="details"
                value={contactForm.details}
                onChange={handleInputChange}
                placeholder="Tell me about the product, current problems, and what success looks like."
                rows="6"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-4 text-white outline-none focus:border-red-600 resize-none"
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Submitting opens your email client with the project brief
                pre-filled for a faster conversation.
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-black font-[1000] uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform"
              >
                Send Project Brief
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-12 px-6 sm:px-10 bg-[#030303]">
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

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ num, project, onOpen }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="reveal-item group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      <div className="relative aspect-video border border-white/5 group-hover:border-red-600 overflow-hidden transition-all duration-500 bg-zinc-900 mb-8 rounded-3xl">
        {project.video.endsWith(".mp4") ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <img
            src={project.video}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        )}
        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <span className="absolute top-8 left-8 text-7xl font-[1000] italic text-white/5 group-hover:text-red-600 transition-colors duration-500 z-10 select-none">
          {num}
        </span>
        <div className="absolute right-6 bottom-6 z-10 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white">
          View Case Study
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h3 className="text-3xl font-[1000] italic uppercase">
              {project.title}
            </h3>
            <p className="text-red-600 font-bold text-xs tracking-widest uppercase mt-2">
              {project.type}
            </p>
          </div>
          <div className="text-sm font-semibold text-zinc-400">
            {project.outcome}
          </div>
        </div>

        <p className="text-zinc-300 text-base leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">
              Case Study
            </p>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {project.caseStudy}
            </p>
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2">
              Review / {project.client}
            </p>
            <p className="text-white text-sm italic leading-relaxed">
              "{project.review}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-100 bg-black/75 backdrop-blur-md p-4 sm:p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-w-5xl mx-auto border border-white/10 rounded-4xl bg-[#0a0a0a] overflow-hidden"
      >
        <div className="relative aspect-16/8 bg-zinc-900">
          {project.video.endsWith(".mp4") ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
          ) : (
            <img
              src={project.video}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white"
          >
            Close
          </button>
          <div className="absolute left-6 right-6 bottom-6 sm:left-10 sm:right-10 sm:bottom-10">
            <p className="text-[10px] tracking-[0.45em] uppercase text-red-400 mb-3">
              Full Case Study
            </p>
            <h3 className="text-4xl sm:text-6xl font-[1000] italic uppercase leading-none">
              {project.title}
            </h3>
            <p className="text-zinc-300 mt-4 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <MetaCard label="Role" value={project.role} />
              <MetaCard label="Timeline" value={project.timeline} />
              <MetaCard label="Outcome" value={project.outcome} />
            </div>

            <div className="border border-white/10 rounded-3xl p-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3">
                Challenge
              </p>
              <ul className="space-y-3 text-zinc-300">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-red-600">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white/10 rounded-3xl p-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 rounded-3xl p-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3">
                Process
              </p>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-4 border-b border-white/5 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-red-600 font-[1000] italic text-lg">
                      0{index + 1}
                    </span>
                    <p className="text-zinc-300 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-red-600/20 bg-red-600/5 rounded-3xl p-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-red-300 mb-3">
                Results
              </p>
              <div className="grid gap-3">
                {project.results.map((result) => (
                  <div
                    key={result}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-zinc-100 font-medium"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-3xl p-6">
              <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3">
                Client Perspective
              </p>
              <p className="text-xl italic text-white leading-relaxed">
                "{project.review}"
              </p>
              <p className="text-zinc-500 mt-4">{project.client}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-[10px] tracking-[0.32em] uppercase text-zinc-500 mb-2">
        {label}
      </p>
      <p className="text-sm font-semibold text-zinc-100">{value}</p>
    </div>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3 block">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-4 text-white outline-none focus:border-red-600"
      />
    </label>
  );
}

function PlusIcon() {
  return (
    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
    </svg>
  );
}

export default App;
