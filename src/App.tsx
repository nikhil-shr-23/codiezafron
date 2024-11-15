import React from 'react';
import Navbar from './components/Navbar';
import HeroSlideshow from './components/HeroSlideshow';
import FeatureSection from './components/FeatureSection';
import FeatureCard from './components/FeatureCard';
import CompanyLogos from './components/CompanyLogos';
import BlogSection from './components/BlogSection';
import TestimonialCard from './components/TestimonialCard';
import Marquee from './components/Marquee';
import GetStarted from './components/GetStarted';
import FAQ from './components/FAQ';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Software Engineer at Google",
    text: "This platform has been instrumental in my growth as a developer. The problems are well-curated and the community is incredibly supportive.",
    imageUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "James Wilson",
    role: "Frontend Developer at Meta",
    text: "The interview preparation section helped me land my dream job. The real-time collaboration features are fantastic!",
    imageUrl: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Maria Garcia",
    role: "Tech Lead at Amazon",
    text: "I've been using this platform for both learning and teaching. It's amazing how much the community has grown.",
    imageUrl: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Alex Kumar",
    role: "Software Architect",
    text: "The problem-solving approaches I learned here have made me a better programmer. Highly recommended!",
    imageUrl: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Emma Thompson",
    role: "Full Stack Developer",
    text: "The collaborative features and code reviews have helped me understand different approaches to problem-solving.",
    imageUrl: "https://i.pravatar.cc/150?img=5"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Learn. Collab. Code.
          </h1>
          <HeroSlideshow />
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Main Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureCard
            title="Learn with Problem Solving"
            description="Tackle hundreds of coding problems curated by experts across multiple difficulty levels. Whether you're a beginner or an advanced programmer, our platform helps you enhance your problem-solving skills and prepare for real-world scenarios."
            imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
          />
          
          <FeatureCard
            title="Join the Leaderboard and Collaborate with Peers"
            description="Compete with programmers worldwide and climb the leaderboard by solving problems. Collaborate with others through discussions, share solutions, and learn new approaches to code more efficiently."
            imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            reverse
          />
          
          <FeatureCard
            title="Ace Your Dream Job Interviews"
            description="Get job-ready with our extensive collection of interview-specific problems! Practice with real questions from top tech companies, simulate real interview scenarios, and track your progress to ensure you're ready to succeed."
            imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
          />
        </div>
      </section>

      {/* Company Logos */}
      <CompanyLogos />

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What People say about us</h2>
          <div className="space-y-8">
            <Marquee speed="slow">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </Marquee>
            <Marquee direction="right" speed="slow">
              {[...testimonials].reverse().map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Get Started Section */}
      <GetStarted />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Codieza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;