// src/app/not-found.tsx

import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] text-[#0B1020]">
      <Header />

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfe7f715_1px,transparent_1px),linear-gradient(to_bottom,#dfe7f715_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#21B6FF]/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0B5FFF]">
            Página não encontrada
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight md:text-7xl">
            O caminho que você acessou não existe.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Volte para a página inicial ou solicite um orçamento para falar com
            a SSD Tecnologia.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#002198] px-8 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
            >
              Voltar ao início
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-[#DFE7F7] bg-white px-8 py-4 font-bold text-[#002198] transition hover:border-[#0B5FFF]"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}