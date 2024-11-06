import React from 'react';
import type { SlidePreviewProps } from '../types';

export default function SlidePreview({ title, content }: SlidePreviewProps) {
  return (
    <div className="w-full h-full bg-white rounded overflow-hidden text-[6px] relative">
      <div className="px-2 py-1 text-[8px] font-medium truncate">
        {title}
      </div>
      <div className="flex h-[calc(100%-16px)]">
        <div className="w-1/2 p-1">
          <div className="w-full h-full rounded border border-gray-200">
            {content.diagram || (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Diagram
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 p-1">
          <div className="line-clamp-[8]">{content.text || 'No content'}</div>
        </div>
      </div>
    </div>
  );
}