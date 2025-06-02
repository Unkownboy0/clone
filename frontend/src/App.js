import React, { useState } from 'react';
import './App.css';
import {
  Header,
  Footer,
  HeroSection,
  PopularCourses,
  FeaturesSection,
  TestimonialsSection,
  CourseFilters,
  CourseCard,
  SkillsSection,
  mockCourses
} from './components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Download, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  Star,
  ArrowLeft,
  Award,
  ChevronRight,
  PlayCircle,
  User,
  Trophy,
  BarChart3
} from 'lucide-react';

// Course Detail Page - Dark Theme
const CourseDetailPage = ({ course, setCurrentPage, setCurrentLesson }) => {
  const [enrollmentComplete, setEnrollmentComplete] = useState(false);

  const handleStartCourse = () => {
    setEnrollmentComplete(true);
    setCurrentLesson({ course, lessonIndex: 0 });
    setCurrentPage('lesson');
  };

  return (
    <div className="min-h-screen bg-codecademy-dark text-white">
      <div className="bg-codecademy-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setCurrentPage('courses')}
            className="flex items-center gap-2 text-text-medium-gray hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-xs text-codecademy-yellow font-semibold uppercase tracking-wide">
                  {course.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-text-light-gray mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-8 text-sm text-text-medium-gray">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-codecademy-yellow text-codecademy-yellow" />
                  <span>{course.rating} ({course.enrolled.toLocaleString()} students)</span>
                </div>
              </div>
              
              <button
                onClick={handleStartCourse}
                className="bg-codecademy-yellow hover:bg-codecademy-yellow-hover text-codecademy-dark px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Start Learning for Free
              </button>
            </div>
            
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
            <div className="space-y-3 mb-12">
              {course.curriculum.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-codecademy-green mt-1 flex-shrink-0" />
                  <span className="text-text-light-gray">{item}</span>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-4">Course Preview</h3>
            <div className="bg-codecademy-darker rounded-lg border border-border-gray p-6">
              <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-4">
                <iframe
                  src={course.videoUrl}
                  title={course.title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-text-medium-gray">
                Get a preview of what you'll learn in this {course.lessons}-lesson course.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-codecademy-darker rounded-lg border border-border-gray p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4">Course includes:</h3>
              <ul className="space-y-3 text-sm text-text-medium-gray">
                <li className="flex items-center gap-3">
                  <PlayCircle className="w-4 h-4 text-codecademy-yellow" />
                  {course.lessons} video lessons
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-codecademy-yellow" />
                  Interactive exercises
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-codecademy-yellow" />
                  Certificate of completion
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-codecademy-yellow" />
                  Lifetime access
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border-gray">
                <div className="text-center">
                  <span className="text-2xl font-bold text-codecademy-yellow">FREE</span>
                  <p className="text-sm text-text-medium-gray mt-1">No credit card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lesson Page
const LessonPage = ({ currentLesson, setCurrentPage, setUserProgress }) => {
  const [lessonComplete, setLessonComplete] = useState(false);
  const { course, lessonIndex } = currentLesson;
  const currentLessonTitle = course.curriculum[lessonIndex];
  const isLastLesson = lessonIndex === course.curriculum.length - 1;

  const handleLessonComplete = () => {
    setLessonComplete(true);
    
    // Update user progress
    setUserProgress(prev => ({
      ...prev,
      [course.id]: {
        courseId: course.id,
        courseName: course.title,
        progress: Math.round(((lessonIndex + 1) / course.lessons) * 100),
        completedLessons: lessonIndex + 1,
        totalLessons: course.lessons,
        lastAccessed: new Date().toISOString(),
        completed: lessonIndex + 1 === course.lessons
      }
    }));
  };

  const handleNextLesson = () => {
    if (isLastLesson) {
      setCurrentPage('certificate');
    } else {
      setCurrentPage('lesson');
      // Would normally update lesson index here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('course-detail')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h2 className="font-semibold text-gray-900">{course.title}</h2>
                <p className="text-sm text-gray-600">
                  Lesson {lessonIndex + 1} of {course.lessons}: {currentLessonTitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-carnation h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((lessonIndex + 1) / course.lessons) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {Math.round(((lessonIndex + 1) / course.lessons) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {currentLessonTitle}
              </h1>
              
              {/* Video Player */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-6">
                <iframe
                  src={course.videoUrl}
                  title={currentLessonTitle}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  In this lesson, you'll learn about {currentLessonTitle.toLowerCase()}. 
                  This is a fundamental concept that will help you understand how to write 
                  better code and solve problems more effectively.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Concepts:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Understanding the basics of {currentLessonTitle.toLowerCase()}</li>
                  <li>Best practices and common patterns</li>
                  <li>Real-world applications and examples</li>
                  <li>Common mistakes to avoid</li>
                </ul>
              </div>
            </div>
            
            {/* Code Exercise Simulation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Interactive Exercise
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400">
                <div className="mb-2"># Practice exercise for {currentLessonTitle}</div>
                <div className="mb-2">def example_function():</div>
                <div className="ml-4 mb-2">    # Your code here</div>
                <div className="ml-4 mb-2">    return "Hello, World!"</div>
                <div className="mb-2"></div>
                <div>print(example_function())</div>
              </div>
              
              {!lessonComplete && (
                <button
                  onClick={handleLessonComplete}
                  className="mt-4 bg-carnation text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Complete Exercise
                </button>
              )}
              
              {lessonComplete && (
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Exercise Complete!</span>
                  </div>
                  <button
                    onClick={handleNextLesson}
                    className="bg-carnation text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
                  >
                    {isLastLesson ? 'Complete Course' : 'Next Lesson'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <h4 className="font-semibold text-gray-900 mb-4">Course Curriculum</h4>
              <div className="space-y-2">
                {course.curriculum.map((lesson, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg text-sm cursor-pointer transition-colors ${
                      index === lessonIndex
                        ? 'bg-carnation text-white'
                        : index < lessonIndex
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {index < lessonIndex ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : index === lessonIndex ? (
                        <PlayCircle className="w-4 h-4" />
                      ) : (
                        <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                      )}
                      <span className="flex-1">{lesson}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Certificate Page
const CertificatePage = ({ currentLesson, setCurrentPage }) => {
  const course = currentLesson?.course;
  
  const downloadCertificate = () => {
    // In a real app, this would generate and download a PDF
    alert('Certificate downloaded! (This is a simulation)');
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Congratulations!
          </h1>
          <p className="text-xl text-gray-600">
            You have successfully completed {course.title}
          </p>
        </div>

        {/* Certificate */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-4 border-carnation">
          <div className="text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-carnation rounded border-2 border-carnation flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-blue-dianne">
                  code<span className="text-carnation">cademy</span>
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Certificate of Completion
              </h2>
              <div className="w-24 h-1 bg-carnation mx-auto"></div>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-2">This certifies that</p>
              <h3 className="text-4xl font-bold text-blue-dianne mb-2">
                John Doe
              </h3>
              <p className="text-lg text-gray-700 mb-4">has successfully completed</p>
              <h4 className="text-2xl font-semibold text-carnation mb-4">
                {course.title}
              </h4>
              <p className="text-gray-600">
                Completion Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-dianne">{course.lessons}</div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-dianne">{course.duration}</div>
                <div className="text-sm text-gray-600">Total Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-dianne">{course.difficulty}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <p className="text-sm text-gray-500">
                Certificate ID: CC-{course.id}-{Date.now()}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <button
            onClick={downloadCertificate}
            className="bg-carnation text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Certificate
          </button>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('courses')}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Browse More Courses
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Courses Page - Dark Theme
const CoursesPage = ({ setCurrentPage, setSelectedCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setCurrentPage('course-detail');
  };

  return (
    <div className="min-h-screen bg-codecademy-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Catalog</h1>
          <p className="text-xl text-text-light-gray">
            Choose from {mockCourses.length} courses to start your coding journey
          </p>
        </div>

        <CourseFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onClick={handleCourseClick}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-medium-gray">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Dashboard Page
const DashboardPage = ({ userProgress }) => {
  const progressArray = Object.values(userProgress);
  const completedCourses = progressArray.filter(p => p.completed);
  const inProgressCourses = progressArray.filter(p => !p.completed && p.progress > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Dashboard</h1>
          <p className="text-xl text-gray-600">Track your learning progress</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Courses In Progress</p>
                <p className="text-2xl font-semibold text-gray-900">{inProgressCourses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Courses</p>
                <p className="text-2xl font-semibold text-gray-900">{completedCourses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-carnation/10 text-carnation">
                <Award className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Certificates Earned</p>
                <p className="text-2xl font-semibold text-gray-900">{completedCourses.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        {inProgressCourses.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgressCourses.map((progress) => (
                <div key={progress.courseId} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {progress.courseName}
                  </h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{progress.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-carnation h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {progress.completedLessons} of {progress.totalLessons} lessons completed
                  </p>
                  <button className="bg-carnation text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Courses */}
        {completedCourses.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Completed Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((progress) => (
                <div key={progress.courseId} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {progress.courseName}
                    </h3>
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Completed on {new Date(progress.lastAccessed).toLocaleDateString()}
                  </p>
                  <button className="text-carnation hover:text-red-600 transition-colors">
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {progressArray.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses started yet</h3>
            <p className="text-gray-600 mb-4">Start learning today and track your progress here</p>
            <button className="bg-carnation text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-dianne text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our mission: democratize coding education
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe coding should be accessible to everyone, everywhere. That's why all our courses are completely free.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2011, Codecademy started with a simple idea: make learning to code 
              accessible and enjoyable for everyone. We saw that traditional education wasn't 
              keeping up with the demand for technical skills.
            </p>
            <p className="text-gray-700 mb-4">
              Today, over 50 million learners have used Codecademy to gain new skills, 
              advance their careers, and build the future they want.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Learning to code"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-700">
                Quality education should be available to everyone, regardless of background or financial situation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700">
                We constantly evolve our platform to provide the most effective learning experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-carnation rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">
                We're committed to delivering high-quality content that helps learners achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-carnation mb-2">50M+</div>
              <div className="text-gray-600">Learners worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-carnation mb-2">220+</div>
              <div className="text-gray-600">Courses available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-carnation mb-2">100%</div>
              <div className="text-gray-600">Free content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-carnation mb-2">15+</div>
              <div className="text-gray-600">Programming languages</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({});

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div>
            <HeroSection setCurrentPage={setCurrentPage} />
            <SkillsSection />
            <PopularCourses 
              setCurrentPage={setCurrentPage} 
              setSelectedCourse={setSelectedCourse}
            />
            <FeaturesSection />
            <TestimonialsSection />
          </div>
        );
      case 'courses':
        return (
          <CoursesPage 
            setCurrentPage={setCurrentPage}
            setSelectedCourse={setSelectedCourse}
          />
        );
      case 'events':
        return <EventsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'workspaces':
        return <WorkspacesPage />;
      case 'course-detail':
        return selectedCourse ? (
          <CourseDetailPage 
            course={selectedCourse}
            setCurrentPage={setCurrentPage}
            setCurrentLesson={setCurrentLesson}
          />
        ) : null;
      case 'lesson':
        return currentLesson ? (
          <LessonPage 
            currentLesson={currentLesson}
            setCurrentPage={setCurrentPage}
            setUserProgress={setUserProgress}
          />
        ) : null;
      case 'certificate':
        return (
          <CertificatePage 
            currentLesson={currentLesson}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'dashboard':
        return <DashboardPage userProgress={userProgress} />;
      case 'about':
        return <AboutPage />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;