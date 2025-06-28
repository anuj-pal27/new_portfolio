export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl animate-bounce-slow" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-bounce-slower" />
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up drop-shadow-lg">Anuj Pal</h1>
      <h2 className="text-2xl md:text-3xl font-light mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>Full Stack Web Developer</h2>
      <p className="max-w-xl mx-auto text-lg text-slate-300 mb-8 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
        I build intelligent, scalable, and beautiful web applications. Let's create something amazing together.
      </p>
      <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg text-lg font-semibold hover:scale-105 transition-transform">Contact Me</a>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          {/* GitHub */}
          <a 
            href="https://github.com/anuj-pal27" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-600/50 hover:border-blue-400/50"
            title="GitHub"
          >
            <svg className="w-6 h-6 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/anuj-pal-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-600/50 hover:border-blue-400/50"
            title="LinkedIn"
          >
            <svg className="w-6 h-6 text-slate-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:anujpal27669@gmail.com"
            className="w-12 h-12 bg-slate-800/80 rounded-full flex items-center justify-center hover:bg-slate-700 hover:scale-110 transition-all duration-300 border border-slate-600/50 hover:border-blue-400/50"
            title="Email"
          >
            <svg className="w-6 h-6 text-slate-300 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 