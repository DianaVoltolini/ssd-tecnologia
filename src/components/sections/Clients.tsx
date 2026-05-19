// src/components/sections/Clients.tsx

import Image from "next/image";
import { Building2 } from "lucide-react";

const clients = [
  {
    name: "Fabrícia Tomazoni Arquitetura",
    logo: "/images/clientes/fabricia.png",
    url: "https://www.fabriciaarquitetura.com.br/arquiteta.html",
  },
  {
    name: "TRG Fitness",
    logo: "/images/clientes/trgfitness.png",
    url: "https://trgfitness.com.br/",
  },
  {
    name: "Compra Fácil Distribuidora",
    logo: "/images/clientes/comprafacil.png",
    url: "https://comprafacildistribuidora.com.br/",
  },
  {
    name: "Coteminas",
    logo: "/images/clientes/coteminas.png",
    url: "https://pasoe.coteminas.com.br/coteminas/cot/vis/home.htm?dum=202651664727",
  },
];

export default function Clients() {
  return (
    <section id="clientes" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-[#F8FBFF] px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm">
            <Building2 size={16} />
            Empresas atendidas
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#0B1020] md:text-4xl">
            Empresas que confiam na SSD Tecnologia.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Atendimento corporativo com foco em estabilidade, suporte humanizado
            e continuidade operacional.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Acessar site de ${client.name}`}
              className="group flex min-h-32 items-center justify-center rounded-[28px] border border-[#DFE7F7] bg-[#F8FBFF] p-6 shadow-lg shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B5FFF]/20 hover:bg-white hover:shadow-2xl hover:shadow-blue-950/10"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={260}
                height={120}
                className="max-h-20 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}