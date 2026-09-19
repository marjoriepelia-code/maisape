import React from 'react';
import { MapPin, Navigation, ShoppingBag, GraduationCap, UtensilsCrossed, TreePine, HeartPulse } from 'lucide-react';

interface LocationSectionProps {
  onOpenModal: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenModal }) => {
  const pointsOfInterest = [
    {
      icon: <TreePine className="w-4 h-4 text-emerald-600" />,
      title: 'Parque Central & Bosque',
      time: 'Apenas 3 min a pé (250m)',
      category: 'Lazer e Natureza'
    },
    {
      icon: <ShoppingBag className="w-4 h-4 text-amber-600" />,
      title: 'Shopping Center Iguatemi',
      time: '5 min de carro (1.8km)',
      category: 'Compras e Cinema'
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-blue-600" />,
      title: 'Colégio e Faculdades Bilíngues',
      time: '4 min (escolas de referência)',
      category: 'Educação'
    },
    {
      icon: <UtensilsCrossed className="w-4 h-4 text-rose-600" />,
      title: 'Polo Gastronômico & Bistrôs',
      time: 'Caminhada de 6 min',
      category: 'Gastronomia'
    },
    {
      icon: <HeartPulse className="w-4 h-4 text-red-600" />,
      title: 'Hospital Sírio-Libanês / Einstein',
      time: '7 min de carro',
      category: 'Saúde'
    },
    {
      icon: <Navigation className="w-4 h-4 text-indigo-600" />,
      title: 'Acesso Rápido às Vias Expressas',
      time: '2 min da marginal e avenidas',
      category: 'Mobilidade'
    },
  ];

  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text and POIs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Localização Privilegiada
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mt-3">
                No Coração do Melhor Bairro da Cidade
              </h2>
              <p className="text-base text-neutral-600 mt-3 leading-relaxed">
                Viver com a conveniência de fazer tudo a pé ou estar a minutos dos melhores colégios, parques e restaurantes de alta gastronomia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pointsOfInterest.map((poi, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-amber-500/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-white shadow-xs">
                      {poi.icon}
                    </div>
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      {poi.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900">{poi.title}</h4>
                  <p className="text-xs text-neutral-600 mt-0.5 font-medium">{poi.time}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                id="location-cta-modal-btn"
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Receber Guia do Bairro no Formulário de Interesse</span>
              </button>
            </div>
          </div>

          {/* Right Visual / Map Simulation Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                alt="Vista da Região e Arquitetura"
                className="w-full h-[420px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* Pins floating over map photo */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-neutral-200 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-neutral-800">Região mais valorizada da zona sul</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block">
                      Endereço do Plantão
                    </span>
                    <span className="text-sm font-bold text-neutral-900 block">
                      Av. das Nações Unidas, 1420 - Jardins
                    </span>
                    <span className="text-xs text-neutral-500 block">
                      Aberto diariamente das 09h às 19h com manobrista gratuito
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
