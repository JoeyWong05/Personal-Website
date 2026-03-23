import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, Mail, Calendar, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Research() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationStage(1), 50);
    setTimeout(() => setAnimationStage(2), 300);
    setTimeout(() => setAnimationStage(3), 600);
  }, []);

  const publications = [
    {
      title: "Preliminary Evaluations of LLM Models",
      venue: "Drive",
      year: 2025,
      link: "https://drive.google.com/drive/folders/1EzPiI7H5cQzNPV9nbpVPHRNdFua2qAq8?usp=drive_link"
    }
  ];

  const experience = [
    {
      role: "Undergraduate Researcher",
      group: "University of California, Berkeley — LLM Researcher @ DIAL",
      period: "June 2025 - Present",
      details: ""
    },
    {
      role: "Data Analyst",
      group: "Economic & Workforce Development Department of Los Angeles",
      period: "April 2024 - Aug 2024",
      details: ""
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className={`border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50 transition-all duration-800 ${
        animationStage >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden">
                <img
                  src="/baby_joey.jpg"
                  alt="Joey Wong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg font-semibold">
                  <Link to="/" className="relative inline-block text-white hover:text-blue-400 transition-colors duration-200 group cursor-pointer">
                    <span className="relative z-10">Joey Wong</span>
                    <span className="absolute inset-0 bg-blue-400/10 rounded px-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
                  </Link>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Software Engineer</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 sm:space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
                asChild
              >
                <a href="https://www.linkedin.com/in/joey-wong-7a572526a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
                asChild
              >
                <a href="https://github.com/JoeyWong05" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
                asChild
              >
                <a href="https://leetcode.com/u/jwong05/" target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
                asChild
              >
                <Link to="/contact">
                  <Mail className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white p-2"
                asChild
              >
                <a href="https://calendly.com/jwxng" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className={`transition-all duration-1000 ${animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className={`text-base sm:text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${
            animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>Experience</h2>
          <p className={`text-gray-400 text-xs sm:text-lg mb-8 transition-all duration-1000 delay-200 ${
            animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>Research and professional experience — a collection of my projects, and applied work.</p>

          <section className={`mb-8`}>
            <div className="space-y-3">
              {experience.map((exp, i) => (
                <div key={i} className="bg-card p-4 rounded-md border border-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-white font-medium">{exp.role}</div>
                      <div className="text-gray-400 text-sm">{exp.group}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{exp.period}</div>
                  </div>
                  <p className="text-gray-300 mt-2 text-sm">{exp.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm sm:text-lg font-semibold text-white mb-2">Research</h3>
            <div className="space-y-2">
              {publications.map((p, i) => (
                <div key={i} className="flex items-center justify-between bg-card p-3 rounded-md border border-gray-800">
                  <div>
                    <div className="text-white font-medium">{p.title}</div>
                    <div className="text-gray-400 text-sm">{p.venue} • {p.year}</div>
                  </div>
                  <div>
                    <a href={p.link} className="text-blue-400 hover:text-blue-300 text-sm">View</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
