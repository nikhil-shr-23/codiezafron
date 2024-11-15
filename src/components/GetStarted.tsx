import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function GetStarted() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to start coding?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Join thousands of developers who are already improving their coding skills and preparing for their dream jobs.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:gap-3 transition-all">
          Join Codieza <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}