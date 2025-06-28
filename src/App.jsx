import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import anujpalImg from './assets/anujpal.jpeg';

const projects = [
  {
    title: 'AI Chatbot',
    description: 'A conversational AI assistant built with React and Node.js.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio built with Vite and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A dashboard for managing e-commerce analytics and sales.',
    link: '#',
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-sans overflow-x-hidden">
      {/* Parallax background shapes */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-700/30 to-purple-700/10 rounded-full blur-3xl animate-bounce-slower" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-pink-500/20 to-blue-500/10 rounded-full blur-2xl animate-bounce-slow" />
      </div>
      <Navbar />
      <main className="flex flex-col gap-24 md:gap-32 pt-32 md:pt-40 pb-16 max-w-7xl mx-auto px-4">
        <section id="hero" className="flex flex-col md:flex-row items-center md:items-start gap-12 min-h-[80vh]">
          <div className="flex-1 flex flex-col justify-center items-start gap-6">
            <Hero />
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Animated Profile Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer animated ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20 blur-sm" />
              
              {/* Middle animated ring */}
              <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-reverse opacity-30 blur-sm" />
              
              {/* Inner animated ring */}
              <div className="absolute inset-4 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 rounded-full animate-pulse opacity-40" />
              
              {/* Profile image container */}
              <div className="absolute inset-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-inner">
                  <img 
                    src={anujpalImg} 
                    alt="Anuj Pal" 
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce-slow opacity-60" />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-80" />
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-80" />
            </div>
          </div>
        </section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      {/* Animations */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(.23,1.01,.32,1) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s infinite alternate cubic-bezier(.8,0,.2,1);
        }
        @keyframes bounceSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-30px); }
        }
        .animate-bounce-slower {
          animation: bounceSlower 5s infinite alternate cubic-bezier(.8,0,.2,1);
        }
        @keyframes bounceSlower {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50px); }
        }
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-reverse {
          animation: spinReverse 6s linear infinite;
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
