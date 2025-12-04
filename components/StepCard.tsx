import React from 'react';
import { StepData } from '../types';
import { ChevronRight, Sparkles, ClipboardList, CloudCog, Eye, Pause, Filter } from 'lucide-react';

interface StepCardProps {
  step: StepData;
  onClick: (id: number) => void;
}

// Map specific steps to their visual identity in the PDF
export const getStepTheme = (id: number) => {
  switch (id) {
    case 1: // Verwachtingen verhelderen - Blue/Indigo with Sparkle
      return {
        icon: <Sparkles className="w-8 h-8 text-white" />,
        bg: "bg-indigo-600",
        text: "text-indigo-700",
        border: "border-indigo-100",
        hover: "hover:border-indigo-300",
        lightBg: "bg-indigo-50"
      };
    case 2: // Plannen maken - Pink with Clipboard
      return {
        icon: <ClipboardList className="w-8 h-8 text-white" />,
        bg: "bg-pink-600",
        text: "text-pink-700",
        border: "border-pink-100",
        hover: "hover:border-pink-300",
        lightBg: "bg-pink-50"
      };
    case 3: // Proberen... - Green with Cloud/Gear
      return {
        icon: <CloudCog className="w-8 h-8 text-white" />,
        bg: "bg-green-600",
        text: "text-green-700",
        border: "border-green-100",
        hover: "hover:border-green-300",
        lightBg: "bg-green-50"
      };
    case 4: // Leren zichtbaar maken - Orange with Eye
      return {
        icon: <Eye className="w-8 h-8 text-white" />,
        bg: "bg-orange-500",
        text: "text-orange-700",
        border: "border-orange-100",
        hover: "hover:border-orange-300",
        lightBg: "bg-orange-50"
      };
    case 5: // Pas op de plaats - Teal with Pause
      return {
        icon: <Pause className="w-8 h-8 text-white" />,
        bg: "bg-cyan-600",
        text: "text-cyan-700",
        border: "border-cyan-100",
        hover: "hover:border-cyan-300",
        lightBg: "bg-cyan-50"
      };
    case 6: // Klaarmaken portfolio - Purple with Filter
      return {
        icon: <Filter className="w-8 h-8 text-white" />,
        bg: "bg-purple-700",
        text: "text-purple-800",
        border: "border-purple-100",
        hover: "hover:border-purple-300",
        lightBg: "bg-purple-50"
      };
    default:
      return {
        icon: <Sparkles className="w-8 h-8 text-white" />,
        bg: "bg-slate-600",
        text: "text-slate-700",
        border: "border-slate-100",
        hover: "hover:border-slate-300",
        lightBg: "bg-slate-50"
      };
  }
};

export const StepCard: React.FC<StepCardProps> = ({ step, onClick }) => {
  const theme = getStepTheme(step.id);

  return (
    <div 
      onClick={() => onClick(step.id)}
      className={`group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border ${theme.border} ${theme.hover} p-6 cursor-pointer flex flex-col h-full`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`w-16 h-16 rounded-full ${theme.bg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {theme.icon}
        </div>
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${theme.lightBg} ${theme.text}`}>
          Stap {step.id}
        </span>
      </div>
      
      <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:${theme.text} transition-colors`}>
        {step.title}
      </h3>
      
      <p className="text-slate-600 text-sm flex-grow leading-relaxed">
        {step.shortDescription}
      </p>

      <div className={`mt-6 flex items-center ${theme.text} font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0`}>
        Ga naar stap {step.id} <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};