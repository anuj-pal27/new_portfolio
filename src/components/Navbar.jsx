import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6">
      <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-slate-900/70 backdrop-blur-xl shadow-2xl border border-slate-700/40">
        <span className="text-xl font-extrabold text-blue-400 tracking-tight drop-shadow-lg mr-4">Anuj</span>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="text-slate-200 hover:text-blue-400 font-medium transition-colors duration-200 px-2">
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
} 