import React from 'react';
import { Menu, Square, ArrowRight, Type, Palette, MessageSquare, History, Sparkles, Users, Download, Settings } from 'lucide-react';

interface TopBarProps {
  title: string;
  status: string;
}

export default function TopBar({ title, status }: TopBarProps) {
  return (
    <div className="h-14 border-b flex items-center px-4 justify-between bg-white">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Shape">
          <Square className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Line">
          <ArrowRight className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Add Text">
          <Type className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-2" />
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Format">
          <Palette className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Comments">
          <MessageSquare className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Review">
          <History className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="AI Assistant">
          <Sparkles className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-2" />
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=faces" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=faces" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg" title="Share">
            <Users className="w-5 h-5" />
          </button>
        </div>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Download className="w-4 h-4" />
          Download
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Settings">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}