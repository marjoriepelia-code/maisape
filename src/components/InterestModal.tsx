import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Building2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedApartmentId?: string | null;
}

export const InterestModal: React.FC<InterestModalProps> = ({
  isOpen,
  onClose,
  selectedApartmentId
}) => {
  const [activeTab, setActiveTab] = useState<'choose' | 'preview'>('choose');
  const [previewApartmentId, setPreviewApartmentId] = useState<string>(
    selectedApartmentId || APARTMENTS[0].id
  );

  if (!isOpen) return null;

  const currentPreviewApt = APARTMENTS.find(a => a.id === previewApartmentId) || APARTMENTS[0];

  return (
    <div 
      id="interest-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="interest-modal-container"
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-100 bg-neutral-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                <Sparkles className="w-3.5 h-3.5" />
                Atendimento Personalizado
              </span>
              <span className="text-xs text-neutral-500 font-medium">3 Formulários Individuais</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mt-1">
              Confirmação de Interesse por Empreendimento
            </h3>
            <p className="text-sm text-neutral-600">
              Escolha qual apartamento você tem interesse para enviar seus dados diretamente ao consultor responsável daquela unidade.
            </p>
          </div>
          <button
            id="close-interest-modal-btn"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 rounded-full transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-neutral-200 px-6 pt-3 bg-white">
          <button
            id="modal-tab-choose"
            onClick={() => setActiveTab('choose')}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'choose'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            1. Selecionar Empreendimento (3 Formulários)
          </button>
          <button
            id="modal-tab-preview"
            onClick={() => setActiveTab('preview')}
            className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'preview'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            2. Visualizar Formulário na Página
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-neutral-50/50">
          {activeTab === 'choose' ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {APARTMENTS.map((apt, index) => {
                  const isSelected = previewApartmentId === apt.id;
                  return (
                    <div
                      key={apt.id}
                      id={`modal-option-${apt.id}`}
                      className={`relative flex flex-col rounded-xl border p-4 bg-white transition-all shadow-sm ${
                        isSelected
                          ? 'border-amber-600 ring-2 ring-amber-500/20 shadow-md'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3 bg-neutral-100">
                        <img
                          src={apt.mainImage}
                          alt={apt.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className={`absolute top-2 left-2 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${apt.badgeColor}`}>
                          Opção {index + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="text-xs font-semibold text-neutral-500">{apt.badge}</div>
                        <h4 className="text-base font-bold text-neutral-900 leading-snug">
                          {apt.name}
                        </h4>
                        <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                          {apt.subtitle}
                        </p>

                        <div className="mt-3 py-2 border-t border-b border-neutral-100 space-y-1 text-xs text-neutral-700">
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Área:</span>
                            <span className="font-semibold">{apt.area}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">Tipologia:</span>
                            <span className="font-semibold">{apt.bedrooms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-500">A partir de:</span>
                            <span className="font-bold text-amber-700">{apt.priceFrom}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <a
                          id={`modal-form-btn-${index + 1}`}
                          href={apt.formUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-amber-600 text-white text-xs font-bold transition-colors shadow-sm group"
                        >
                          <span>Abrir Formulário {index + 1}</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setPreviewApartmentId(apt.id);
                            setActiveTab('preview');
                          }}
                          className="w-full text-center py-1.5 px-2 rounded text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                        >
                          Preencher aqui dentro
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-neutral-200 bg-amber-50/50 p-4 text-xs text-neutral-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-900">
                    Confirmação Individual de Interesse
                  </p>
                  <p className="mt-0.5 text-neutral-600 leading-relaxed">
                    Cada link corresponde a um formulário oficial do Google Forms específico para o empreendimento desejado. Ao enviar, a equipe de corretores credenciados recebe sua ficha individualmente para fornecer tabela de preços, memorial descritivo e agendamento de visita prioritária.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white rounded-xl border border-neutral-200">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-neutral-700">
                    Preenchendo interesse para:
                  </span>
                  <select
                    id="preview-select-apartment"
                    value={previewApartmentId}
                    onChange={(e) => setPreviewApartmentId(e.target.value)}
                    className="text-xs font-semibold py-1.5 px-2.5 border border-neutral-300 rounded-lg bg-white text-neutral-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {APARTMENTS.map((apt, idx) => (
                      <option key={apt.id} value={apt.id}>
                        Formulário {idx + 1}: {apt.name}
                      </option>
                    ))}
                  </select>
                </div>

                <a
                  id="open-current-form-tab"
                  href={currentPreviewApt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-amber-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Abrir em Nova Aba</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embed preview container with fallback */}
              <div className="relative w-full h-[520px] rounded-xl border border-neutral-200 overflow-hidden bg-white shadow-inner">
                <iframe
                  src={currentPreviewApt.formUrl.replace('/edit', '/viewform')}
                  title={`Formulário de Interesse - ${currentPreviewApt.name}`}
                  className="w-full h-full border-0"
                  loading="lazy"
                >
                  <p>Seu navegador não suporta iframes.</p>
                </iframe>

                <div className="p-3 bg-neutral-100 border-t border-neutral-200 text-center text-xs text-neutral-600 flex items-center justify-between">
                  <span>Caso o formulário não carregue acima devido a bloqueio do Google:</span>
                  <a
                    href={currentPreviewApt.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-700 hover:underline flex items-center gap-1"
                  >
                    Clique aqui para abrir diretamente o {currentPreviewApt.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Seus dados são transmitidos com criptografia e respeito à LGPD</span>
          </div>
          <button
            id="modal-bottom-close-btn"
            onClick={onClose}
            className="px-4 py-2 border border-neutral-300 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
