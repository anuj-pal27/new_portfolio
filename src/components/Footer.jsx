export default function Footer() {
  return (
    <footer className="relative text-center py-10 text-slate-300 bg-gradient-to-t from-slate-900/80 via-slate-800/60 to-transparent animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/anuj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
        </a>
        <a href="https://linkedin.com/in/anuj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        </a>
        <a href="mailto:anuj@email.com" className="hover:text-blue-400 transition-colors">
          <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14h24v-14l-12.01 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z"/></svg>
        </a>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Anuj Pal. All rights reserved.</div>
    </footer>
  );
} 