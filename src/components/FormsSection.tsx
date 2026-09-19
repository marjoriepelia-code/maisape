import React, { useState } from 'react';
import { FileCheck, ExternalLink, Copy, Check, Sparkles, Building, ArrowUpRight } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface FormsSectionProps {
  onOpenModal: (apartmentId?: string) => void;
}

export const FormsSection: React.FC<FormsSectionProps> = ({ onOpenModal }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="formularios" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Canais Oficiais de Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            3 Formulários Individuais de Interesse
          </h2>
          <p className="text-base text-neutral-300 mt-3 leading-relaxed">
            Para garantir que cada empreendimento receba individualmente a sua confirmação com todos os requisitos atendidos, disponibilizamos os 3 links diretos abaixo. Escolha o seu e registre-se em menos de 1 minuto:
          </p>
        </div>

        {/* 3 Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APARTMENTS.map((apt, index) => (
            <div
              key={apt.id}
              id={`form-card-container-${index + 1}`}
              className="bg-neutral-850 rounded-3xl border border-neutral-750 p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/50 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded-full">
                    Formulário Oficial {index + 1}
                  </span>
                  <Building className="w-5 h-5 text-neutral-500 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {apt.name}
                </h3>
                <p className="text-xs text-neutral-400 mb-4">
                  {apt.subtitle}
                </p>

                <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-800 mb-5 text-xs space-y-2">
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Unidade:</span>
                    <span className="font-semibold text-white">{apt.bedrooms}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Valor Inicial:</span>
                    <span className="font-bold text-amber-400">{apt.priceFrom}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Recebimento:</span>
                    <span className="text-emerald-400 font-medium">Individual & Imediato</span>
                  </div>
                </div>

                {/* The URL display */}
                <div className="mb-5">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1.5">
                    Link do Formulário:
                  </span>
                  <div className="flex items-center gap-2 bg-neutral-950 px-3 py-2 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-400">
                    <span className="truncate flex-1 select-all">{apt.formUrl}</span>
                    <button
                      type="button"
                      onClick={() => handleCopy(apt.formUrl, index)}
                      className="p-1 text-neutral-400 hover:text-white transition-colors"
                      title="Copiar Link"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  id={`btn-direct-form-${index + 1}`}
                  href={apt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all group/btn"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Tenho Interesse (Formulário {index + 1})</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenModal(apt.id)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  Pré-visualizar antes de abrir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informative notification box */}
        <div className="mt-12 bg-neutral-800/60 border border-neutral-700/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">
              Prefere comparar todos antes de preencher?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Abra nosso seletor interativo para visualizar as diferenças e escolher exatamente o formulário da sua unidade favorita.
            </p>
          </div>
          <button
            id="btn-open-interactive-selector"
            onClick={() => onOpenModal()}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 text-xs font-bold transition-colors shadow"
          >
            Abrir Seletor "Tenho Interesse"
          </button>
        </div>
      </div>
    </section>
  );
};
