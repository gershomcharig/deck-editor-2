import React from 'react';
import { Plus } from 'lucide-react';
import SlidePreview from './SlidePreview';
import type { Slide } from '../types';

interface SlideNavProps {
  slides: Slide[];
  currentSlide: number;
  onSlideSelect: (id: number) => void;
  onAddSlide: () => void;
}

export default function SlideNav({ slides, currentSlide, onSlideSelect, onAddSlide }: SlideNavProps) {
  return (
    <div className="w-64 border-r bg-gray-50 flex flex-col h-[calc(100vh-3.5rem)]">
      <button 
        onClick={onAddSlide}
        className="m-4 flex items-center gap-2 px-4 py-2 bg-white rounded-lg border hover:bg-gray-50"
      >
        <Plus className="w-4 h-4" />
        Add slide
      </button>
      <div className="overflow-y-auto flex-1 px-2">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => onSlideSelect(slide.id)}
            className={`w-full p-2 rounded-lg mb-2 ${
              currentSlide === slide.id ? 'ring-2 ring-blue-500' : 'hover:bg-white'
            }`}
          >
            <div className="aspect-[4/3] bg-white rounded border shadow-sm mb-1">
              <SlidePreview 
                title={slide.title}
                content={slide.content}
              />
            </div>
            <p className="text-xs truncate text-left">{slide.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}