import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Calendar, Code, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const SPOTIFY_PROFILE_URL =
  "https://open.spotify.com/user/u44vz2a6oguolgd5vfck30daq?si=238425c3ba2847c7";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.399.099-.78-.24-.78-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.261.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.261 11.28-1.021 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 100);
    const timer2 = setTimeout(() => setAnimationStage(1), 300);
    const timer3 = setTimeout(() => setAnimationStage(2), 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
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
                  src="/baby_joey.jpg"
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
                <p className="text-xs sm:text-sm text-gray-400 hidden sm:block">Software Engineer</p>
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

      <div className="flex w-full min-h-0 flex-1 flex-col justify-center py-10 sm:py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="grid w-full min-w-0 grid-cols-3 items-stretch gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Profile Section */}
            <Card className={`col-span-2 flex h-full min-h-0 min-w-0 flex-col bg-black border-gray-700 transition-all duration-1000 ${
              animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <CardContent className="flex min-h-0 flex-1 flex-col p-3 sm:p-4 lg:p-6">
                <div className="flex min-h-0 flex-1 flex-col items-start gap-3 sm:flex-row sm:gap-4 lg:gap-6">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24 lg:h-32 lg:w-32">
                    <img
                      src="/joey_pic.jpg"
                      alt="Joey Wong"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-start pt-0.5 lg:pt-1">
                    <h2 className="mb-1.5 text-base font-bold text-white sm:mb-2 sm:text-lg lg:mb-1.5 lg:text-lg">
                      Joey Wong
                    </h2>
                    <p className="text-xs leading-snug text-gray-300 sm:text-sm sm:leading-normal lg:text-base lg:leading-snug">
                      I am a CS + DS + ECON student at UC Berkeley. I care more about understanding how things work than trying to have all the answers, and I'm comfortable learning as I go. I'm originally from Vietnam, which shapes how I think about growth and opportunity. Outside of school, I'm either hooping, sleeping, at a claw machine, or scrolling reels. Always down to connect with people who are curious, thoughtful, and building toward something real.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get in touch */}
            <Card className={`col-span-1 flex h-full min-h-0 min-w-0 flex-col bg-black border-gray-700 transition-all duration-1000 delay-200 ${
              animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <CardHeader className="shrink-0 space-y-0 p-0 px-2 pb-1 pt-4 sm:px-3 sm:pt-5 lg:pt-6">
                <CardTitle className="text-sm text-white sm:text-base lg:text-lg">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="flex min-h-0 flex-1 flex-col space-y-1.5 p-2 pt-0 sm:space-y-2 sm:p-3 sm:pt-0">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <Mail className="h-4 w-4 text-gray-300 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-base">Email</h3>
                    <a
                      href="mailto:jwxng@berkeley.edu"
                      className="block min-w-0 text-[9px] leading-snug text-gray-400 transition-colors [overflow-wrap:anywhere] hover:text-blue-400 sm:text-[11px] sm:leading-normal lg:text-sm"
                    >
                      jwxng@<wbr />
                      berkeley.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <Linkedin className="h-4 w-4 text-gray-300 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-base">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/joey-wong-7a572526a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 transition-colors hover:text-blue-400 sm:text-[11px] lg:text-sm break-words"
                    >
                      @JoeyWong
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <Instagram className="h-4 w-4 text-gray-300 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-base">Instagram</h3>
                    <a
                      href="https://instagram.com/_jwxng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 transition-colors hover:text-blue-400 sm:text-[11px] lg:text-sm break-words"
                    >
                      @_jwxng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <SpotifyIcon className="h-4 w-4 text-gray-300 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-base">Spotify</h3>
                    <a
                      href={SPOTIFY_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 transition-colors hover:text-blue-400 sm:text-[11px] lg:text-sm break-words"
                    >
                      @jwong
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                    <Github className="h-4 w-4 text-gray-300 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-medium text-white sm:text-xs lg:text-base">GitHub</h3>
                    <a
                      href="https://github.com/JoeyWong05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-gray-400 transition-colors hover:text-blue-400 sm:text-[11px] lg:text-sm break-words"
                    >
                      @JoeyWong05
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
