// src/app/sobre/page.tsx

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Headphones,
  Network,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";

const pillars = [
  {
    icon: Headphones,
    title: "Atendimento próximo",
    description:
      "Suporte técnico humanizado, com atendimento remoto e presencial para empresas.",
  },
  {
    icon: ShieldCheck,
    title: "Mais estabilidade",
    description:
      "Organização da infraestrutura e prevenção de falhas para reduzir problemas recorrentes.",
  },
  {
    icon: Network,
    title: "Estrutura empresarial",
    description:
      "Atendimento focado em empresas, escritórios e ambientes corporativos.",
  },
];

const diferencials = [
  "Atendimento rápido",
  "Foco empresarial",
  "Suporte remoto e presencial",
  "Mais organização operacional",
  "Infraestrutura mais segura",
  "Atendimento em Blumenau e região",
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#0B1020]">
      <Header />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <Building2 size={16} />
              Sobre a SSD Tecnologia
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
              Tecnologia, suporte e organização para empresas.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              A SSD Tecnologia atua com suporte técnico, manutenção,
              infraestrutura, redes, servidores e contratos mensais de TI para
              empresas em Blumenau e região.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Nosso foco é oferecer atendimento técnico profissional, suporte
              organizado e mais estabilidade para empresas que dependem da
              tecnologia no dia a dia.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[28px] border border-[#DFE7F7] bg-white/85 p-7 shadow-lg shadow-blue-950/5 backdrop-blur-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198]">
                    <Icon size={28} />
                  </div>

                  <h2 className="text-xl font-black">
                    {pillar.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B5FFF]">
              Diferenciais
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Um suporte técnico voltado para empresas.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              Mais do que resolver problemas pontuais, a SSD Tecnologia trabalha
              para deixar a operação da empresa mais organizada, segura e com
              menos interrupções.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {diferencials.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#DFE7F7] bg-[#F8FBFF] px-5 py-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#0B5FFF]"
                  size={20}
                />

                <span className="font-semibold leading-7 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1020] py-16 text-white lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#21B6FF]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#21B6FF]">
                Próximo passo
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Precisa de suporte técnico para sua empresa?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Solicite um contato e entenda como a SSD Tecnologia pode ajudar
                sua empresa com suporte, manutenção, redes, servidores e
                contratos mensais de TI.
              </p>

              <Link
                href="/contato"
                className="relative z-20 mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold shadow-2xl shadow-black/20 transition hover:bg-[#F8FBFF]"
              >
                <span className="relative z-30 text-[#0B1020]">
                  Solicitar atendimento
                </span>

                <ArrowRight
                  className="relative z-30 text-[#0B1020]"
                  size={18}
                />
              </Link>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-3xl font-black text-[#21B6FF]">
                    B2B
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Atendimento com foco empresarial.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#21B6FF]">
                    TI
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Suporte técnico profissional.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#21B6FF]">
                    80km
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Blumenau e região.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-[#21B6FF]">
                    SSD
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Mais estabilidade operacional.
                  </p>
                </div>
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