import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Por que existem 3 links de formulários diferentes?',
    answer: 'Cada formulário está vinculado especificamente a um dos 3 empreendimentos (Residencial Vista Parque, Edifício Lumière Premium e Horizon Penthouse). Dessa forma, a confirmação de interesse é recebida individualmente pela equipe técnica e de corretores especialistas daquela unidade, garantindo envio imediato do book correspondente, tabela atualizada e atendimento personalizado sem ruídos.'
  },
  {
    question: 'O que acontece após eu enviar o formulário do Google?',
    answer: 'Assim que você envia o formulário preenchido, seu interesse é registrado no sistema. Em menos de 15 minutos úteis, um consultor credenciado entra em contato pelo telefone ou WhatsApp informado para tirar dúvidas, enviar a apresentação em alta resolução e, se desejar, agendar uma visita guiada aos decorados.'
  },
  {
    question: 'Posso preencher o formulário para mais de um apartamento?',
    answer: 'Sim! Se você tiver interesse em mais de uma tipologia ou quiser comparar opções para investimento e moradia, você pode acessar os links individuais de cada empreendimento e enviar a sua confirmação em ambos.'
  },
  {
    question: 'É possível utilizar FGTS ou veículo como parte da entrada?',
    answer: 'Sim. As unidades aceitam utilização do saldo do FGTS conforme as normas do SFH. Para veículos ou permuta de imóveis de menor valor, uma avaliação especializada é realizada pela construtora mediante análise prévia.'
  },
  {
    question: 'Qual é a garantia de segurança e sigilo dos meus dados?',
    answer: 'Todos os formulários são hospedados no ambiente seguro do Google Workspace com criptografia de ponta a ponta e em conformidade estrita com a Lei Geral de Proteção de Dados (LGPD). Seus dados nunca serão compartilhados com terceiros não autorizados.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Perguntas Frequentes sobre a Compra e Formulários
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            Entenda como funciona o processo de confirmação de interesse e aquisição do seu imóvel.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-neutral-900 hover:text-amber-700 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
