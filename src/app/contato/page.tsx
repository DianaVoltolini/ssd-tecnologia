// src/app/contato/page.tsx

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import ContactForm from "../../components/ContactForm";

import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function ContatoPage() {
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
              Contato SSD Tecnologia
            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
              Fale com a SSD Tecnologia.
            </h1>

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
                    <h2 className="text-lg font-black">
                      WhatsApp
                    </h2>

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
                    <h2 className="text-lg font-black">
                      E-mail
                    </h2>

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
                    <h2 className="text-lg font-black">
                      Endereço
                    </h2>

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
                    <h2 className="text-lg font-black">
                      Atendimento
                    </h2>

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