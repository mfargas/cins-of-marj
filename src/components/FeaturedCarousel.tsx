'use client';

import { useState, useEffect } from 'react';
import { MediaItem } from '@/types';

interface FeaturedCarouselProps {
  items: MediaItem[];
}

export default function FeaturedCarousel({ items }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel only when not paused
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [items.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 rounded-2xl p-12 text-center">
        <p className="text-gray-500">No featured items available</p>
      </div>
    );
  }

  const currentItem = items[currentIndex];

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
      {/* Main Carousel Content */}
      <div className="relative h-[600px] bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-8">🎬</div>
            <div className="text-3xl font-bold text-gray-700 font-mono mb-4">
              {currentItem.title}
            </div>
            <div className="text-gray-500 text-xl">{currentItem.year}</div>
          </div>
        </div>
        
        {/* Content Overlay - Using Flexbox Layout */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          {/* Top Section - Title and Year */}
          <div className="h-full flex flex-col justify-between p-12">
            {/* Header Row */}
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <h3 className="text-5xl font-bold text-white mb-4 font-mono leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-white/80 text-2xl">
                  {currentItem.year} • {currentItem.director}
                </p>
              </div>
              
              {/* Rating Badge */}
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-4 border border-white/30">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 text-3xl">★</span>
                  <span className="text-white font-bold text-2xl">{currentItem.rating}/10</span>
                </div>
              </div>
            </div>

            {/* Middle Section - Genres */}
            <div className="flex flex-wrap gap-4">
              {currentItem.genre.map((genre) => (
                <span
                  key={genre}
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white text-lg rounded-full border border-white/30 font-medium"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Bottom Section - Description and Actions */}
            <div className="max-w-4xl">
              <p className="text-white/90 text-xl mb-8 leading-relaxed">
                {currentItem.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-6">
                <button className="bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xl">
                  Read Analysis
                </button>
                <button className="text-white border-2 border-white/50 px-10 py-4 rounded-lg hover:bg-white/10 transition-colors text-xl">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="flex items-center justify-between">
          {/* Dots Indicator */}
          <div className="flex gap-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-5 h-5 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePause}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-colors"
            title={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        title="Previous"
      >
        <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        title="Next"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Item Counter */}
      <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm text-white px-5 py-3 rounded-full text-lg font-medium">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Auto-advance indicator */}
      <div className="absolute top-8 left-8 bg-black/50 backdrop-blur-sm text-white px-5 py-3 rounded-full text-lg font-medium">
        {isPaused ? "⏸️ Paused" : "▶️ Auto"}
      </div>
    </div>
  );
}
