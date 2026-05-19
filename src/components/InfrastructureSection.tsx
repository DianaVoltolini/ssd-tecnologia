// src/components/InfrastructureSection.tsx

import {
  Network,
  Server,
  ShieldCheck,
  Building2,
} from "lucide-react";

const items = [
  {
    icon: Server,
    title: "Servidores",
    description:
      "Suporte, configuração e manutenção para ambientes corporativos com mais estabilidade.",
  },
  {
    icon: Network,
    title: "Redes corporativas",
    description:
      "Organização, instalação e manutenção de redes para empresas e escritórios.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança operacional",
    description:
      "Infraestrutura mais organizada para reduzir falhas, riscos e interrupções.",
  },
];

export default function InfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] py-16 text-white lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#21B6FF] backdrop-blur-xl">
            <Building2 size={16} />
            Infraestrutura empresarial
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Tecnologia preparada para empresas que precisam de estabilidade.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            A SSD Tecnologia ajuda empresas a organizarem sua infraestrutura,
            reduzirem falhas e manterem suas operações funcionando com mais
            segurança e previsibilidade.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#21B6FF]/20 hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#21B6FF]/15 text-[#21B6FF]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}