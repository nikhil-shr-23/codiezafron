import React from 'react';

interface TestimonialCardProps {
  imageUrl: string;
  name: string;
  role: string;
  text: string;
}

export default function TestimonialCard({ imageUrl, name, role, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mx-4 w-[350px]">
      <div className="flex items-center space-x-4 mb-4">
        <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
        <div className="min-w-0">
          <h4 className="font-semibold truncate">{name}</h4>
          <p className="text-sm text-gray-500 truncate">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 line-clamp-3">{text}</p>
    </div>
  );
}