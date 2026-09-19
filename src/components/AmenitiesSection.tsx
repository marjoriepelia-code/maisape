import React from 'react';
import { Waves, Dumbbell, ShieldCheck, Sparkles, Trees, Car, ArrowRight } from 'lucide-react';
import { GENERAL_AMENITIES } from '../data/apartments';

interface AmenitiesSectionProps {
  onOpenModal: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Waves: <Waves className="w-6 h-6 text-amber-600" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-amber-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
    Trees: <Trees className="w-6 h-6 text-amber-600" />,
    Car: <Car className="w-6 h-6 text-amber-600" />,
  };

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            Lazer & Infraestrutura Premium
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
            O Luxo de Viver com Conveniência Total
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            Áreas comuns entregues totalmente equipadas e decoradas por arquitetos premiados, pensadas para o seu bem-estar diário e da sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GENERAL_AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="p-7 rounded-3xl border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-amber-500/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100/70 flex items-center justify-center mb-5">
                {iconMap[amenity.icon] || <Sparkles className="w-6 h-6 text-amber-600" />}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Banner with CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 text-white p-8 sm:p-10 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Visitas com Agendamento
            </span>
            <h3 className="text-2xl font-bold mt-1 text-white">
              Quer conhecer os decorados e a maquete física?
            </h3>
            <p className="text-sm text-neutral-300 mt-2">
              Envie sua confirmação de interesse em um dos nossos formulários para que nosso concierge imobiliário reserve seu horário com café especial e atendimento vip.
            </p>
          </div>
          <button
            id="amenities-agendar-visita-btn"
            onClick={onOpenModal}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all group"
          >
            <span>Tenho Interesse / Agendar Visita</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
