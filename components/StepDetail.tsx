import React from 'react';
import { StepData } from '../types';
import { ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';
import { AICoach } from './AICoach';
import { getStepTheme } from './StepCard';

interface StepDetailProps {
  step: StepData;
  onBack: () => void;
}

export const StepDetail: React.FC<StepDetailProps> = ({ step, onBack }) => {
  const theme = getStepTheme(step.id);

  return (
    <div className="animate-fade-in space-y-8">
      {/* Navigation & Header */}
      <div>
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-4 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Terug naar overzicht
        </button>
        
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${theme.bg} flex items-center justify-center shadow-sm shrink-0`}>
                {/* Explicitly cast to ReactElement<any> to allow className prop injection via cloneElement */}
                {React.cloneElement(theme.icon as React.ReactElement<any>, { className: "w-6 h-6 text-white" })}
            </div>
            <div>
                <h1 className="text-3xl font-bold text-slate-900">{step.title}</h1>
                <p className="text-lg text-slate-600">{step.shortDescription}</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Content & Questions */}
        <div className="space-y-6">
          <div className={`bg-white rounded-xl shadow-sm border ${theme.border} p-6`}>
            <div className={`flex items-center gap-2 mb-4 ${theme.text}`}>
              <BookOpen className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Wat doe je in deze stap?</h2>
            </div>
            <ul className="space-y-3">
              {step.fullDescription.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className={`block w-2 h-2 rounded-full ${theme.bg} mt-2 flex-shrink-0`} />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${theme.lightBg} rounded-xl shadow-sm border ${theme.border} p-6`}>
            <div className={`flex items-center gap-2 mb-4 ${theme.text}`}>
              <HelpCircle className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Reflectievragen</h2>
            </div>
            <ul className="space-y-3">
              {step.questions.map((q, idx) => (
                <li key={idx} className="bg-white/80 p-3 rounded-lg border border-white/50 text-slate-800 font-medium shadow-sm">
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-2">Tip voor zelfregulatie</h3>
            <p className="text-slate-600 text-sm">
              Gebruik de AI-coach hiernaast om je gedachten te ordenen. De AI is ingesteld om je niet het antwoord te geven, maar om je te helpen zelf na te denken (metacognitie).
            </p>
          </div>
        </div>

        {/* Right Column: AI Coach */}
        <div>
           <AICoach step={step} />
        </div>
      </div>
    </div>
  );
};