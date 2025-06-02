import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Code, 
  Users, 
  Award, 
  CheckCircle, 
  Star, 
  Search, 
  Menu, 
  X, 
  Download,
  Clock,
  BookOpen,
  Trophy,
  ArrowRight,
  Filter,
  User,
  Home,
  Book,
  UserCircle,
  ChevronDown,
  ChevronRight,
  PlayCircle,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

// Mock Data with Real Codecademy Styling
const mockCourses = [
  {
    id: 1,
    title: "Learn Python 3",
    description: "Learn the fundamentals of programming in Python 3",
    difficulty: "Beginner",
    duration: "25 hours",
    lessons: 12,
    category: "Programming",
    language: "Python",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    enrolled: 2500000,
    rating: 4.8,
    curriculum: [
      "Variables and Data Types",
      "Control Flow",
      "Functions",
      "Lists and Dictionaries",
      "Object-Oriented Programming",
      "File Handling"
    ]
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript and web development",
    difficulty: "Beginner",
    duration: "20 hours",
    lessons: 15,
    category: "Web Development",
    language: "JavaScript",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
    enrolled: 1800000,
    rating: 4.7,
    curriculum: [
      "Variables and Functions",
      "DOM Manipulation",
      "Event Handling",
      "Async JavaScript",
      "ES6+ Features",
      "API Integration"
    ]
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Analyze data and build machine learning models",
    difficulty: "Intermediate",
    duration: "40 hours",
    lessons: 20,
    category: "Data Science",
    language: "Python",
    image: "https://images.unsplash.com/photo-1580983553600-c49a1d083f54",
    videoUrl: "https://www.youtube.com/embed/ua-CiDNNj30",
    enrolled: 950000,
    rating: 4.9,
    curriculum: [
      "NumPy and Pandas",
      "Data Visualization",
      "Statistical Analysis",
      "Machine Learning Basics",
      "Model Evaluation",
      "Real-world Projects"
    ]
  },
  {
    id: 4,
    title: "React Web Development",
    description: "Build modern web applications with React",
    difficulty: "Intermediate",
    duration: "35 hours",
    lessons: 18,
    category: "Web Development",
    language: "JavaScript",
    image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    enrolled: 1200000,
    rating: 4.8,
    curriculum: [
      "Components and JSX",
      "State Management",
      "Hooks",
      "Routing",
      "API Integration",
      "Deployment"
    ]
  },
  {
    id: 5,
    title: "Machine Learning Specialist",
    description: "Learn the basic of Python 3.5. One of the most powerful, popular programming languages.",
    difficulty: "Advanced",
    duration: "50 hours",
    lessons: 25,
    category: "Data Science",
    language: "Python",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
    enrolled: 680000,
    rating: 4.6,
    curriculum: [
      "Machine Learning Foundations",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
      "Model Deployment"
    ]
  },
  {
    id: 6,
    title: "Learn Python 3",
    description: "Learn the basic of Python 3.5. One of the most powerful, popular programming languages.",
    difficulty: "Beginner",
    duration: "15 hours",
    lessons: 10,
    category: "Programming",
    language: "Python",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
    enrolled: 1500000,
    rating: 4.7,
    curriculum: [
      "Introduction to Python",
      "Variables and Data Types",
      "Control Flow",
      "Functions",
      "Data Structures",
      "File I/O"
    ]
  },
  {
    id: 7,
    title: "SY0-701 CompTIA Security+",
    description: "Master IT security basics and prep for the CompTIA Security+ exam.",
    difficulty: "Intermediate",
    duration: "15 hours",
    lessons: 12,
    category: "Cybersecurity",
    language: "Security",
    image: "https://images.unsplash.com/photo-1580983553600-c49a1d083f54",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
    enrolled: 800000,
    rating: 4.5,
    curriculum: [
      "Security Fundamentals",
      "Threats and Vulnerabilities",
      "Architecture and Design",
      "Implementation",
      "Operations and Incident Response",
      "Governance, Risk, and Compliance"
    ]
  },
  {
    id: 8,
    title: "Code Foundations",
    description: "Start your programming journey with an introduction to the world of code and basic programming concepts.",
    difficulty: "Beginner",
    duration: "4 hours",
    lessons: 8,
    category: "Programming",
    language: "Multiple",
    image: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
    enrolled: 2200000,
    rating: 4.9,
    curriculum: [
      "What is Programming?",
      "Programming Languages",
      "Data and Variables",
      "Operators",
      "Functions",
      "Control Flow",
      "Lists",
      "Loops"
    ]
  }
];

const skills = [
  { name: "Code Foundations", icon: "💻", category: "Programming" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "HTML & CSS", icon: "🎨", category: "Web Development" },
  { name: "Data science", icon: "📊", category: "Data Science" },
  { name: "Professional skills", icon: "💼", category: "Career" },
  { name: "Java", icon: "☕", category: "Programming" },
  { name: "Web development", icon: "🌐", category: "Web Development" },
  { name: "Data analytics", icon: "📈", category: "Data Science" },
  { name: "Interview prep", icon: "🎯", category: "Career" },
  { name: "JavaScript", icon: "📜", category: "Programming" },
  { name: "Web design", icon: "🎭", category: "Web Development" },
  { name: "Machine learning", icon: "🤖", category: "AI" },
  { name: "Computer science", icon: "🖥️", category: "Programming" },
  { name: "C++", icon: "⚡", category: "Programming" },
  { name: "Mobile development", icon: "📱", category: "Mobile" },
  { name: "AI", icon: "🧠", category: "AI" },
  { name: "IT", icon: "🔧", category: "IT" },
  { name: "C#", icon: "🔷", category: "Programming" },
  { name: "Game development", icon: "🎮", category: "Game" },
  { name: "Cloud computing", icon: "☁️", category: "Cloud" },
  { name: "Cybersecurity", icon: "🔒", category: "Security" },
  { name: "Go", icon: "🏃", category: "Programming" },
  { name: "DevOps", icon: "⚙️", category: "DevOps" },
  { name: "Certification prep", icon: "🏆", category: "Career" }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1519713880332-91cfe19a59dd",
    quote: "Codecademy helped me transition from marketing to software development. The interactive lessons made learning to code fun and engaging."
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Data Scientist",
    company: "Microsoft",
    image: "https://images.pexels.com/photos/7277960/pexels-photo-7277960.jpeg",
    quote: "The Python course gave me the foundation I needed to break into data science. Now I'm building ML models at Microsoft!"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Full Stack Developer",
    company: "Netflix",
    image: "https://images.pexels.com/photos/7279111/pexels-photo-7279111.jpeg",
    quote: "From zero coding knowledge to full-stack developer in 6 months. Codecademy's curriculum is perfectly structured for beginners."
  }
];

// Header Component - Dark Theme
export const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-codecademy-dark border-b border-border-gray sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <Code className="w-5 h-5 text-codecademy-dark" />
              </div>
              <span className="text-xl font-bold text-white">
                codecademy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
                Catalog
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
              Resources
            </button>
            <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
              Community
            </button>
            <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
              Pricing
            </button>
            <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
              Career Center
            </button>
            <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
              For Business
            </button>
            <div className="flex items-center space-x-3">
              <button className="text-text-light-gray hover:text-white transition-colors text-sm font-medium">
                Log In
              </button>
              <button className="bg-codecademy-yellow hover:bg-codecademy-yellow-hover text-codecademy-dark px-4 py-2 rounded-md font-semibold text-sm transition-colors">
                Sign Up
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-codecademy-dark border-t border-border-gray"
          >
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('courses');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-text-light-gray hover:text-white"
              >
                Catalog
              </button>
              <button
                onClick={() => {
                  setCurrentPage('dashboard');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-text-light-gray hover:text-white"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-text-light-gray hover:text-white"
              >
                About
              </button>
              <button className="w-full bg-codecademy-yellow text-codecademy-dark px-4 py-2 rounded-md font-semibold hover:bg-codecademy-yellow-hover transition-colors">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Footer Component - Dark Theme
export const Footer = () => {
  return (
    <footer className="bg-codecademy-darker text-text-light-gray border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <Code className="w-5 h-5 text-codecademy-dark" />
              </div>
              <span className="text-xl font-bold text-white">
                codecademy
              </span>
            </div>
            <p className="text-text-medium-gray text-sm">
              Learn to code for free with millions of students worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Subjects</h3>
            <ul className="space-y-2 text-sm text-text-medium-gray">
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Computer Science</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Developer Tools</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Machine Learning</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Languages</h3>
            <ul className="space-y-2 text-sm text-text-medium-gray">
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">HTML & CSS</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">C++</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-text-medium-gray">
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">About</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Affiliates</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-codecademy-yellow transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-gray mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-medium-gray">
          <p>&copy; 2024 Codecademy. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-codecademy-yellow transition-colors">Privacy</a>
            <a href="#" className="hover:text-codecademy-yellow transition-colors">Terms</a>
            <a href="#" className="hover:text-codecademy-yellow transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Hero Section - Dark Theme
export const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="bg-codecademy-dark text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Develop your
                <br />
                <span className="text-codecademy-yellow">/skills</span>
              </h1>
              <p className="text-xl text-text-light-gray mb-8 max-w-lg">
                Grow in your career and unlock new opportunities by learning in-demand skills 
                in AI, data, coding, cybersecurity, and more.
              </p>
              
              <div className="bg-codecademy-darker p-6 rounded-lg border border-border-gray">
                <h3 className="text-lg font-semibold mb-4">Get started today</h3>
                
                <button className="w-full bg-white text-codecademy-dark py-3 px-4 rounded-md font-semibold mb-3 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign up with Google
                </button>
                
                <div className="text-center text-text-medium-gray mb-3">OR</div>
                
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter email address"
                    className="w-full bg-codecademy-dark border border-border-gray text-white px-4 py-3 rounded-md focus:outline-none focus:border-codecademy-yellow"
                  />
                  <button className="w-full bg-codecademy-yellow hover:bg-codecademy-yellow-hover text-codecademy-dark py-3 px-4 rounded-md font-semibold transition-colors">
                    Sign up
                  </button>
                </div>
                
                <p className="text-xs text-text-medium-gray mt-4 text-center">
                  More ways to join us
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Person coding"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-text-medium-gray mb-8">
            Our learners work at
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold">Meta</div>
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">EA</div>
            <div className="text-2xl font-bold">Apple</div>
            <div className="text-2xl font-bold">Instagram</div>
            <div className="text-2xl font-bold">Spotify</div>
            <div className="text-2xl font-bold">Reddit</div>
            <div className="text-2xl font-bold">IBM</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Skills Section - Matching Real Codecademy
export const SkillsSection = () => {
  const [selectedTab, setSelectedTab] = useState('Top subjects');
  
  return (
    <section className="bg-codecademy-dark py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build skills that stand out
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-border-gray">
            {['Top subjects', 'Certification prep'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  selectedTab === tab 
                    ? 'text-white' 
                    : 'text-text-medium-gray hover:text-white'
                }`}
              >
                {tab}
                {selectedTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-codecademy-yellow"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.slice(0, 24).map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="skill-card group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium group-hover:text-codecademy-yellow transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-text-medium-gray mb-4">Looking for something else?</p>
          <button className="text-codecademy-yellow hover:text-codecademy-yellow-hover transition-colors font-medium flex items-center gap-1 mx-auto">
            Explore the catalog
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Course Card Component - Dark Theme
export const CourseCard = ({ course, onClick }) => {
  const getBadgeClass = (category, difficulty) => {
    if (category === 'Data Science') return 'bg-codecademy-purple';
    if (category === 'Web Development') return 'bg-codecademy-blue';
    if (category === 'Programming') return 'bg-codecademy-green';
    if (category === 'Cybersecurity') return 'bg-codecademy-pink';
    return 'bg-codecademy-orange';
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="course-card cursor-pointer group"
      onClick={() => onClick(course)}
    >
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getBadgeClass(course.category, course.difficulty)}`}>
            {course.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-codecademy-yellow font-semibold uppercase tracking-wide">
            {course.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-codecademy-yellow transition-colors">
          {course.title}
        </h3>
        <p className="text-text-medium-gray mb-4 text-sm">{course.description}</p>
        
        <div className="flex items-center justify-between text-xs text-text-medium-gray mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {course.lessons} lessons
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-codecademy-yellow text-codecademy-yellow" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-text-medium-gray text-xs">
            {course.enrolled.toLocaleString()} enrolled
          </span>
          <span className="text-codecademy-yellow font-semibold text-sm">Free</span>
        </div>
      </div>
    </motion.div>
  );
};

// Popular Courses Section - Dark Theme
export const PopularCourses = ({ setCurrentPage, setSelectedCourse }) => {
  const topCourses = mockCourses.slice(0, 4);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
  };

  return (
    <section className="bg-codecademy-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            No matter your goal, we have something for you
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full bg-codecademy-darker border border-border-gray text-white px-4 py-4 rounded-lg focus:outline-none focus:border-codecademy-yellow pr-12"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-medium-gray w-5 h-5" />
          </div>
          <p className="text-text-medium-gray text-sm mt-2">
            Not sure? Just ask our quiz to find what's best for you.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Top courses</h3>
          <div className="flex justify-end">
            <button className="text-codecademy-yellow hover:text-codecademy-yellow-hover transition-colors text-sm font-medium">
              Go to the catalog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={handleCourseClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section - Dark Theme
export const FeaturesSection = () => {
  return (
    <section className="bg-codecademy-darker py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-codecademy-blue text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            The experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Designed for progress
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-codecademy-green rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Find guided paths and interactive lessons no matter your skill level
                  </h3>
                  <p className="text-text-medium-gray">
                    Whether you're a complete beginner or looking to advance your skills, 
                    our curriculum adapts to your learning pace.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-codecademy-yellow rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-codecademy-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Fuel your growth with in-demand subjects like AI, cloud, data, cybersecurity, and more
                  </h3>
                  <p className="text-text-medium-gray">
                    Stay ahead of the curve with cutting-edge technologies and industry-relevant skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-codecademy-dark p-8 rounded-lg border border-border-gray">
              <h4 className="text-xl font-bold text-white mb-4">Gain hands-on experience</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-codecademy-yellow rounded-full"></div>
                  <span className="text-text-light-gray">Build portfolio-worthy projects from real-world scenarios</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-codecademy-green rounded-full"></div>
                  <span className="text-text-light-gray">Grow in your career with Professional Certificates from AWS, Microsoft, Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section - Dark Theme
export const TestimonialsSection = () => {
  return (
    <section className="bg-codecademy-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Turn ambition into action
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="testimonial-card rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-text-medium-gray">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-text-light-gray italic">"{testimonial.quote}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-codecademy-yellow text-codecademy-yellow" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Course Search and Filter - Dark Theme
export const CourseFilters = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty }) => {
  const categories = ['All', 'Programming', 'Web Development', 'Data Science', 'Cybersecurity'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="search-filter-dark p-6 rounded-lg mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-medium-gray w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent border border-border-gray rounded-lg text-white focus:outline-none focus:border-codecademy-yellow"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-codecademy-dark border border-border-gray rounded-lg text-white focus:outline-none focus:border-codecademy-yellow"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-3 bg-codecademy-dark border border-border-gray rounded-lg text-white focus:outline-none focus:border-codecademy-yellow"
          >
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>{difficulty}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export { mockCourses };
