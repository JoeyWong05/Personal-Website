import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, Linkedin, Mail, Calendar, Code } from "lucide-react";
import { useState, useEffect } from "react";

export default function Education() {
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
  const coursework = [
    {
      semester: "Fall 2023",
      courses: [
        { code: "MATH 1A", name: "Calculus 1" },
        { code: "UGBA 10", name: "Principles of Business" },
        { code: "CS 10", name: "The Beauty and Joy of Computing" },
        { code: "RHETOR 152AC", name: "Race and Order in the New Republic" }
      ]
    },
    {
      semester: "Spring 2024",
      courses: [
        { code: "MATH 1B", name: "Calculus 2" },
        { code: "COMPSCI 61A", name: "Interpretation of Computer Programs", grade: "A+" },
        { code: "STAT 21", name: "Probability and Statistics for Business" },
        { code: "MATH 53", name: "Multivariable Calculus" }
      ]
    },
    {
      semester: "Fall 2024",
      courses: [
        { code: "COMPSCI 61B", name: "Data Structure" },
        { code: "DATA C8", name: "Foundations of Data Science" },
        { code: "MATH 54", name: "Linear Algebra and Differential Equations" },
        { code: "ECON 140", name: "Econometrics" }
      ]
    },
    {
      semester: "Spring 2025",
      courses: [
        { code: "COMPSCI 70", name: "Discrete Mathematics and Probability Theory" },
        { code: "DATA C100", name: "Techniques of Data Science" },
        { code: "ECON 101A", name: "Math Intensive Microeconomics" }
      ]
    },
    {
      semester: "Summer 2025",
      courses: [
        { code: "ENVECON C176", name: "Climate Change Economics" },
        { code: "ECON 157", name: "Health Economics" },
        { code: "DIGHUM 150C", name: "Digital Humanities and Text and Language Analysis" },
        { code: "DIGHUM 100", name: "Theory and Method in the Digital Humanities" }
      ]
    },
    {
      semester: "Fall 2025",
      courses: [
        { code: "ECON 101B", name: "Math Intensive Macroeconomics" },
        { code: "ECON 162", name: "The Chinese Economy" },
        { code: "INDENG 172", name: "Risk Analysis for Engineers" },
        { code: "UGBA 104", name: "Business Analytics" },
        { code: "COMPSCI 61C", name: "Computer Architecture" }
      ]
    }
  ];

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
                <a href="mailto:jwxng@berkeley.edu">
                  <Mail className="w-4 h-4" />
                </a>
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
        {/* Education Header */}
        <section className="mb-8 sm:mb-12">
          <div className={`flex items-start mb-6 sm:mb-8 transition-all duration-1000 ${
            animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* UC Berkeley Logo */}
            <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 transition-all duration-1000 delay-200 ${
              animationStage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7e177c37fa6e47b3b9bfc0025bfe2ce3%2Fdc7c2580d00a45909da9efdbd3a43760?format=webp&width=800"
                alt="UC Berkeley Seal"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className={`flex-1 transition-all duration-1000 delay-300 ${
              animationStage >= 1 ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">University of California, Berkeley</h1>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-300 mb-1">
                B.A. in Computer Science + Economics{" "}
                <span className="text-xs sm:text-sm md:text-base text-gray-400">| Minor in Digital Humanities</span>
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-2">College of Computing, Data Science, and Society</p>
              <p className="text-xs sm:text-sm text-gray-400 italic">EGT: Spring 2027 | GPA: 3.81 / 4.0</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className={`border-t border-gray-700 mb-4 sm:mb-6 transition-all duration-800 delay-500 ${
          animationStage >= 2 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}></div>

        {/* Coursework Section */}
        <section className={`transition-all duration-1000 delay-700 ${
          animationStage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-lg sm:text-2xl font-bold mb-2">Coursework</h2>
          <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">All at UC Berkeley unless indicated otherwise.</p>

          <div className="space-y-4 sm:space-y-6">
            {coursework.slice().reverse().map((semester, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${
                  animationStage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <h3 className="text-sm sm:text-lg font-bold text-blue-400 mb-1 sm:mb-2">{semester.semester}</h3>
                <div className="space-y-0.5 sm:space-y-1">
                  {semester.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className={`flex items-start gap-1 transition-all duration-600 ${
                        animationStage >= 3 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1000 + index * 150 + courseIndex * 50}ms` }}
                    >
                      <span className="text-white text-xs sm:text-base">{course.code}:</span>
                      <span className="text-white text-xs sm:text-base">{course.name}</span>
                      {course.grade && (
                        <span className="text-gray-400 ml-2 italic text-xs">({course.grade})</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
