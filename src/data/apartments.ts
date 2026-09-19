import { Apartment, Amenity } from '../types';

export const APARTMENTS: Apartment[] = [
  {
    id: 'unidade-1-vista-parque',
    name: 'Residencial Vista Parque',
    badge: 'Lançamento Exclusivo',
    badgeColor: 'bg-emerald-600 text-white',
    subtitle: 'Conforto, praticidade e contato com a natureza',
    description: 'Apartamentos modernos com plantas inteligentes, varanda com churrasqueira a carvão e vista definitiva para o parque. Ideal para famílias que buscam qualidade de vida.',
    priceFrom: 'R$ 685.000',
    area: '72m² a 89m²',
    bedrooms: '2 e 3 Quartos',
    suites: '1 Suíte',
    bathrooms: '2 Banheiros',
    parkingSpots: '1 a 2 Vagas',
    mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Varanda Gourmet integrada com churrasqueira',
      'Piso em porcelanato retificado 90x90',
      'Persianas integradas blackout 100%',
      'Infraestrutura completa para ar condicionado split',
      'Fechadura digital biométrica instalada'
    ],
    formUrl: 'https://docs.google.com/forms/d/18atUjReaMtWPIdoAThU_gvubNcVXSwuAYZoLIej-o4k/edit',
    formName: 'Formulário 1: Residencial Vista Parque',
    deliveryStatus: 'Obras em ritmo acelerado - Entrega 2026',
    location: 'Jardins / Bairro Nobre - A 200m do Parque Central'
  },
  {
    id: 'unidade-2-lumiere-premium',
    name: 'Edifício Lumière Premium',
    badge: 'Alto Padrão',
    badgeColor: 'bg-amber-600 text-white',
    subtitle: 'Sofisticação e arquitetura autoral no endereço mais cobiçado',
    description: 'Projetado pelos mais renomados arquitetos, traz amplos espaços de convivência, pé-direito duplo no living e acabamentos importados que elevam sua experiência de morar.',
    priceFrom: 'R$ 1.250.000',
    area: '115m² a 148m²',
    bedrooms: '3 e 4 Suítes',
    suites: '3 Suítes Plenas',
    bathrooms: '4 Banheiros + Lavabo',
    parkingSpots: '2 a 3 Vagas Cobertas',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Elevador privativo com biometria facial',
      'Living com pé-direito duplo e pele de vidro',
      'Cozinha com ilha central e despensa independente',
      'Manta acústica entre os pavimentos para silêncio total',
      'Tomada individual para abastecimento de carro elétrico'
    ],
    formUrl: 'https://forms.gle/C8hdYmLoB9a4wqZM7',
    formName: 'Formulário 2: Edifício Lumière Premium',
    deliveryStatus: 'Últimas unidades com tabela especial',
    location: 'Vila Nova / Região Nobre - Próximo aos melhores colégios e bistrôs'
  },
  {
    id: 'unidade-3-horizon-penthouse',
    name: 'Horizon Penthouse & Sky Residences',
    badge: 'Exclusividade Máxima',
    badgeColor: 'bg-indigo-700 text-white',
    subtitle: 'Coberturas lineares e duplex suspensas sobre a cidade',
    description: 'O ápice do luxo urbano com piscina privativa aquecida com borda infinita, terraço panorâmico e vista 360° para o skyline mais deslumbrante da cidade.',
    priceFrom: 'R$ 2.490.000',
    area: '210m² a 340m²',
    bedrooms: '4 Suítes Master',
    suites: '4 Suítes com closet',
    bathrooms: '5 Banheiros + Hidro',
    parkingSpots: '4 Vagas + Box privativo',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Piscina privativa na cobertura com deck de madeira nobre',
      'Suíte master com 42m², closet walk-in e banheira de imersão',
      'Automação residencial completa via smartphone e comando de voz',
      'Adega climatizada para 120 rótulos inclusa',
      'Acesso a heliponto homologado e serviço de concierge 24h'
    ],
    formUrl: 'https://forms.gle/9rmdJH8CjxE5upnB6',
    formName: 'Formulário 3: Horizon Penthouse & Sky Residences',
    deliveryStatus: 'Pronto para morar / Personalização disponível',
    location: 'Orla Nobre - Vista mar / vista panorâmica permanente'
  }
];

export const GENERAL_AMENITIES: Amenity[] = [
  {
    icon: 'Waves',
    title: 'Piscinas Aquecidas',
    description: 'Piscina adulto com raia semiolímpica de 25m e piscina infantil integradas com solarium.'
  },
  {
    icon: 'Dumbbell',
    title: 'Fitness Center Completo',
    description: 'Academia equipada com esteiras e aparelhos de última geração Life Fitness e espaço pilates.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Segurança e Portaria 24h',
    description: 'Controle de acesso por reconhecimento facial, clausura para pedestres e monitoramento com IA.'
  },
  {
    icon: 'Sparkles',
    title: 'Espaço Gourmet & Rooftop',
    description: 'Salões de festas elegantes totalmente mobiliados e equipados com churrasqueiras nobres.'
  },
  {
    icon: 'Trees',
    title: 'Áreas Verdes & Pet Place',
    description: 'Paisagismo exuberante com espécies nativas, praça de convivência e espaço pet com agility.'
  },
  {
    icon: 'Car',
    title: 'Vagas para Carro Elétrico',
    description: 'Vagas amplas e preparadas com medidores individuais para recarga rápida de veículos elétricos.'
  }
];
