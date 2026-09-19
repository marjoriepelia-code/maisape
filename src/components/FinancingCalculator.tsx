import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, FileSpreadsheet, ShieldAlert } from 'lucide-react';
import { APARTMENTS } from '../data/apartments';

interface FinancingCalculatorProps {
  onOpenModal: (apartmentId?: string) => void;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({ onOpenModal }) => {
  const [propertyValue, setPropertyValue] = useState<number>(850000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanYears, setLoanYears] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(9.5); // % per year

  // Calculations
  const downPaymentAmount = propertyValue * (downPaymentPercent / 100);
  const loanAmount = propertyValue - downPaymentAmount;
  const totalMonths = loanYears * 12;
  const monthlyRate = interestRate / 100 / 12;

  // Price Amortization formula (PMT)
  const monthlyPayment =
    loanAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1));

  const recommendedIncome = monthlyPayment * 3.33; // ~30% compromise max

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Planejamento Financeiro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simulador de Financiamento Imobiliário
          </h2>
          <p className="text-base text-neutral-300 mt-2">
            Estime as parcelas do seu novo apartamento e confirme seu interesse no formulário para receber uma proposta com taxas personalizadas dos principais bancos (Caixa, Itaú, Bradesco e Santander).
          </p>
        </div>

        <div className="bg-neutral-850 rounded-3xl border border-neutral-750 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left sliders */}
            <div className="lg:col-span-7 space-y-6">
              {/* Preset quick buttons */}
              <div>
                <label className="text-xs font-semibold text-neutral-400 block mb-2">
                  Escolher Valor pelo Empreendimento:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPropertyValue(685000)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-colors truncate ${
                      propertyValue === 685000
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-neutral-900 border-neutral-750 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    R$ 685 mil (Vista Parque)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyValue(1250000)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-colors truncate ${
                      propertyValue === 1250000
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-neutral-900 border-neutral-750 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    R$ 1.25 mi (Lumière)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPropertyValue(2490000)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-colors truncate ${
                      propertyValue === 2490000
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'bg-neutral-900 border-neutral-750 text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    R$ 2.49 mi (Horizon)
                  </button>
                </div>
              </div>

              {/* Slider 1: Valor do Imóvel */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-300">Valor do Imóvel:</span>
                  <span className="text-base font-bold text-amber-400">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500000}
                  max={3500000}
                  step={25000}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>R$ 500.000</span>
                  <span>R$ 3.500.000</span>
                </div>
              </div>

              {/* Slider 2: Entrada (%) */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-neutral-300">
                    Valor de Entrada ({downPaymentPercent}%):
                  </span>
                  <span className="text-sm font-bold text-neutral-200">
                    {formatCurrency(downPaymentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                  <span>10% (Mínimo padrão)</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Slider 3: Prazo (Anos) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-neutral-300">Prazo:</span>
                    <span className="text-sm font-bold text-neutral-200">
                      {loanYears} anos ({totalMonths}x)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={35}
                    step={5}
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-neutral-300">Taxa Estimada:</span>
                    <span className="text-sm font-bold text-neutral-200">
                      {interestRate}% a.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min={7.5}
                    max={12.5}
                    step={0.5}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Right summary card */}
            <div className="lg:col-span-5 bg-neutral-900 rounded-2xl p-6 border border-neutral-750 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Resultado da Simulação
                </span>
                <div className="text-3xl font-black text-amber-400 mt-2">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-xs font-normal text-neutral-400 block mt-1">
                    estimativa de primeira parcela (tabela SAC/Price)
                  </span>
                </div>

                <div className="mt-6 space-y-3 pt-4 border-t border-neutral-800 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Total financiado:</span>
                    <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Entrada sugerida:</span>
                    <span className="font-bold text-white">{formatCurrency(downPaymentAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Renda familiar recomendada:</span>
                    <span className="font-bold text-emerald-400">{formatCurrency(recommendedIncome)}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-neutral-950/80 rounded-xl text-[11px] text-neutral-400 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Utilize seu FGTS como entrada ou composição de saldo para amortização.</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  id="calc-send-interest-btn"
                  onClick={() => onOpenModal()}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all group"
                >
                  <span>Tenho Interesse com Esta Simulação</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-neutral-500 text-center mt-2">
                  Ao clicar, você poderá escolher o formulário individual da unidade de interesse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
