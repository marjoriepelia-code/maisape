import React, { useState } from 'react';
import { BedDouble, Bath, Car, Maximize2, MapPin, Check, ExternalLink, Sparkles } from 'lucide-react';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
  index: number;
  onOpenModal: (apartmentId: string) => void;
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartment,
  index,
  onOpenModal
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [apartment.mainImage, ...(apartment.galleryImages || [])].slice(0, 3);

  return (
    <article
      id={`apartamento-card-${apartment.id}`}
      className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
    >
      {/* Image Gallery Container */}
      <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-100">
        <img
          src={images[activeImageIndex]}
          alt={apartment.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-md ${apartment.badgeColor}`}>
            {apartment.badge}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-neutral-900 backdrop-blur-md shadow-md">
            Opção {index + 1}
          </span>
        </div>

        {/* Image Thumbnail Selector */}
        <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIndex(i)}
              className={`w-10 h-7 rounded-md overflow-hidden border-2 transition-all ${
                activeImageIndex === i ? 'border-amber-500 scale-105 shadow-md' : 'border-white/70 opacity-75'
              }`}
              aria-label={`Ver foto ${i + 1} do ${apartment.name}`}
            >
              <img src={img} alt="Miniatura" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </button>
          ))}
        </div>

        {/* Status Chip */}
        <div className="absolute bottom-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-medium text-neutral-200">
          {apartment.deliveryStatus}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">{apartment.location}</span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
            {apartment.name}
          </h3>
          <p className="text-sm text-neutral-600 mt-1 line-clamp-2">
            {apartment.description}
          </p>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-4 gap-2 my-5 p-3 rounded-2xl bg-neutral-50 border border-neutral-100 text-center">
            <div className="flex flex-col items-center">
              <Maximize2 className="w-4 h-4 text-amber-600 mb-1" />
              <span className="text-xs font-bold text-neutral-900">{apartment.area}</span>
              <span className="text-[10px] text-neutral-500">Área Priv.</span>
            </div>
            <div className="flex flex-col items-center">
              <BedDouble className="w-4 h-4 text-amber-600 mb-1" />
              <span className="text-xs font-bold text-neutral-900">{apartment.bedrooms}</span>
              <span className="text-[10px] text-neutral-500">Dormitórios</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="w-4 h-4 text-amber-600 mb-1" />
              <span className="text-xs font-bold text-neutral-900">{apartment.bathrooms}</span>
              <span className="text-[10px] text-neutral-500">Banh/Suítes</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="w-4 h-4 text-amber-600 mb-1" />
              <span className="text-xs font-bold text-neutral-900">{apartment.parkingSpots}</span>
              <span className="text-[10px] text-neutral-500">Garagem</span>
            </div>
          </div>

          {/* High-end finishes list */}
          <div className="space-y-2 mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Destaques Exclusivos da Unidade:
            </p>
            {apartment.features.slice(0, 4).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Form Action Box */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] text-neutral-500 font-medium block">
                Valores a partir de
              </span>
              <span className="text-2xl font-black text-neutral-900 tracking-tight">
                {apartment.priceFrom}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3 h-3" />
              Tabela Direta
            </span>
          </div>

          {/* Primary CTA Button: TENHO INTERESSE (Individual Google Form Link) */}
          <div className="space-y-2">
            <a
              id={`card-btn-tenho-interesse-${apartment.id}`}
              href={apartment.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md shadow-amber-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] group/btn"
            >
              <span>Tenho Interesse nesta Unidade</span>
              <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 px-1 pt-1">
              <span className="truncate">Formulário Individual Oficial {index + 1}</span>
              <button
                type="button"
                onClick={() => onOpenModal(apartment.id)}
                className="text-amber-700 font-semibold hover:underline shrink-0"
              >
                Opções de Envio
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
