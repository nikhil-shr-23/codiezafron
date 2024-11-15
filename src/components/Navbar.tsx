import React from 'react';
import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-1 flex justify-center space-x-8">
            <a href="#problems" className="text-gray-700 hover:text-gray-900">Problems</a>
            <a href="#leaderboard" className="text-gray-700 hover:text-gray-900">Leaderboard</a>
            <a href="#discussions" className="text-gray-700 hover:text-gray-900">Discussions</a>
            <a href="#support" className="text-gray-700 hover:text-gray-900">Support</a>
          </div>
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}