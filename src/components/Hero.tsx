import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle, ExternalLink, Award, FileText } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface HeroProps {
  onOpenInterestModal: (apartmentId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInterestModal }) => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Oportunidade Exclusiva • Venda de Apartamentos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              O Seu Próximo Endereço <br className="hidden sm:inline" />
              com <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Design de Autor</span> e Localização Nobre
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Descubra 3 empreendimentos concebidos para proporcionar sofisticação, conforto e alta valorização patrimonial. Escolha a sua unidade favorita e registre seu interesse individualmente no formulário correspondente.
            </p>

            {/* Central CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-tenho-interesse-btn"
                onClick={() => onOpenInterestModal()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-base shadow-lg shadow-amber-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Tenho Interesse</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#empreendimentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm border border-neutral-700 transition-colors"
              >
                Ver os 3 Empreendimentos
              </a>
            </div>

            {/* Direct Form Quick Links Box */}
            <div className="pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Acesso Direto aos 3 Formulários de Interesse:
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {APARTMENTS.map((apt, index) => (
                  <a
                    key={apt.id}
                    id={`hero-quick-form-link-${index + 1}`}
                    href={apt.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-850 transition-all group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 mb-1">
                      <span>Formulário {index + 1}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="text-xs font-semibold text-white truncate">
                      {apt.name}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1">
                      {apt.bedrooms}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Atendimento prioritário</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Construtora de Alto Padrão</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Condições diretas de tabela</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Apartamento de Luxo"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Floating highlight card on hero image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        Destaque da Semana
                      </span>
                      <h2 className="text-base font-bold text-white">
                        Edifício Lumière Premium
                      </h2>
                      <p className="text-xs text-neutral-300">
                        3 e 4 Suítes • Varanda Gourmet com Vista Livre
                      </p>
                    </div>
                    <button
                      id="hero-card-interest-btn"
                      onClick={() => onOpenInterestModal('unidade-2-lumiere-premium')}
                      className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shadow-md"
                    >
                      Tenho Interesse
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative mini badge */}
              <div className="absolute -top-4 -left-4 bg-white text-neutral-950 px-4 py-2.5 rounded-2xl shadow-xl border border-neutral-200 hidden sm:flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-extrabold tracking-tight">Plantão Online Ativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
