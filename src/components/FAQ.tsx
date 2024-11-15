import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What programming languages are supported?",
    answer: "We support all major programming languages including Python, JavaScript, Java, C++, Ruby, and Go. Our platform automatically handles compilation and execution in a secure environment."
  },
  {
    question: "Is Codieza free to use?",
    answer: "Yes! Codieza offers a generous free tier that includes access to hundreds of coding problems, basic features, and community support. We also offer premium plans for advanced features and interview preparation."
  },
  {
    question: "How does the interview preparation work?",
    answer: "Our interview prep section includes real interview questions from top tech companies, mock interviews, and detailed solutions. You'll get feedback on your code's time and space complexity, and tips for optimization."
  },
  {
    question: "Can I collaborate with other developers?",
    answer: "Absolutely! You can join discussion forums, share solutions (after solving problems), and participate in pair programming sessions. Our community features help you learn from peers worldwide."
  },
  {
    question: "How often is new content added?",
    answer: "We add new problems, tutorials, and interview questions weekly. Our content team works with industry experts to ensure high-quality, relevant materials."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}