export default function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-4 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
      <div className="relative bg-slate-800/80 p-8 rounded-2xl shadow-xl">
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-bounce-slow" />
        <h3 className="text-3xl font-bold mb-4 relative z-10">Contact</h3>
        <form className="flex flex-col gap-4 relative z-10">
          <input type="text" placeholder="Your Name" className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows={4} className="p-3 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform">Send Message</button>
        </form>
      </div>
    </section>
  );
} 