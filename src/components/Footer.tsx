import React from 'react';
import { Building, Phone, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface FooterProps {
  onOpenModal: (apartmentId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <span className="text-base font-extrabold text-white block leading-tight">
                  VÉRTICE
                </span>
                <span className="text-[10px] tracking-widest text-amber-400 uppercase block">
                  Residências de Alto Padrão
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Especialistas na comercialização de imóveis residenciais de alta qualidade, garantindo transparência, suporte jurídico e atendimento personalizado em todas as etapas da sua aquisição.
            </p>
            <div className="pt-2 text-neutral-500 text-[11px]">
              CRECI Jurídico: 039.482-J | Incorporação registrada nos termos da Lei 4.591/64
            </div>
          </div>

          {/* Col 2: The 3 Google Forms */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Formulários de Interesse (Oficiais)
            </h4>
            <p className="text-[11px] text-neutral-400">
              Clique para registrar sua confirmação individual:
            </p>
            <div className="space-y-2">
              {APARTMENTS.map((apt, idx) => (
                <a
                  key={apt.id}
                  id={`footer-form-link-${idx + 1}`}
                  href={apt.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 hover:text-white transition-all group"
                >
                  <div className="truncate pr-2">
                    <span className="text-[10px] text-amber-400 font-bold block uppercase">
                      Formulário {idx + 1}
                    </span>
                    <span className="text-xs text-neutral-300 font-semibold block truncate">
                      {apt.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#empreendimentos" className="hover:text-amber-400 transition-colors">
                  Empreendimentos em Destaque
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">
                  Áreas Comuns e Lazer
                </a>
              </li>
              <li>
                <a href="#formularios" className="hover:text-amber-400 transition-colors">
                  Acessar os 3 Formulários
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Parcelas
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização e Bairro
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Plantão */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Central de Atendimento
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Av. das Nações Unidas, 1420 - Jardins, São Paulo/SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>(11) 4004-9800 | (11) 99888-7766</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contato@verticeimoveis.com.br</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-modal-open-btn"
                onClick={() => onOpenModal()}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Tenho Interesse (Seletor)
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>As informações e valores expressos estão sujeitos a alterações sem aviso prévio. Imagens meramente ilustrativas.</span>
          </div>
          <div>
            © {new Date().getFullYear()} Vértice Empreendimentos. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
