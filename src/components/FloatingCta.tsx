import React, { useState, useEffect } from 'react';
import { Sparkles, FileText, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface FloatingCtaProps {
  onOpenModal: (apartmentId?: string) => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onOpenModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div id="floating-cta-container" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Selector */}
      {isExpanded && (
        <div
          id="floating-expanded-menu"
          className="mb-3 w-80 rounded-2xl bg-neutral-900 border border-neutral-700 p-3 shadow-2xl text-white animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
            <span className="text-xs font-bold text-amber-400">
              Formulários de Interesse (3 Links)
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-neutral-400 hover:text-white text-xs p-1"
            >
              Fechar
            </button>
          </div>

          <div className="space-y-1.5">
            {APARTMENTS.map((apt, idx) => (
              <a
                key={apt.id}
                id={`floating-link-form-${idx + 1}`}
                href={apt.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-xl bg-neutral-800 hover:bg-amber-600/80 transition-colors group"
              >
                <div className="truncate pr-2">
                  <span className="text-[10px] uppercase font-bold text-amber-300 block">
                    Formulário {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-white block truncate">
                    {apt.name}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0" />
              </a>
            ))}
          </div>

          <button
            id="floating-open-full-modal-btn"
            onClick={() => {
              setIsExpanded(false);
              onOpenModal();
            }}
            className="mt-2 w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold rounded-xl transition-colors text-center block"
          >
            Abrir Comparativo Completo
          </button>
        </div>
      )}

      {/* Main Trigger Buttons */}
      <div className="flex items-center gap-2">
        <button
          id="floating-toggle-options-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-12 w-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center shadow-xl border border-neutral-700 transition-transform active:scale-95"
          title="Ver os 3 Formulários"
          aria-label="Ver os 3 Formulários"
        >
          {isExpanded ? <ChevronDown className="w-5 h-5" /> : <FileText className="w-5 h-5 text-amber-400" />}
        </button>

        <button
          id="floating-tenho-interesse-btn"
          onClick={() => onOpenModal()}
          className="h-12 px-5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-xl shadow-amber-600/30 flex items-center gap-2 transition-transform active:scale-95 hover:scale-105"
        >
          <Sparkles className="w-4 h-4" />
          <span>Tenho Interesse</span>
        </button>
      </div>
    </div>
  );
};
