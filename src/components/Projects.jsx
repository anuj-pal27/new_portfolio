import { useState } from 'react';
import airlistingImg1 from '../assets/airlisting-1.png';
import airlistingImg2 from '../assets/airlisting-2.png';
import airlistingImg3 from '../assets/airlisting-3.png';
import airlistingImg4 from '../assets/airlisting-4.png';
import trackdetectImg1 from '../assets/trackdetect.png';
import trackdetectImg2 from '../assets/trackdetect-2.png';
import pdfeditorImg1 from '../assets/pdfeditor.png';
import pdfeditorImg2 from '../assets/pdfeditor-2.png';
import pdfeditorImg3 from '../assets/pdfeditor-3.png';
import pdfeditorImg4 from '../assets/pdfeditor-4.png';
import pdfeditorImg5 from '../assets/pdfeditor-5.png';

const projects = [
  {
    title: 'Hotel Booking Website',
    description: 'A full-stack web app like Airbnb for browsing, creating, and booking hotel listings. Features secure auth, error handling, and is deployed on Render.',
    tags: ['Full Stack', 'Node.js', 'React', 'MongoDB'],
    link: 'https://airlisting.onrender.com/listings',
    github: 'https://github.com/anuj-pal27/airlisting.git',
    accent: 'from-blue-500 to-purple-500',
    image: '🌐',
    details: [
      'Users can browse and book hotels, or create their own listings.',
      'Secure authentication and authorization.',
      'Custom error handling and request validation.',
      'Deployed on Render for seamless access.'
    ],
    screenshots: [airlistingImg1, airlistingImg2, airlistingImg3, airlistingImg4]
  },
  {
    title: 'Rail Track Crack Detection',
    description: 'ML-powered system for detecting cracks in rail tracks using Google Teachable Machine and TensorFlow.js. Real-time web integration.',
    tags: ['ML', 'TensorFlow.js', 'Teachable Machine'],
    link: 'https://track-checking.vercel.app/',
    github: 'https://github.com/anuj-pal27/track_checking.git',
    accent: 'from-pink-500 to-blue-400',
    image: '🚄',
    details: [
      'Analyzes track images for cracks and anomalies.',
      'Uses a custom-trained ML model.',
      'Real-time web integration for instant feedback.'
    ],
    screenshots: [trackdetectImg1, trackdetectImg2]
  },
  {
    title: 'PDF Editor Tool',
    description: 'Web-based PDF editor with text/image editing, annotation, and canvas-based rendering. Built with pdf-lib and Fabric.js.',
    tags: ['PDF', 'JavaScript', 'Fabric.js'],
    link: 'https://full-pdf-editor.vercel.app/',
    github: '#',
    accent: 'from-green-500 to-blue-500',
    image: '📄',
    details: [
      'Edit existing text, add new text/images/links.',
      'Draw signatures, annotate, and add form elements.',
      'Canvas-based rendering for interactive editing.'
    ],
    screenshots: [pdfeditorImg1, pdfeditorImg2, pdfeditorImg3, pdfeditorImg4, pdfeditorImg5]
  },
  {
    title: 'AI Image Unblur',
    description: 'Website leveraging AI APIs to restore clarity to blurred images. Clean, responsive UI.',
    tags: ['AI', 'Image Processing'],
    link: '#',
    github: '#',
    accent: 'from-yellow-400 to-pink-500',
    image: '🖼️',
    details: [
      'Uses AI APIs to restore image clarity.',
      'Responsive and user-friendly interface.'
    ],
    screenshots: []
  },
  {
    title: 'AI Grading Image Website',
    description: 'Processes uploaded images using APIs and displays grading results dynamically.',
    tags: ['AI', 'API', 'Frontend'],
    link: '#',
    github: '#',
    accent: 'from-blue-400 to-green-400',
    image: '📝',
    details: [
      'Uploads images and grades them using APIs.',
      'Dynamic result display.'
    ],
    screenshots: []
  },
  {
    title: 'PDF Chatbot Application',
    description: 'Chat with your PDFs using LangChain, LLMs (Groq, OpenAI, Hugging Face), FastAPI, and React. Upload PDFs and interact via chat.',
    tags: ['LLM', 'LangChain', 'FastAPI', 'React'],
    link: '#',
    github: 'https://github.com/anuj-pal27/python-pdf-ai.git',
    accent: 'from-purple-500 to-pink-500',
    image: '🤖',
    details: [
      'Upload PDFs and interact with their content via chat.',
      'Uses LangChain for context management and LLM orchestration.',
      'Frontend in React, backend in FastAPI.'
    ],
    screenshots: []
  },
];

export default function Projects() {
  const [modal, setModal] = useState(null);
  const [screenshotModal, setScreenshotModal] = useState({ isOpen: false, images: [], currentIndex: 0 });

  const openScreenshotModal = (images, index = 0) => {
    setScreenshotModal({ isOpen: true, images, currentIndex: index });
  };

  const closeScreenshotModal = () => {
    setScreenshotModal({ isOpen: false, images: [], currentIndex: 0 });
  };

  const nextScreenshot = () => {
    setScreenshotModal(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevScreenshot = () => {
    setScreenshotModal(prev => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }));
  };

  return (
    <div className="w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-400">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group rounded-2xl shadow-2xl bg-slate-800/80 overflow-hidden flex flex-col h-full hover:scale-[1.03] transition-transform duration-300 cursor-pointer" onClick={() => setModal(idx)}>
            {/* Accent bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
            <div className="flex-1 flex flex-col p-6 gap-3">
              <div className="text-4xl mb-2">{project.image}</div>
              <h4 className="text-xl font-semibold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h4>
              <p className="text-slate-300 text-sm mb-2 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              {project.screenshots.length > 0 && (
                <img 
                  src={project.screenshots[0]} 
                  alt="preview" 
                  className="rounded-lg shadow w-full h-32 object-cover mb-2 border border-slate-700 cursor-pointer hover:opacity-80 transition-opacity" 
                  onClick={(e) => {
                    e.stopPropagation();
                    openScreenshotModal(project.screenshots, 0);
                  }}
                />
              )}
              <span className="mt-auto inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform">View Details</span>
            </div>
          </div>
        ))}
      </div>
      {/* Project Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in-up">
            <button className="absolute top-4 right-4 text-slate-400 hover:text-blue-400 text-2xl" onClick={() => setModal(null)}>&times;</button>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{projects[modal].image}</span>
              <div>
                <h4 className="text-2xl font-bold text-slate-100 mb-1">{projects[modal].title}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[modal].tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {projects[modal].link !== '#' && (
                    <a 
                      href={projects[modal].link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {projects[modal].github !== '#' && (
                    <a 
                      href={projects[modal].github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-300 hover:underline text-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-4">{projects[modal].description}</p>
            <ul className="list-disc pl-5 text-slate-200 text-sm space-y-1 mb-4">
              {projects[modal].details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {projects[modal].screenshots.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {projects[modal].screenshots.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="screenshot" 
                    className="rounded-lg shadow w-48 h-28 object-cover cursor-pointer hover:opacity-80 transition-opacity" 
                    onClick={() => openScreenshotModal(projects[modal].screenshots, i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {/* Screenshot Modal */}
      {screenshotModal.isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-blue-400 text-3xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center" 
              onClick={closeScreenshotModal}
            >
              &times;
            </button>
            
            {/* Navigation buttons */}
            {screenshotModal.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 text-2xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center" 
                  onClick={prevScreenshot}
                >
                  ‹
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 text-2xl z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center" 
                  onClick={nextScreenshot}
                >
                  ›
                </button>
              </>
            )}
            
            {/* Image counter */}
            {screenshotModal.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {screenshotModal.currentIndex + 1} / {screenshotModal.images.length}
              </div>
            )}
            
            {/* Main image */}
            <img 
              src={screenshotModal.images[screenshotModal.currentIndex]} 
              alt="screenshot" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </div>
  );
} 