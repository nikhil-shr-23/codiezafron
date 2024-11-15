import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function FeatureCard({ title, description, imageUrl, reverse = false }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center my-20`}>
      <div className="w-full md:w-1/2">
        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}