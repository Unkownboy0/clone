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
  PlayCircle
} from 'lucide-react';

// Mock Data
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
    title: "Mobile App Development",
    description: "Create native mobile apps for iOS and Android",
    difficulty: "Advanced",
    duration: "50 hours",
    lessons: 25,
    category: "Mobile Development",
    language: "React Native",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    videoUrl: "https://www.youtube.com/embed/0-S5a0eXPoc",
    enrolled: 680000,
    rating: 4.6,
    curriculum: [
      "React Native Basics",
      "Navigation",
      "State Management",
      "Native APIs",
      "Push Notifications",
      "App Store Deployment"
    ]
  },
  {
    id: 6,
    title: "Java Programming",
    description: "Master object-oriented programming with Java",
    difficulty: "Beginner",
    duration: "30 hours",
    lessons: 16,
    category: "Programming",
    language: "Java",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3",
    videoUrl: "https://www.youtube.com/embed/eIrMbAQSU34",
    enrolled: 1500000,
    rating: 4.7,
    curriculum: [
      "Object-Oriented Concepts",
      "Classes and Objects",
      "Inheritance",
      "Polymorphism",
      "Exception Handling",
      "Collections Framework"
    ]
  }
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

// Header Component
export const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-dianne rounded border-2 border-blue-dianne flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-dianne">
                code<span className="text-carnation">cademy</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('courses')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'courses' 
                  ? 'text-carnation' 
                  : 'text-gray-700 hover:text-carnation'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'dashboard' 
                  ? 'text-carnation' 
                  : 'text-gray-700 hover:text-carnation'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'text-carnation' 
                  : 'text-gray-700 hover:text-carnation'
              }`}
            >
              About
            </button>
            <button className="bg-carnation text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Sign up
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
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
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('courses');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-carnation"
              >
                Courses
              </button>
              <button
                onClick={() => {
                  setCurrentPage('dashboard');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-carnation"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setCurrentPage('about');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-carnation"
              >
                About
              </button>
              <button className="w-full bg-carnation text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-blue-dianne text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-carnation rounded border-2 border-carnation flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                code<span className="text-carnation">cademy</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Learn to code for free with millions of students worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 Codecademy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Hero Section
export const HeroSection = ({ setCurrentPage }) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-dianne via-blue-800 to-blue-900"
      style={{
        backgroundImage: `linear-gradient(rgba(32, 64, 86, 0.8), rgba(32, 64, 86, 0.8)), url('https://images.unsplash.com/photo-1644325349124-d1756b79dd42')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Learn to code —
            <br />
            <span className="text-carnation">for free</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join millions of learners from around the world already learning on Codecademy!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('courses')}
              className="bg-carnation text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Start Learning for Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-dianne transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50M+</h3>
            <p className="text-gray-200">Learners worldwide</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">220+</h3>
            <p className="text-gray-200">Courses available</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-gray-200">Free forever</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Course Card Component
export const CourseCard = ({ course, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
      onClick={() => onClick(course)}
    >
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            course.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.difficulty}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-carnation transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {course.lessons} lessons
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            {course.enrolled.toLocaleString()} enrolled
          </span>
          <span className="text-carnation font-semibold">Free</span>
        </div>
      </div>
    </motion.div>
  );
};

// Popular Courses Section
export const PopularCourses = ({ setCurrentPage, setSelectedCourse }) => {
  const popularCourses = mockCourses.slice(0, 3);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with these beginner-friendly courses that thousands of students love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {popularCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={handleCourseClick}
            />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentPage('courses')}
            className="bg-carnation text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

// Features Section
export const FeaturesSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Interactive Lessons",
      description: "Learn by doing with hands-on coding exercises that give you real experience",
      image: "https://images.unsplash.com/photo-1581094016871-d948d70c26cd"
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides from industry experts and experienced instructors",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Free Certificates",
      description: "Earn certificates for every course you complete to showcase your new skills",
      image: "https://images.pexels.com/photos/10786166/pexels-photo-10786166.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Join millions of learners in our forums and get help when you need it",
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why choose Codecademy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to learn coding effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center gap-6"
            >
              <div className="relative">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-carnation rounded-full flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-blue-dianne">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how Codecademy has helped thousands of students achieve their career goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Course Search and Filter
export const CourseFilters = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, selectedDifficulty, setSelectedDifficulty }) => {
  const categories = ['All', 'Programming', 'Web Development', 'Data Science', 'Mobile Development'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carnation focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carnation focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        {/* Difficulty Filter */}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carnation focus:border-transparent"
        >
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { mockCourses };
