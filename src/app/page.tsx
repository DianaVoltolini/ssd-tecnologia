// src/app/page.tsx

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ContactForm from "../components/ContactForm";
import InfrastructureSection from "../components/InfrastructureSection";
import Clients from "../components/sections/Clients";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MonitorCog,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Contrato Mensal de TI",
    description:
      "Suporte contínuo, atendimento prioritário e acompanhamento preventivo para empresas que precisam de estabilidade.",
  },
  {
    icon: Headphones,
    title: "Suporte Remoto e Presencial",
    description:
      "Atendimento técnico rápido para resolver problemas, orientar equipes e reduzir paradas operacionais.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description:
      "Manutenção preventiva e corretiva em computadores, estações de trabalho e equipamentos corporativos.",
  },
  {
    icon: Network,
    title: "Redes Corporativas",
    description:
      "Instalação, organização e manutenção de redes para empresas, escritórios e indústrias.",
  },
  {
    icon: Server,
    title: "Servidores",
    description:
      "Configuração, manutenção e suporte para ambientes com servidores e infraestrutura empresarial.",
  },
  {
    icon: MonitorCog,
    title: "Consultoria em TI",
    description:
      "Diagnóstico e orientação para melhorar a estrutura tecnológica, segurança e produtividade da empresa.",
  },
];

const benefits = [
  "Atendimento rápido",
  "Foco empresarial",
  "Suporte humanizado",
  "Organização da infraestrutura",
  "Atendimento remoto e presencial",
  "Cobertura em Blumenau e região",
];

const reasons = [
  "Reduzir paradas e problemas recorrentes",
  "Ter suporte técnico remoto e presencial",
  "Organizar redes, equipamentos e servidores",
  "Contar com atendimento empresarial recorrente",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FBFF] text-[#0B1020]">
      <Header />

      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#21B6FF]/20 blur-3xl" />
        <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-[#0B5FFF]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <ShieldCheck size={16} />
              TI corporativa em Blumenau e região
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Suporte de TI profissional para empresas.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Contrato mensal, suporte técnico, manutenção, redes, servidores e
              atendimento corporativo para empresas que precisam de segurança,
              estabilidade e resposta rápida.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#002198] px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
              >
                <span className="text-white">Solicitar atendimento</span>
                <ArrowRight size={18} className="text-white" />
              </a>

              <a
                href="https://wa.me/5547999874509"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#DFE7F7] bg-white/85 px-7 py-4 text-base font-bold text-[#002198] backdrop-blur-xl transition hover:border-[#0B5FFF]"
              >
                Falar pelo WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-[#DFE7F7] bg-white/80 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#002198]">80km</p>
                <p className="mt-1 text-sm text-slate-500">
                  Blumenau e região
                </p>
              </div>

              <div className="rounded-[24px] border border-[#DFE7F7] bg-white/80 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#002198]">B2B</p>
                <p className="mt-1 text-sm text-slate-500">Foco empresarial</p>
              </div>

              <div className="rounded-[24px] border border-[#DFE7F7] bg-white/80 p-5 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <p className="text-3xl font-black text-[#002198]">TI</p>
                <p className="mt-1 text-sm text-slate-500">
                  Suporte organizado
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#0B5FFF]/20 to-[#21B6FF]/10 blur-2xl" />

            <div className="relative rounded-[34px] border border-[#DFE7F7] bg-white/85 p-5 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
              <div className="rounded-[28px] bg-[#0B1020] p-7 text-white">
                <div className="mb-7 flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-blue-100">SSD Tecnologia</p>
                    <p className="text-2xl font-black md:text-3xl">
                      Operação protegida
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#21B6FF]/20">
                    <Building2 className="text-[#21B6FF]" size={28} />
                  </div>
                </div>

                <div className="grid gap-3">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <CheckCircle2
                        className="shrink-0 text-[#21B6FF]"
                        size={19}
                      />

                      <span className="text-sm font-semibold leading-6">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="mx-auto max-w-7xl px-6 py-16 lg:py-20"
      >
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
            <MonitorCog size={16} />
            Serviços SSD Tecnologia
          </div>

          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Soluções para manter sua empresa funcionando com segurança.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Mais do que resolver problemas, a SSD Tecnologia organiza a
            infraestrutura da empresa para reduzir riscos e melhorar a
            continuidade operacional.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#0B5FFF]/20 hover:shadow-2xl hover:shadow-blue-950/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198] transition group-hover:bg-[#002198] group-hover:text-white">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-black leading-tight">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <a
            href="/servicos"
            className="inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white px-6 py-3.5 text-sm font-bold text-[#002198] shadow-lg shadow-blue-950/5 transition hover:border-[#0B5FFF]"
          >
            Ver todos os serviços
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-[#F8FBFF] px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm">
              <ShieldCheck size={16} />
              Por que escolher a SSD
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Sua empresa precisa de estabilidade, não de improviso.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              A SSD Tecnologia atua para que sua empresa tenha suporte
              recorrente, estrutura organizada e atendimento técnico confiável
              quando precisar.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
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

      <section id="contrato" className="bg-[#F8FBFF] py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <ShieldCheck size={16} />
              Contrato mensal
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Um parceiro de TI para acompanhar sua empresa continuamente.
            </h2>
          </div>

          <div className="rounded-[32px] border border-[#DFE7F7] bg-white/85 p-8 shadow-xl shadow-blue-950/5 backdrop-blur-xl">
            <p className="text-base leading-8 text-slate-700 md:text-lg">
              Com o contrato mensal da SSD Tecnologia, sua empresa conta com
              suporte contínuo, atendimento ágil e acompanhamento preventivo
              para reduzir falhas, evitar paradas e manter a operação
              funcionando com segurança.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Atendimento prioritário",
                "Suporte remoto e presencial",
                "Manutenção preventiva",
                "Acompanhamento técnico",
                "Organização da infraestrutura",
                "Redução de riscos operacionais",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#0B5FFF]" size={19} />

                  <span className="text-sm font-semibold text-slate-700 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/contrato-mensal"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#002198] px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
            >
              <span className="text-white">Conhecer contrato mensal</span>
              <ArrowRight size={18} className="text-white" />
            </a>
          </div>
        </div>
      </section>

      <InfrastructureSection />

      <Clients />

      <section
        id="contato"
        className="relative overflow-hidden bg-[#F8FBFF] py-16 lg:py-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE7F7] bg-white/85 px-4 py-2 text-sm font-semibold text-[#002198] shadow-sm backdrop-blur-xl">
              <ShieldCheck size={16} />
              Contato SSD Tecnologia
            </div>

            <h2 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
              Fale com a SSD Tecnologia.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Solicite um contato para suporte técnico, manutenção, redes,
              servidores ou contrato mensal de TI para sua empresa.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <div className="rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198]">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black">WhatsApp</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      (47) 99987-4509
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198]">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black">E-mail</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      contato@ssdtecnologia.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black">Endereço</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Rua George Fridrich Mordhorst, 175 - Sala 01
                      <br />
                      Itoupava Central, Cep 89.062-220
                      <br />
                      Blumenau / SC
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#DFE7F7] bg-white/85 p-6 shadow-lg shadow-blue-950/5 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FBFF] text-[#002198]">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-black">Atendimento</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Atendimento remoto e presencial para empresas,
                      escritórios e indústrias em Blumenau e região.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-[#DFE7F7] bg-white/85 p-3 shadow-2xl shadow-blue-950/10 backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}