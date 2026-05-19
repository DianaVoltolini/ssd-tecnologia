// src/components/home/contract-section.tsx

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function ContractSection() {
  return (
    <section className="border-t border-[#dfe7f7] bg-[#f8fbff]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dfe7f7] bg-white px-5 py-3 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-[#0B5FFF]" />
            <span className="text-sm font-semibold text-[#002198]">
              Contrato mensal
            </span>
          </div>

          <h2 className="max-w-[580px] text-[44px] font-black leading-[1.02] tracking-[-0.03em] text-[#0B1020] sm:text-[56px]">
            Um parceiro de TI para acompanhar sua empresa continuamente.
          </h2>
        </div>

        <div className="rounded-[36px] border border-[#dfe7f7] bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <p className="text-[20px] leading-[1.9] text-[#42526b]">
            Com o contrato mensal da SSD Tecnologia, sua empresa conta com
            suporte contínuo, atendimento ágil e acompanhamento preventivo para
            reduzir falhas, evitar paradas e manter a operação funcionando com
            segurança.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Atendimento prioritário",
              "Suporte remoto e presencial",
              "Manutenção preventiva",
              "Acompanhamento técnico",
              "Organização da infraestrutura",
              "Redução de riscos operacionais",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[17px] font-semibold text-[#42526b]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#0B5FFF]/30 bg-[#0B5FFF]/5">
                  <ShieldCheck className="h-4 w-4 text-[#0B5FFF]" />
                </div>

                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/contrato-mensal"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#002198]
              px-8
              py-4
              text-white
              shadow-[0_14px_40px_rgba(0,33,152,0.22)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0B5FFF]
            "
          >
            <span className="text-[16px] font-semibold text-white">
              Conhecer contrato mensal
            </span>

            <ArrowRight className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}