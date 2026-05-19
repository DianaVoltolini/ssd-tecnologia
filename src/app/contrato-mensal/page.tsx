// src/app/contrato-mensal/page.tsx

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Headphones,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";

const benefits = [
  "Atendimento prioritário",
  "Suporte remoto e presencial",
  "Manutenção preventiva",
  "Acompanhamento técnico",
  "Organização da infraestrutura",
  "Redução de riscos operacionais",
  "Mais previsibilidade para a empresa",
  "Menos paradas e problemas recorrentes",
];

const steps = [
  {
    title: "Diagnóstico inicial",
    description:
      "Entendimento da estrutura atual da empresa e dos principais pontos de atenção.",
  },
  {
    title: "Organização técnica",
    description:
      "Apoio para deixar equipamentos, redes e rotinas de suporte mais organizados.",
  },
  {
    title: "Atendimento contínuo",
    description:
      "Suporte recorrente para dúvidas, problemas técnicos e necessidades do dia a dia.",
  },
  {
    title: "Prevenção de falhas",
    description:
      "Acompanhamento preventivo para reduzir paradas, riscos e problemas repetitivos.",
  },
];

const idealFor = [
  "Empresas que dependem da tecnologia para operar",
  "Escritórios que precisam de suporte rápido",
  "Indústrias com estações, rede e equipamentos",
  "Negócios que desejam mais organização e previsibilidade",
];

export default function ContratoMensalPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#0B1020]">
      <Header />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <ShieldCheck size={16} />
              Contrato Mensal
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
              Suporte contínuo de TI para empresas que precisam de estabilidade.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Com o contrato mensal, sua empresa conta com suporte recorrente,
              atendimento prioritário e acompanhamento preventivo para reduzir
              falhas, evitar paradas e manter a operação funcionando com
              segurança.
            </p>

            <Link
              href="/contato"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#002198] px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
            >
              <span className="text-white">
                Solicitar diagnóstico inicial
              </span>

              <ArrowRight
                size={18}
                className="text-white"
              />
            </Link>
          </div>

          <div className="rounded-[34px] border border-[#DFE7F7] bg-white/85 p-7 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-8">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-[#0B1020] md:text-3xl">
              O que sua empresa ganha com o contrato mensal?
            </h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-[#DFE7F7] bg-[#F8FBFF] px-4 py-3"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#0B5FFF]"
                    size={19}
                  />

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B5FFF]">
              Como funciona
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Um processo simples para deixar a TI mais organizada.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              O contrato mensal cria uma rotina de suporte, acompanhamento e
              prevenção para que sua empresa não dependa apenas de atendimento
              emergencial.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[28px] border border-[#DFE7F7] bg-[#F8FBFF] p-6 shadow-lg shadow-blue-950/5"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#002198] text-lg font-black text-white">
                  {index + 1}
                </div>

                <h3 className="text-lg font-black text-[#0B1020]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1020] py-16 text-white lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-[#21B6FF]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#21B6FF]">
              Ideal para
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Empresas que precisam de suporte técnico confiável.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              O contrato mensal é indicado para empresas que querem reduzir
              improvisos, organizar sua estrutura de TI e ter atendimento
              técnico com mais previsibilidade.
            </p>
          </div>

          <div className="grid gap-4">
            {idealFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#21B6FF]"
                  size={20}
                />

                <span className="font-semibold leading-7 text-slate-100">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F8FBFF] py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="rounded-[34px] border border-[#DFE7F7] bg-white/85 p-8 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B5FFF]">
                  Próximo passo
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                  Vamos estruturar o suporte da sua empresa?
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                  Solicite um contato e entenda como funciona um contrato mensal
                  de TI voltado para estabilidade, organização e continuidade
                  operacional.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-[#DFE7F7] bg-[#F8FBFF] p-5">
                  <ClipboardCheck
                    className="text-[#0B5FFF]"
                    size={26}
                  />

                  <p className="mt-4 text-sm font-black text-[#0B1020]">
                    Diagnóstico técnico
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#DFE7F7] bg-[#F8FBFF] p-5">
                  <MonitorCog
                    className="text-[#0B5FFF]"
                    size={26}
                  />

                  <p className="mt-4 text-sm font-black text-[#0B1020]">
                    Suporte organizado
                  </p>
                </div>

                <div className="rounded-[24px] border border-[#DFE7F7] bg-[#F8FBFF] p-5">
                  <Headphones
                    className="text-[#0B5FFF]"
                    size={26}
                  />

                  <p className="mt-4 text-sm font-black text-[#0B1020]">
                    Atendimento contínuo
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-[#002198] px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
              >
                <span className="text-white">
                  Solicitar diagnóstico inicial
                </span>

                <ArrowRight
                  size={18}
                  className="text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}