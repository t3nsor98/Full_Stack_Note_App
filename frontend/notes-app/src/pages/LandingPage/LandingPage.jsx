import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Edit3,
  Share2,
  Lock,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import screenshot from "../../assets/screenshot.png";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Edit3 className="w-6 h-6" />,
      title: "Easy Note Taking",
      description: "Create and edit notes with our intuitive Markdown editor",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Seamless Sharing",
      description: "Share notes with teammates in just one click",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Storage",
      description: "Your notes are encrypted and safely stored in the cloud",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Organized Collections",
      description: "Keep your notes organized with custom collections and tags",
    },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      image: "https://picsum.photos/id/69/64",
      review:
        "Diggy Note has transformed how I organize my content calendar. The interface is intuitive and the sharing features are game-changing!",
      rating: 5,
    },
    {
      name: "Mark Chen",
      role: "Software Engineer",
      image: "https://picsum.photos/id/169/64",
      review:
        "As a developer, I appreciate the markdown support and code snippets feature. It's become my go-to for technical documentation.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      image: "https://picsum.photos/id/269/64",
      review:
        "Perfect for keeping my study notes organized! The search function helps me find anything instantly.",
      rating: 5,
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Edit3 className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">
                Diggy Note
              </span>
            </div>
            <div className="space-x-4">
              <Link to="/login">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div
          className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Your thoughts, organized and secure
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Capture your ideas, notes, and memories in one beautiful place.
              Access them anywhere, anytime.
            </p>
            <Link to="/signup">
              <button className="px-8 py-4 bg-purple-600 text-white rounded-lg text-lg hover:bg-purple-700 transform hover:scale-105 transition-all">
                Get Started - It's Free
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img
              src={screenshot}
              alt="Diggy Note Interface"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {React.cloneElement(feature.icon, {
                  className: "w-6 h-6 text-purple-600",
                })}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* App Preview Section */}
      <div className="bg-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beautiful, Intuitive Interface
            </h2>
            <p className="text-xl text-purple-200">
              Focus on your content with our clean, distraction-free design
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <img
              src="https://picsum.photos/id/3/400/300"
              alt="App Screenshot 1"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
            <img
              src="https://picsum.photos/id/20/400/300"
              alt="App Screenshot 2"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
            <img
              src="https://picsum.photos/id/119/400/300"
              alt="App Screenshot 3"
              className="rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Loved by thousands of users
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="bg-white rounded-2xl shadow-xl p-8 mx-12">
            <div className="flex items-center mb-6">
              <img
                src={reviews[currentReview].image}
                alt={reviews[currentReview].name}
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">
                  {reviews[currentReview].name}
                </h3>
                <p className="text-gray-600">{reviews[currentReview].role}</p>
              </div>
              <div className="ml-auto flex">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            <p className="text-lg text-gray-700 italic">
              "{reviews[currentReview].review}"
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start taking better notes?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands of users who have already transformed their
              note-taking experience.
            </p>
            <Link to="/signup">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg text-lg hover:bg-gray-100 transform hover:scale-105 transition-all">
                Try Diggy Note Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
