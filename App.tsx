import React, { useState } from 'react';
import { StepCard } from './components/StepCard';
import { StepDetail } from './components/StepDetail';
import { STEPS } from './constants';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [activeStepId, setActiveStepId] = useState<number | null>(null);

  const activeStep = activeStepId ? STEPS.find(s => s.id === activeStepId) : null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Fontys Header */}
      <nav className="bg-fontys-purple text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    {/* Recreating Fontys Logo style roughly with text since we lack the SVG */}
                    <div className="bg-white/10 px-3 py-1 rounded-sm backdrop-blur-sm">
                        <span className="text-2xl font-bold tracking-tight text-white">Fontys</span>
                        <span className="text-fontys-pink mx-2 font-bold">&gt;</span>
                        <span className="text-sm font-medium tracking-widest uppercase">For Society</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:block text-sm opacity-80 font-light">
              Handreiking: Navigeren door je leerproces
            </div>
          </div>
        </div>
        {/* Magenta accent line */}
        <div className="h-1 bg-fontys-pink w-full"></div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!activeStep ? (
          <div className="animate-fade-in">
            <div className="mb-12 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Navigeren door <br/>
                <span className="text-fontys-pink">je leerproces</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Een interactieve gids voor studenten om zelfregulerende vaardigheden te ontwikkelen. 
                Doorloop de 6 stappen en gebruik AI als jouw persoonlijke coach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {STEPS.map((step) => (
                <StepCard 
                  key={step.id} 
                  step={step} 
                  onClick={setActiveStepId} 
                />
              ))}
            </div>

            {/* Phases Legend */}
            <div className="mt-20 border-t border-slate-200 pt-10">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">
                Cyclisch Proces van Leren en Presteren
              </h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                   <span className="block text-2xl font-bold text-slate-900 mb-1">Voorbereiding</span>
                   <span className="text-sm text-slate-500">Stap 1 & 2</span>
                </div>
                <div className="text-center">
                   <span className="block text-2xl font-bold text-slate-900 mb-1">Uitvoering</span>
                   <span className="text-sm text-slate-500">Stap 3 & 4</span>
                </div>
                <div className="text-center">
                   <span className="block text-2xl font-bold text-slate-900 mb-1">Reflectie</span>
                   <span className="text-sm text-slate-500">Stap 5 & 6</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <StepDetail 
            step={activeStep} 
            onBack={() => setActiveStepId(null)} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-500 py-12 mt-auto border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Fontys Hogescholen</p>
          <p>Gebaseerd op de handreiking "Navigeren door je leerproces" (Februari 2024)</p>
        </div>
      </footer>
    </div>
  );
}