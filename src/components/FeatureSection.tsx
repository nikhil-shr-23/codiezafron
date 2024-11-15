import React from 'react';
import { Code2, Users, Target, Sparkles, Brain, Trophy } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Interactive Coding Environment",
    description: "Write, run, and test code in real-time with our powerful in-browser IDE"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Hints",
    description: "Get intelligent suggestions and hints when you're stuck on a problem"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Peer Learning",
    description: "Connect with other developers and learn from their solutions and approaches"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Targeted Practice",
    description: "Focus on specific topics and difficulty levels that match your goals"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Achievement System",
    description: "Track your progress and earn badges as you master new concepts"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Interview Prep",
    description: "Practice with real interview questions from top tech companies"
  }
];

export default function FeatureSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything you need to excel</h2>
          <p className="text-gray-600">Our platform provides all the tools and resources you need to become a better programmer</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}