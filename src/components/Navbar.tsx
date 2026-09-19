import React, { useState } from 'react';
import { Building, Phone, ChevronDown, ExternalLink, Menu, X, Sparkles } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface NavbarProps {
  onOpenInterestModal: (apartmentId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterestModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Top micro bar */}
      <div className="bg-neutral-900 text-neutral-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Plantão de Vendas & Visitas aos Decorados
            </span>
            <span className="text-neutral-500">•</span>
            <span>Atendimento Personalizado com Corretores Credenciados</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+5511999998888"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(11) 4004-9800 | (11) 99888-7766</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-neutral-900 block leading-tight">
                VÉRTICE
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-amber-700 uppercase block">
                Empreendimentos & Residências
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#empreendimentos" className="hover:text-amber-700 transition-colors">
              Empreendimentos
            </a>
            <a href="#diferenciais" className="hover:text-amber-700 transition-colors">
              Diferenciais
            </a>
            <a href="#formularios" className="hover:text-amber-700 transition-colors flex items-center gap-1.5">
              <span>Formulários de Interesse</span>
              <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                3 Opções
              </span>
            </a>
            <a href="#simulador" className="hover:text-amber-700 transition-colors">
              Simulação
            </a>
            <a href="#localizacao" className="hover:text-amber-700 transition-colors">
              Localização
            </a>
            <a href="#faq" className="hover:text-amber-700 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Dropdown for "Tenho Interesse" with the 3 forms */}
            <div className="relative">
              <button
                id="nav-interest-dropdown-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-md shadow-amber-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Tenho Interesse</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu listing the 3 Google Forms */}
              {isDropdownOpen && (
                <div
                  id="nav-interest-dropdown-menu"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-neutral-200 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-2 py-1.5 border-b border-neutral-100 mb-2">
                    <p className="text-xs font-bold text-neutral-900">
                      Escolha seu Formulário de Interesse:
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Confirmação individual por unidade
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    {APARTMENTS.map((apt, index) => (
                      <a
                        key={apt.id}
                        id={`nav-form-link-${index + 1}`}
                        href={apt.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start justify-between p-2.5 rounded-xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200"
                      >
                        <div className="pr-2">
                          <span className="text-[10px] font-bold text-amber-700 block uppercase">
                            Opção {index + 1}
                          </span>
                          <span className="text-xs font-semibold text-neutral-900 group-hover:text-amber-700 block">
                            {apt.name}
                          </span>
                          <span className="text-[11px] text-neutral-500 block">
                            {apt.bedrooms} • {apt.priceFrom}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-700 shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-2 pt-2 border-t border-neutral-100">
                    <button
                      id="nav-open-modal-btn"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onOpenInterestModal();
                      }}
                      className="w-full text-center py-2 text-xs font-bold text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      Ver detalhes dos 3 formulários
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-interest-btn-top"
              onClick={() => onOpenInterestModal()}
              className="px-3 py-2 rounded-lg bg-amber-600 text-white text-xs font-bold shadow-sm"
            >
              Tenho Interesse
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-neutral-800">
            <a
              href="#empreendimentos"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Empreendimentos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Diferenciais
            </a>
            <a
              href="#formularios"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-between"
            >
              <span>Formulários de Interesse</span>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-bold">
                3 Links
              </span>
            </a>
            <a
              href="#simulador"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Simulador de Financiamento
            </a>
            <a
              href="#localizacao"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Localização
            </a>
            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-neutral-100"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-3 border-t border-neutral-100">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
              Formulários Rápidos de Interesse:
            </p>
            <div className="space-y-1.5">
              {APARTMENTS.map((apt, idx) => (
                <a
                  key={apt.id}
                  href={apt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-neutral-50 rounded-lg text-xs font-medium text-neutral-800 hover:bg-amber-50 hover:text-amber-800 border border-neutral-200"
                >
                  <span>Formulário {idx + 1}: {apt.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              ))}
            </div>

            <button
              id="mobile-drawer-modal-btn"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenInterestModal();
              }}
              className="mt-3 w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-center text-sm font-bold shadow-md"
            >
              Botão Tenho Interesse (Selecionar Unidade)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
