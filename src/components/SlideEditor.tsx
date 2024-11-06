import React from 'react';
import type { Slide } from '../types';

interface SlideEditorProps {
  slide: Slide;
  onSlideChange: (slide: Slide) => void;
}

export default function SlideEditor({
  slide,
  onSlideChange,
}: SlideEditorProps) {
  const handleTitleChange = (title: string) => {
    onSlideChange({ ...slide, title });
  };

  const handleTextChange = (text: string) => {
    onSlideChange({
      ...slide,
      content: { ...slide.content, text },
    });
  };

  return (
    <div className="flex-1 flex flex-col items-center bg-gray-100 p-8">
      <div className="w-[960px] h-[720px] bg-white rounded-lg shadow-lg">
        <input
          type="text"
          value={slide.title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full px-8 py-4 text-2xl font-medium focus:outline-none focus:bg-gray-50"
          placeholder="Slide Title"
        />
        <div className="flex h-[calc(100%-72px)]">
          <div className="w-1/2 p-4">
            {/* Diagram Area */}
            <div className="w-full h-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Diagram Area (WIP)</p>
            </div>
          </div>
          <div className="w-1/2 p-4">
            {/* Text Editor Area */}
            <div className="w-full h-full">
              <textarea
                value={slide.content.text}
                onChange={(e) => handleTextChange(e.target.value)}
                className="w-full h-full resize-none focus:outline-none"
                placeholder="Add your content here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
