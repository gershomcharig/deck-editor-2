export interface Slide {
  id: number;
  title: string;
  content: {
    text: string;
    diagram: string;
  };
}

export interface SlidePreviewProps {
  title: string;
  content: {
    text: string;
    diagram: string;
  };
}