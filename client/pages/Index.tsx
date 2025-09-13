import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, Download, Star, GitFork, Calendar, Code } from "lucide-react";
import GitHubCalendar from 'react-github-calendar';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [githubError, setGithubError] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Show loading for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start showing content after fade out begins
      setTimeout(() => {
        setShowContent(true);
        // Start entrance animations
        setTimeout(() => setAnimationStage(1), 100);
        setTimeout(() => setAnimationStage(2), 400);
        setTimeout(() => setAnimationStage(3), 700);
        setTimeout(() => setAnimationStage(4), 1000);
      }, 200);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "ML Economics Platform",
      description: "Comprehensive platform for conducting ML experiments with automated hyperparameter tuning and result visualization.",
      tech: ["Python", "TensorFlow", "React"],
      stars: 247,
      forks: 89
    },
    {
      title: "Economic Data Dashboard",
      description: "Real-time economic indicator dashboard with predictive modeling capabilities for market trend analysis.",
      tech: ["R", "Shiny", "D3.js"],
      stars: 156,
      forks: 43
    },
    {
      title: "Digital Humanities Archive",
      description: "Interactive platform for exploring historical texts using NLP and network analysis visualization.",
      tech: ["TypeScript", "Next.js", "spaCy"],
      stars: 89,
      forks: 22
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image with Pulse Animation */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden animate-pulse">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2F2fa1f02715294b97ba609e6e63506c47?format=webp&width=800"
                alt="Joey Wong"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
            <div className="absolute inset-0 rounded-full border border-blue-400 animate-pulse opacity-50"></div>
          </div>

          {/* Loading Text */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Joey Wong
            </h1>
            <p className="text-gray-400">
              Computer Science + Economics
            </p>
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
      {/* Header */}
      <header className={`border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50 transition-all duration-800 ${
        animationStage >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Left: Profile */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2F2fa1f02715294b97ba609e6e63506c47?format=webp&width=800"
                  alt="Joey Wong"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg font-semibold">
                  <Link
                    to="/"
                    className="relative inline-block text-white hover:text-blue-400 transition-colors duration-200 group cursor-pointer"
                  >
                    <span className="relative z-10">Joey Wong</span>
                    <span className="absolute inset-0 bg-blue-400/10 rounded px-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
                  </Link>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Computer Science + Economics</p>
              </div>
            </div>

            {/* Right: Social Icons */}
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
        {/* About Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className={`text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 transition-all duration-1000 ${
            animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>TL;DR</h2>
          <div className={`space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${
            animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p>
              Currently I am...{" "}
              <Link
                to="/education"
                className="relative inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 group cursor-pointer"
              >
                <span className="relative z-10">studying</span>
                <span className="absolute inset-0 bg-blue-400/10 rounded px-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
              </Link>
              {" "}Computer Science & Economics (and minoring in Digital Humanities),{" "}
              <Link
                to="/research"
                className="relative inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 group cursor-pointer"
              >
                <span className="relative z-10">researching</span>
                <span className="absolute inset-0 bg-blue-400/10 rounded px-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
              </Link> ML applications in economics,{" "}
              <Link
                to="/projects"
                className="relative inline-block text-blue-400 hover:text-blue-300 transition-colors duration-200 group cursor-pointer"
              >
                <span className="relative z-10">building</span>
                <span className="absolute inset-0 bg-blue-400/10 rounded px-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 origin-center"></span>
              </Link>
              {" "}full-stack applications.
            </p>
            <p>
              Not so currently, I am... learning about financial investment and studying for the GRE.
            </p>
          </div>

          {/* Documents */}
          <div className={`flex flex-col sm:flex-row gap-3 mb-12 sm:mb-16 transition-all duration-800 delay-500 ${
            animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-center space-x-2 transition-all duration-200 text-sm border border-gray-700 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://docs.google.com/document/d/1_A_lbQgX3O3_x2a_6ItnpYJjKiHdu0GX4H6iQ4x1ABU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </Button>
            <Button
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-center space-x-2 transition-all duration-200 text-sm border border-gray-700 shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://calendly.com/jwxng" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                <span>Book Meeting</span>
              </a>
            </Button>
          </div>

          {/* GitHub Activity */}
          <div className={`mb-16 transition-all duration-1000 delay-700 ${
            animationStage >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base sm:text-xl font-semibold flex items-center text-gray-300">
                <Github className="w-5 h-5 mr-3" />
                JoeyWong05
              </h3>
              <span className="text-xs sm:text-sm text-gray-500">GitHub Contributions</span>
            </div>
            <div className="overflow-x-auto">
              {!githubError ? (
                <GitHubCalendar
                  username="JoeyWong05"
                  theme={{
                    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                  }}
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={11}
                  blockMargin={3}
                />
              ) : (
                <div className="flex items-center justify-center p-8 border border-gray-800 rounded-lg bg-gray-900/50">
                  <div className="text-center">
                    <Github className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-500 text-sm">
                      GitHub contributions temporarily unavailable
                    </p>
                    <a
                      href="https://github.com/JoeyWong05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm underline mt-2 inline-block"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}
