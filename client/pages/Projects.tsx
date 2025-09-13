import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Calendar, Code, ExternalLink, Play, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { LikesResponse, UpdateLikeRequest, UpdateLikeResponse } from "@shared/api";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);
  const [heartCounts, setHeartCounts] = useState<{[key: number]: number}>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start animations after component mounts
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setAnimationStage(1), 300);
    const timer3 = setTimeout(() => setAnimationStage(2), 600);
    const timer4 = setTimeout(() => setAnimationStage(3), 900);

    // Fetch initial like counts
    fetchLikeCounts();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const fetchLikeCounts = async () => {
    try {
      const response = await fetch('/api/likes');
      const data: LikesResponse = await response.json();
      setHeartCounts(data.likeCounts);
    } catch (error) {
      console.error('Failed to fetch like counts:', error);
      // Fallback to default values
      setHeartCounts({1: 247, 2: 156});
    }
  };

  const handleLike = async (projectId: number) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch('/api/likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectId } as UpdateLikeRequest),
      });

      const data: UpdateLikeResponse = await response.json();
      setHeartCounts(data.likeCounts);
    } catch (error) {
      console.error('Failed to update like count:', error);
    } finally {
      setLoading(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Proply",
      description: "blah blah blah",
      tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2F6da294e986c441fcb7a74baf8533ab08?format=webp&width=800",
      demoUrl: "https://tryproply.ai/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Circuit",
      description: "blah blah blah",
      tech: ["TypeScript", "Next.js", "spaCy", "D3.js", "MongoDB"],
      image: "https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2F1f691c1beb2b4e0c8aef0a6e74071fee?format=webp&width=800",
      demoUrl: "https://circuitspeeddating.com/",
      githubUrl: "#"
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "TypeScript", "R", "Java", "C++", "SQL", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI", "TensorFlow", "PyTorch", "Pandas"],
    libraries: ["NumPy", "Scikit-learn", "spaCy", "D3.js", "Chart.js", "Framer Motion", "Tailwind CSS"],
    tools: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB", "Redis", "Figma", "Jupyter"]
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className={`border-b border-gray-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50 transition-all duration-800 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
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
                <h1 className="text-xs sm:text-lg font-semibold">
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
        {/* Projects Header */}
        <section className="mb-12 sm:mb-16">
          <h2 className={`text-base sm:text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ${
            animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>Projects</h2>
          <p className={`text-gray-400 text-xs sm:text-lg mb-8 transition-all duration-1000 delay-200 ${
            animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            A collection of projects and full-stack applications I've built. :)
          </p>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-black border-gray-700 overflow-hidden transition-all duration-1000 ${
                  animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                      project.title === 'Circuit' || project.title === 'Proply' ? 'object-top' : ''
                    }`}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{project.title}</h3>
                    <button
                      onClick={() => handleLike(project.id)}
                      disabled={loading}
                      className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors duration-200 bg-transparent border-none cursor-pointer p-1 rounded disabled:opacity-50"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{heartCounts[project.id] || 0}</span>
                    </button>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-3 sm:px-4 py-2 flex items-center justify-center space-x-2 transition-all duration-200 text-xs border border-gray-700 shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        <span>View Project</span>
                      </a>
                    </Button>
                    <Button
                      className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-3 sm:px-4 py-2 flex items-center justify-center space-x-2 transition-all duration-200 text-xs border border-gray-700 shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-3 h-3" />
                        <span>Demo Video</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`transition-all duration-1000 delay-700 ${
          animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-base sm:text-2xl font-bold mb-6">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-black border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm sm:text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-500/30 text-white hover:bg-gray-500/10"
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm sm:text-lg">Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-500/30 text-white hover:bg-gray-500/10"
                    >
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm sm:text-lg">Libraries</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((library, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-500/30 text-white hover:bg-gray-500/10"
                    >
                      {library}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-sm sm:text-lg">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-500/30 text-white hover:bg-gray-500/10"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
