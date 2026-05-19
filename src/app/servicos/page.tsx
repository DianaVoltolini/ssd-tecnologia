// src/app/servicos/page.tsx

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Headphones,
  Lock,
  MonitorCog,
  Network,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Link from "next/link";

const services = [
  {
    icon: ShieldCheck,
    title: "Contrato Mensal de TI",
    description:
      "Suporte contínuo, atendimento prioritário, manutenção preventiva e acompanhamento técnico para empresas que precisam de estabilidade.",
    bullets: [
      "Atendimento recorrente",
      "Prevenção de falhas",
      "Mais previsibilidade",
      "Suporte organizado",
    ],
  },
  {
    icon: Headphones,
    title: "Suporte Remoto e Presencial",
    description:
      "Atendimento ágil para resolver problemas técnicos, orientar equipes e reduzir paradas no dia a dia da empresa.",
    bullets: [
      "Suporte remoto",
      "Atendimento presencial",
      "Agilidade na operação",
      "Foco empresarial",
    ],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Manutenção preventiva e corretiva em computadores, equipamentos e estações de trabalho corporativas.",
    bullets: [
      "Computadores",
      "Estações de trabalho",
      "Equipamentos corporativos",
      "Correção e prevenção",
    ],
  },
  {
    icon: Network,
    title: "Redes Corporativas",
    description:
      "Instalação, organização e manutenção de redes para empresas, escritórios e indústrias.",
    bullets: [
      "Infraestrutura de rede",
      "Organização física",
      "Conectividade",
      "Ambiente empresarial",
    ],
  },
  {
    icon: Server,
    title: "Servidores",
    description:
      "Configuração, suporte e manutenção para ambientes com servidores e infraestrutura empresarial.",
    bullets: [
      "Configuração",
      "Manutenção",
      "Estabilidade",
      "Ambiente corporativo",
    ],
  },
  {
    icon: MonitorCog,
    title: "Consultoria em TI",
    description:
      "Análise da estrutura atual da empresa e orientação para melhorar segurança, organização e produtividade.",
    bullets: [
      "Diagnóstico técnico",
      "Melhoria de processos",
      "Planejamento",
      "Segurança operacional",
    ],
  },
];

const diferencials = [
  {
    icon: Headphones,
    title: "Atendimento rápido",
    description: "Respostas ágeis e suporte eficiente para empresas.",
  },
  {
    icon: Building2,
    title: "Foco empresarial",
    description: "Soluções pensadas para empresas e escritórios.",
  },
  {
    icon: Lock,
    title: "Mais segurança",
    description: "Infraestrutura mais estável e organizada.",
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#0B1020]">
      <Header />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <ShieldCheck size={16} />
              Serviços
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
              Soluções completas em tecnologia para empresas.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              A SSD Tecnologia oferece suporte, manutenção, redes, servidores,
              consultoria e contratos mensais de TI para empresas em Blumenau e
              região.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group flex h-full flex-col rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#0B5FFF]/20 hover:shadow-2xl hover:shadow-blue-950/10 md:p-7"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198] transition group-hover:bg-[#002198] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h2 className="text-xl font-black leading-tight">
                    {service.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 md:text-base">
                    {service.description}
                  </p>

                  <div className="mt-6 grid gap-2.5 border-t border-[#DFE7F7] pt-5">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3">
                        <CheckCircle2
                          className="shrink-0 text-[#0B5FFF]"
                          size={17}
                        />

                        <span className="text-sm font-semibold text-slate-700">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mt-16 overflow-hidden rounded-[34px] bg-gradient-to-br from-[#001B7A] via-[#002198] to-[#0B5FFF] p-8 shadow-2xl shadow-blue-950/25 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="absolute right-0 top-0 h-[280px] w-[280px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="max-w-xl text-3xl font-black leading-tight text-white md:text-4xl">
                  Precisa de suporte de TI para sua empresa?
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
                  Solicite um orçamento e veja como a SSD Tecnologia pode ajudar
                  sua empresa a ter mais estabilidade, organização e segurança.
                </p>

                <Link
                  href="/contato"
                  className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:scale-[1.02] hover:bg-white/20"
                >
                  <span className="text-white">
                    Solicitar orçamento agora
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-white"
                  />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {diferencials.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21B6FF]/15 text-[#21B6FF]">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-lg font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-blue-100">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}