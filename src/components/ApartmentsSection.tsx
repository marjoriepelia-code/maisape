import React, { useState } from 'react';
import { Sparkles, Filter } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';
import { ApartmentCard } from './ApartmentCard';

interface ApartmentsSectionProps {
  onOpenModal: (apartmentId: string) => void;
}

export const ApartmentsSection: React.FC<ApartmentsSectionProps> = ({ onOpenModal }) => {
  const [filter, setFilter] = useState<'all' | '2-3-quartos' | 'alto-padrao' | 'cobertura'>('all');

  const filteredApartments = APARTMENTS.filter(apt => {
    if (filter === '2-3-quartos') return apt.id.includes('vista-parque');
    if (filter === 'alto-padrao') return apt.id.includes('lumiere');
    if (filter === 'cobertura') return apt.id.includes('horizon');
    return true;
  });

  return (
    <section id="empreendimentos" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfólio Selecionado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Empreendimentos em Venda
            </h2>
            <p className="text-base text-neutral-600 mt-2 max-w-2xl">
              Cada projeto foi desenhado com especificações exclusivas. Clique no botão de interesse em cada unidade para abrir seu formulário individual de confirmação.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-neutral-200 shadow-sm self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                filter === 'all'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Todos (3 Unidades)
            </button>
            <button
              onClick={() => setFilter('2-3-quartos')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                filter === '2-3-quartos'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              2 e 3 Quartos
            </button>
            <button
              onClick={() => setFilter('alto-padrao')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                filter === 'alto-padrao'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Suítes Alto Padrão
            </button>
            <button
              onClick={() => setFilter('cobertura')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                filter === 'cobertura'
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Penthouses & Coberturas
            </button>
          </div>
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apt, index) => (
            <ApartmentCard
              key={apt.id}
              apartment={apt}
              index={index}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
