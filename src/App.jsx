import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { m, AnimatePresence } from 'framer-motion';

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Cpu,
  Code2,
  Database,
  Wrench,
  Brain,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Globe,
  Layers,
} from 'lucide-react';

// --- IMAGE IMPORTS (Uncomment these in your local environment) ---
/*
import airlistingImg1 from './assets/airlisting-1.png';
import airlistingImg2 from './assets/airlisting-2.png';
// ... import other images here
*/

// --- MOCK IMAGES (For Preview Purposes - Replace with imports above) ---
const airlistingImg1 = 'https://placehold.co/600x400/0f172a/06b6d4?text=AirListing+1';
const airlistingImg2 = 'https://placehold.co/600x400/0f172a/06b6d4?text=AirListing+2';
const trackdetectImg1 = 'https://placehold.co/600x400/0f172a/ec4899?text=Track+Detect';
const pdfeditorImg1 = 'https://placehold.co/600x400/0f172a/22c55e?text=PDF+Editor';

// --- GSAP LOADER HELPER ---
const useGSAP = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      setLoaded(true);
      return;
    }

    const scriptGsap = document.createElement('script');
    scriptGsap.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    scriptGsap.async = true;

    const scriptScroll = document.createElement('script');
    scriptScroll.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    scriptScroll.async = true;

    scriptGsap.onload = () => document.body.appendChild(scriptScroll);
    scriptScroll.onload = () => {
      window.gsap.registerPlugin(window.ScrollTrigger);
      setLoaded(true);
    };

    document.body.appendChild(scriptGsap);
  }, []);

  return loaded;
};

// --- DATA ---
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projects = [
  {
    title: 'Hotel Booking Website',
    description: 'Full-stack app like Airbnb. Secure auth, error handling, deployed on Render.',
    tags: ['Full Stack', 'Node.js', 'React', 'MongoDB'],
    link: 'https://airlisting.onrender.com/listings',
    github: 'https://github.com/anuj-pal27/airlisting.git',
    accent: 'border-blue-500 shadow-blue-500/50',
    icon: <Globe className="text-blue-400" />,
    details: [
      'Users can browse/book hotels or create listings.',
      'Secure authentication & authorization.',
      'Custom error handling & validation.',
      'Deployed on Render.',
    ],
    screenshots: [airlistingImg1, airlistingImg2],
  },
  {
    title: 'Rail Track Crack Detection',
    description: 'ML system using TensorFlow.js & Teachable Machine to detect track anomalies.',
    tags: ['ML', 'TensorFlow.js', 'Teachable Machine'],
    link: 'https://track-checking.vercel.app/',
    github: 'https://github.com/anuj-pal27/track_checking.git',
    accent: 'border-pink-500 shadow-pink-500/50',
    icon: <Cpu className="text-pink-400" />,
    details: ['Analyzes track images for cracks.', 'Custom-trained ML model.', 'Real-time web integration.'],
    screenshots: [trackdetectImg1],
  },
  {
    title: 'PDF Editor Tool',
    description: 'Browser-based PDF editor with annotation, text editing, and canvas rendering.',
    tags: ['PDF', 'JavaScript', 'Fabric.js'],
    link: 'https://full-pdf-editor.vercel.app/',
    github: '#',
    accent: 'border-green-500 shadow-green-500/50',
    icon: <Layers className="text-green-400" />,
    details: ['Edit text, add images/links.', 'Draw signatures & annotate.', 'Canvas-based rendering.'],
    screenshots: [pdfeditorImg1],
  },
  {
    title: 'AI Image Unblur',
    description: 'Restores clarity to blurred images using advanced AI APIs.',
    tags: ['AI', 'Image Processing'],
    link: '#',
    github: '#',
    accent: 'border-yellow-500 shadow-yellow-500/50',
    icon: <Maximize2 className="text-yellow-400" />,
    details: ['Uses AI APIs for restoration.', 'Responsive UI.'],
    screenshots: [],
  },
  {
    title: 'PDF Chatbot Application',
    description: 'Chat with PDFs using LangChain, LLMs, FastAPI, and React.',
    tags: ['LLM', 'LangChain', 'FastAPI'],
    link: '#',
    github: 'https://github.com/anuj-pal27/python-pdf-ai.git',
    accent: 'border-purple-500 shadow-purple-500/50',
    icon: <Brain className="text-purple-400" />,
    details: ['Context-aware PDF chatting.', 'LLM orchestration.'],
    screenshots: [],
  },
];

const experience = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Writecream AI',
    location: 'Remote',
    date: 'Feb 2025 – Present',
    duration: '3+ months',
    type: 'Internship',
    details: [
      'Developed a full-fledged PDF Editor Tool using HTML, CSS, JS.',
      'Built an AI Image Unblur Website leveraging AI APIs.',
      'Created an AI Grading Image Website for dynamic results.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI APIs', 'React'],
  },
];

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'], icon: <Code2 /> },
  { category: 'Web Dev', items: ['React', 'Node.js', 'Next.js', 'Tailwind'], icon: <Globe /> },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Prisma'], icon: <Database /> },
  { category: 'Tools', items: ['Git', 'Docker', 'Linux'], icon: <Wrench /> },
];

// --- COMPONENTS ---

// 0. CUSTOM CODING CURSOR (GSAP)
const CodingCursor = ({ gsapLoaded }) => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (!gsapLoaded) return;
    if (!window.gsap) return;
    if (!cursorRef.current || !followerRef.current) return;

    // Hide default cursor
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';

    const interactive = document.querySelectorAll('a, button, input, textarea, .cursor-pointer, .group');
    const prevInteractiveCursors = new Map();
    interactive.forEach((el) => {
      prevInteractiveCursors.set(el, el.style.cursor);
      el.style.cursor = 'none';
    });

    // Quick setters for performance
    const xTo = window.gsap.quickTo(cursorRef.current, 'x', { duration: 0.1, ease: 'power3' });
    const yTo = window.gsap.quickTo(cursorRef.current, 'y', { duration: 0.1, ease: 'power3' });
    const xToFollower = window.gsap.quickTo(followerRef.current, 'x', { duration: 0.6, ease: 'power2' });
    const yToFollower = window.gsap.quickTo(followerRef.current, 'y', { duration: 0.6, ease: 'power2' });

    const onMouseMove = (e) => {
      // Move crosshair
      xTo(e.clientX);
      yTo(e.clientY);

      // Move lagging terminal label
      xToFollower(e.clientX);
      yToFollower(e.clientY);

      // Update coordinates
      if (textRef.current) {
        textRef.current.innerText = `X:${e.clientX.toString().padStart(4, '0')} Y:${e.clientY.toString().padStart(4, '0')}`;
      }
    };

    const onHoverStart = () => {
      window.gsap.to(cursorRef.current, { scale: 1.5, borderColor: '#22d3ee', backgroundColor: 'rgba(34, 211, 238, 0.1)' });
      if (textRef.current) textRef.current.style.opacity = '0';
    };

    const onHoverEnd = () => {
      window.gsap.to(cursorRef.current, { scale: 1, borderColor: '#06b6d4', backgroundColor: 'transparent' });
      if (textRef.current) textRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove);

    // Add hover effects for interactive elements
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.style.cursor = prevCursor;
      prevInteractiveCursors.forEach((value, el) => {
        el.style.cursor = value;
      });
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, [gsapLoaded]);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Main Crosshair */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-6 h-6 border border-cyan-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="w-[2px] h-full bg-cyan-500/50 absolute" />
        <div className="h-[2px] w-full bg-cyan-500/50 absolute" />
      </div>

      {/* Trailing Coding Info */}
      <div ref={followerRef} className="fixed top-0 left-0 z-[9998] pointer-events-none flex flex-col gap-1 items-start pl-8 pt-8">
        <div className="bg-black/80 border border-cyan-900/50 px-2 py-1 text-[10px] font-mono text-cyan-500 backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">
          <span ref={textRef}>INIT...</span>
        </div>
        <div className="text-[9px] font-mono text-cyan-700/80 typing-effect">&lt;sys_view /&gt;</div>
      </div>
    </>
  );
};

// 1. NAVBAR (Cyber Style)
const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-900/50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-cyan-500 font-mono font-bold text-xl group cursor-none">
        <Terminal size={20} />
        <span className="animate-pulse">&lt;Anuj_Pal /&gt;</span>
      </div>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-400 font-mono text-sm hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all px-2 py-1 rounded cursor-none"
          >
            // {link.name}
          </a>
        ))}
      </div>
      {/* Mobile Menu Icon Placeholder */}
      <div className="md:hidden text-cyan-500">
        <Terminal size={24} />
      </div>
    </div>
  </nav>
);

// 2. HERO (Cyber Style)
const Hero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!window.gsap) return;
    const ctx = window.gsap.context(() => {
      window.gsap.from('.hero-line', { x: -50, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' });
      window.gsap.to('.grid-bg', { backgroundPosition: '0 100%', duration: 20, repeat: -1, ease: 'linear' });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-mono pt-16">
      {/* Animated Grid Background */}
      <div className="grid-bg absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="z-10 text-center max-w-4xl px-4">
        <p className="hero-line text-cyan-500 mb-4 tracking-widest text-sm">SYSTEM.INIT(USER: 'VISITOR');</p>

        <h1 className="hero-line text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter mix-blend-screen shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          Anuj <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Pal</span>
        </h1>

        <h2 className="hero-line text-xl md:text-3xl text-gray-300 font-bold mb-8 flex items-center justify-center gap-3">
          <span className="text-green-500">&gt;</span> Full_Stack_Developer <span className="animate-blink">_</span>
        </h2>

        <p className="hero-line text-gray-400 max-w-xl mx-auto text-lg leading-relaxed mb-10 border-l-2 border-cyan-500 pl-4 text-left bg-cyan-950/10 p-4 rounded-r-lg">
          Constructing intelligent digital architecture. I build scalable web applications with React, Node.js, and modern AI integrations.
        </p>

        <div className="hero-line flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-900/30 border border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all uppercase tracking-wide cursor-none"
          >
            View_Protocols
          </a>

          <div className="flex gap-4">
            <SocialBtn href="https://github.com/anuj-pal27" icon={<Github size={20} />} />
            <SocialBtn href="https://linkedin.com/in/anuj-pal-dev" icon={<Linkedin size={20} />} />
            <SocialBtn href="mailto:anujpal27669@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center border border-gray-700 bg-gray-900 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition-all rounded-sm cursor-none"
  >
    {icon}
  </a>
);

// 3. ABOUT & SKILLS (Cyber Style)
const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="System_Stats" subtitle="Skills & Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-gray-800 p-6 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all group cursor-none"
            >
              <div className="flex items-center gap-3 mb-6 text-cyan-500 group-hover:text-cyan-300">
                {skillGroup.icon}
                <h3 className="font-mono font-bold text-lg">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="text-xs font-mono px-2 py-1 bg-black border border-gray-700 text-gray-300 rounded-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="h-1 w-full bg-gray-800 mt-4 overflow-hidden">
                <div className="h-full bg-cyan-500/50 w-[75%] group-hover:w-full transition-all duration-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. EXPERIENCE (Cyber Circuit Style)
const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Execution_Logs" subtitle="Work History" />

        <div className="mt-16 relative border-l-2 border-gray-800 ml-4 md:ml-0 space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Circuit Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />

              <div className="bg-gray-900/30 border border-gray-800 p-6 md:p-8 hover:border-cyan-500/30 transition-all relative overflow-hidden group cursor-none">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-800 group-hover:border-cyan-500 transition-colors" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                    <p className="text-cyan-600 font-mono text-sm mt-1">@{exp.company}</p>
                  </div>
                  <div className="text-gray-500 font-mono text-xs border border-gray-800 px-3 py-1 bg-black">[{exp.date}]</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">»</span> {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-green-400 font-mono bg-green-900/10 px-2 py-1 rounded-sm border border-green-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. PROJECTS (Cyber Grid & Modal)
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [screenshotModal, setScreenshotModal] = useState({ isOpen: false, images: [], currentIndex: 0 });

  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Deployed_Units" subtitle="Featured Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, idx) => (
            <m.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`bg-gray-900/40 border border-gray-800 hover:${project.accent} group cursor-none transition-all duration-300 flex flex-col`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[200%] w-full animate-scan pointer-events-none" />

                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-black border border-gray-700 rounded-sm group-hover:border-white transition-colors">{project.icon}</div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-gray-200 mb-2 font-mono group-hover:text-cyan-400">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 p-3 border-t border-gray-800 flex justify-between items-center text-xs font-mono text-cyan-600">
                <span>STATUS: ONLINE</span>
                <span>ID: P-{idx + 10}</span>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-none"
            onClick={() => setSelectedProject(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-cyan-500 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(6,182,212,0.2)] cursor-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-cyan-500" />
                  <span className="text-cyan-500 font-mono text-sm">
                    ROOT/PROJECTS/{selectedProject.title.toUpperCase().replace(/\s/g, '_')}
                  </span>
                </div>
                <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-red-500 cursor-none">
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-400 mb-6">{selectedProject.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-mono text-cyan-500 mb-3 border-b border-gray-800 pb-1">SYSTEM_SPECS:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-900 text-green-400 text-xs font-mono border border-gray-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-mono text-cyan-500 mb-3 border-b border-gray-800 pb-1">PROTOCOL_DETAILS:</h4>
                      <ul className="space-y-2">
                        {selectedProject.details.map((detail, i) => (
                          <li key={i} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-cyan-500">➜</span> {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 mt-8">
                      {selectedProject.link !== '#' && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 text-black py-3 font-bold hover:bg-cyan-500 transition-colors cursor-none"
                        >
                          <ExternalLink size={18} /> LIVE DEMO
                        </a>
                      )}
                      {selectedProject.github !== '#' && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 border border-gray-600 text-gray-300 py-3 hover:border-white hover:text-white transition-colors cursor-none"
                        >
                          <Github size={18} /> CODE
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Screenshots */}
                  {selectedProject.screenshots.length > 0 && (
                    <div className="w-full md:w-1/3 space-y-4">
                      <h4 className="text-sm font-mono text-cyan-500 border-b border-gray-800 pb-1">VISUAL_FEED:</h4>
                      {selectedProject.screenshots.map((shot, i) => (
                        <div
                          key={i}
                          className="relative group cursor-none border border-gray-800 hover:border-cyan-500 overflow-hidden"
                          onClick={() => setScreenshotModal({ isOpen: true, images: selectedProject.screenshots, currentIndex: i })}
                        >
                          <img src={shot} alt="preview" className="w-full h-32 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                            <Maximize2 size={20} className="text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* SCREENSHOT FULLSCREEN MODAL */}
      <AnimatePresence>
        {screenshotModal.isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-none"
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-none"
              onClick={() => setScreenshotModal({ ...screenshotModal, isOpen: false })}
            >
              <X size={32} />
            </button>

            <img
              src={screenshotModal.images[screenshotModal.currentIndex]}
              alt="Fullscreen"
              className="max-w-full max-h-[90vh] border-2 border-cyan-900 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            />

            {screenshotModal.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 text-white bg-black/50 p-2 rounded-full hover:bg-cyan-500/20 cursor-none"
                  onClick={() =>
                    setScreenshotModal((prev) => ({
                      ...prev,
                      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
                    }))
                  }
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  className="absolute right-4 text-white bg-black/50 p-2 rounded-full hover:bg-cyan-500/20 cursor-none"
                  onClick={() =>
                    setScreenshotModal((prev) => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }))
                  }
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// 6. CONTACT FORM (Cyber Style)
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle title="Comm_Channel" subtitle="Initialize Contact" />

        <div className="mt-12 bg-gray-900/30 p-8 border border-gray-800 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-cyan-500 font-mono text-xs">USER_ID:</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-black border border-gray-700 p-3 text-gray-300 focus:border-cyan-500 focus:outline-none transition-colors cursor-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-cyan-500 font-mono text-xs">CONTACT_ADDR:</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-black border border-gray-700 p-3 text-gray-300 focus:border-cyan-500 focus:outline-none transition-colors cursor-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-cyan-500 font-mono text-xs">PAYLOAD_DATA:</label>
              <textarea
                rows={5}
                placeholder="Message..."
                className="w-full bg-black border border-gray-700 p-3 text-gray-300 focus:border-cyan-500 focus:outline-none transition-colors cursor-none"
              />
            </div>
            <button className="w-full py-4 bg-cyan-900/20 border border-cyan-500 text-cyan-500 font-bold hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest flex items-center justify-center gap-2 group cursor-none">
              <Terminal size={18} /> Transmit_Data <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// 7. FOOTER
const Footer = () => (
  <footer className="py-8 bg-black border-t border-gray-900 text-center">
    <div className="text-gray-500 font-mono text-xs">
      <p>
        &copy; {new Date().getFullYear()} Anuj Pal. SYSTEM STATUS: <span className="text-green-500">STABLE</span>
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-cyan-500 transition-colors cursor-none">
          GITHUB
        </a>
        <a href="#" className="hover:text-cyan-500 transition-colors cursor-none">
          LINKEDIN
        </a>
        <a href="#" className="hover:text-cyan-500 transition-colors cursor-none">
          EMAIL
        </a>
      </div>
    </div>
  </footer>
);

// HELPER: Section Title
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="font-mono text-cyan-500 text-sm mb-2 opacity-80">{`// ${title}`}</h2>
    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">{subtitle}</h3>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const gsapLoaded = useGSAP();

  if (!gsapLoaded) return <div className="h-screen w-full bg-black text-cyan-500 flex items-center justify-center font-mono">INITIALIZING SYSTEM...</div>;

  return (
    <div className="bg-black text-gray-200 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-100 font-sans cursor-none">
      <CodingCursor gsapLoaded={gsapLoaded} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* GLOBAL STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
