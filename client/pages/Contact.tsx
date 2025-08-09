import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, Linkedin, Mail, Calendar, Send, Code, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Start animations after component mounts
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setAnimationStage(1), 300);
    const timer3 = setTimeout(() => setAnimationStage(2), 600);
    const timer4 = setTimeout(() => setAnimationStage(3), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:jwxng@berkeley.edu?subject=${subject}&body=${body}`;
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Profile & Message Form */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Profile Section */}
            <Card className={`bg-black border-gray-700 transition-all duration-1000 ${
              animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2F823765421acb435b994c8444014edf7f?format=webp&width=800"
                      alt="Joey Wong"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">Joey Wong</h2>
                    <p className="text-gray-300 leading-relaxed">
                      Hi! I'm a student at UC Berkeley studying Computer Science and Economics with a minor in Digital Humanities.
                      I'm interested in the intersection of technology and business, particularly in areas like fintech, blockchain innovation, and predictive analytics.
                      I'm originally from Vietnam, and outside of school, I'm a big Spider-Man fan. Always excited to connect with like-minded individuals and explore new opportunities in tech and academia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Message Form */}
            <Card className={`bg-black border-gray-700 transition-all duration-1000 delay-200 ${
              animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <CardHeader className="pb-1">
                <CardTitle className="text-white text-xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                      placeholder="Tell me about yourself, your project, or what you'd like to discuss..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-center space-x-2 transition-all duration-200 text-sm border border-gray-700 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Contact Info */}
          <div className={`flex flex-col space-y-3 transition-all duration-1000 delay-400 ${
            animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Card className="bg-black border-gray-700">
              <CardHeader className="pb-1">
                <CardTitle className="text-white text-lg">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="p-3 space-y-2">
                
                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a
                      href="mailto:jwxng@berkeley.edu"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      jwxng@berkeley.edu
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/joey-wong-7a572526a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      /in/joey-wong-7a572526a
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Instagram</h3>
                    <a
                      href="https://instagram.com/_jwxng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      @_jwxng
                    </a>
                  </div>
                </div>

                {/* Calendly */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Schedule a call</h3>
                    <a
                      href="https://calendly.com/jwxng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      calendly.com/jwxng
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">GitHub</h3>
                    <a
                      href="https://github.com/JoeyWong05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      github.com/JoeyWong05
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick note */}
            <Card className={`bg-black/50 border-gray-700 transition-all duration-800 delay-600 ${
              animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <CardContent className="p-3">
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn or schedule a call directly.
                </p>
              </CardContent>
            </Card>

            {/* Interests Tags */}
            <Card className={`bg-black/30 border-gray-700 flex-1 transition-all duration-800 delay-800 ${
              animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <CardContent className="p-3 h-full flex flex-col">
                <h3 className="text-white font-medium mb-3 text-sm">Things I'm into</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Spongebob", "BTS", "NewJeans", "Basketball", "Gym", "Mr. Beast", "ROBLOX", "Marvel", "Sleeping", "Vietnam", "Chipotle", "Chess"].map((interest, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700/50 transition-colors text-xs px-2 py-1"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-white font-medium mb-3 text-sm">Languages I speak</h3>
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {["Vietnamese", "English", "Spanish"].map((language, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-700/50 transition-colors text-xs px-2 py-1"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
