const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🟦', level: 'Beginner' },
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: '🔵' },
      { name: 'C++', icon: '💠' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'HTML', icon: '🌐' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Next.js', icon: '⏭️', level: 'Beginner' },
      { name: 'Redux', icon: '🔄' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Prisma', icon: '🔷', level: 'Beginner' },
      { name: 'ORM', icon: '🗄️', level: 'Beginner' },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', icon: '🔧' },
      { name: 'Serverless Backend (Cloudflare)', icon: '☁️', level: 'Beginner' },
      { name: 'Docker', icon: '🐳', level: 'Beginner' },
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'Problem Solving', icon: '🧠' },
      { name: 'Data Structures & Algorithms', icon: '📚' },
      { name: 'Web3', icon: '🌐', level: 'Beginner' },
    ],
  },
];

export default function About() {
  return (
    <div className="w-full animate-fade-in-up">
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Skills & Expertise</h3>
      
      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat, idx) => (
          <div key={cat.category} className="bg-slate-800/80 rounded-2xl shadow-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl shadow-lg">
                {cat.category === 'Programming Languages' && '💻'}
                {cat.category === 'Web Development' && '🌐'}
                {cat.category === 'Databases' && '🗄️'}
                {cat.category === 'Development Tools' && '🔧'}
                {cat.category === 'Other' && '✨'}
              </div>
              <h4 className="text-xl font-bold text-slate-100">{cat.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <span key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-700/70 rounded-full text-sm text-slate-100 shadow-sm border border-slate-600/50 hover:border-blue-400/50 transition-colors">
                  <span>{item.icon}</span> 
                  <span>{item.name}</span>
                  {item.level && <span className="ml-1 text-xs text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-full">({item.level})</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 