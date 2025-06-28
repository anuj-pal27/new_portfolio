import { useState } from 'react';

const experience = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Writecream AI',
    location: 'Remote',
    date: 'Feb 2025 – Present',
    duration: '3+ months',
    type: 'Internship',
    logo: '🤖',
    color: 'from-blue-500 to-purple-500',
    details: [
      'Developed a full-fledged PDF Editor Tool using HTML, CSS, and JavaScript, enabling users to upload, edit, annotate, and download PDF files directly in the browser.',
      'Built an AI Image Unblur Website leveraging AI APIs to restore clarity to blurred images with a clean and responsive UI.',
      'Created an AI Grading Image Website that processes uploaded images using APIs and displays grading results dynamically.',
      'Gained hands-on experience in front-end development, API integration, and deploying real-world web applications.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI APIs', 'PDF.js', 'React'],
    achievements: [
      'Successfully deployed 3 production-ready web applications',
      'Improved user experience with responsive design principles',
      'Integrated multiple AI APIs for enhanced functionality'
    ]
  }
];

export default function Experience() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Work Experience</h3>
      
      {/* Timeline View */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden lg:block" />
        
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg hidden lg:block z-10" />
              
              {/* Experience Card */}
              <div 
                className={`relative bg-slate-800/80 rounded-2xl shadow-xl p-6 ml-0 lg:ml-16 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-slate-700/50 hover:border-blue-500/50 ${
                  activeCard === idx ? 'ring-2 ring-blue-500/50' : ''
                }`}
                onClick={() => setActiveCard(idx)}
              >
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl`} />
                
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {exp.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold text-slate-100">{exp.title}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Internship' ? 'bg-blue-500/20 text-blue-300' :
                        exp.type === 'Freelance' ? 'bg-green-500/20 text-green-300' :
                        'bg-pink-500/20 text-pink-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-blue-300 font-medium">{exp.company}</div>
                    <div className="text-slate-400 text-sm flex items-center gap-4">
                      <span>📍 {exp.location}</span>
                      <span>📅 {exp.date}</span>
                      <span>⏱️ {exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-xs font-medium border border-slate-600/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="mb-4">
                  <div className="text-sm text-slate-400 mb-2">Key Responsibilities:</div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-slate-200 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                  <div className="text-sm text-slate-400 mb-2 flex items-center gap-2">
                    <span>🏆</span>
                    Key Achievements:
                  </div>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-200 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-friendly alternative view */}
      <div className="lg:hidden mt-8">
        <div className="grid gap-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-2xl shadow-xl p-6 border border-slate-700/50">
              <div className={`w-full h-1 bg-gradient-to-r ${exp.color} rounded-t-2xl mb-4`} />
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center text-xl`}>
                  {exp.logo}
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">{exp.title}</h4>
                  <div className="text-blue-300 text-sm">{exp.company}</div>
                </div>
              </div>
              <div className="text-slate-400 text-sm mb-3">{exp.date} • {exp.location}</div>
              <div className="space-y-2">
                {exp.details.slice(0, 2).map((detail, i) => (
                  <p key={i} className="text-slate-200 text-sm">• {detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 