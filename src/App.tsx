import React, { useState } from 'react';
import TopBar from './components/TopBar';
import SlideNav from './components/SlideNav';
import SlideEditor from './components/SlideEditor';
import type { Slide } from './types';

const initialSlides: Slide[] = [
  {
    id: 1,
    title: 'Funding of the structure',
    content: {
      text: 'Steps:\n1. Fund A funds TopCo.\n2. TopCo funds MidCo.\n3. MidCo funds BidCo.\n\nNotes:\nId consectetur ut nisi aliqua anim eu culpa. Non minim consequat tempor dolore dolore consectetur proident voluptate commodo est anim excepteur sint.',
      diagram: '',
    },
  },
  {
    id: 2,
    title: 'Market Analysis',
    content: {
      text: 'Market overview and competitive analysis...',
      diagram: '',
    },
  },
];

function App() {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [title, setTitle] = useState('Project Cygnus');

  const handleAddSlide = () => {
    const newSlide: Slide = {
      id: slides.length + 1,
      title: 'New Slide',
      content: {
        text: '',
        diagram: '',
      },
    };
    setSlides([...slides, newSlide]);
  };

  const handleSlideChange = (updatedSlide: Slide) => {
    setSlides(slides.map(s => 
      s.id === updatedSlide.id ? updatedSlide : s
    ));
  };

  const currentSlideData = slides.find(s => s.id === currentSlide)!;

  return (
    <div className="h-screen flex flex-col">
      <TopBar title={title} status="Draft" />
      <div className="flex flex-1 overflow-hidden">
        <SlideNav
          slides={slides}
          currentSlide={currentSlide}
          onSlideSelect={setCurrentSlide}
          onAddSlide={handleAddSlide}
        />
        <SlideEditor
          slide={currentSlideData}
          onSlideChange={handleSlideChange}
        />
      </div>
    </div>
  );
}

export default App;