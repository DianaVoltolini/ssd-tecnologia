// src/components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contrato Mensal", href: "/contrato-mensal" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#DFE7F7] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr_1.15fr_0.7fr] lg:items-start">
          <div>
            <Image
              src="/images/logo-monograma-light.png"
              alt="SSD Tecnologia"
              width={320}
              height={140}
              className="h-auto w-[215px]"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Suporte de TI para empresas que precisam de segurança,
              estabilidade e atendimento técnico profissional.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#002198]">
              Atendimento
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <p>Atendimento remoto e presencial</p>
              <p>Empresas, escritórios e indústrias</p>
              <p>Blumenau e região</p>
              <p>Contrato mensal de TI</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#002198]">
              Contato
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <a
                href="tel:+5547999874509"
                className="flex items-center gap-3 transition hover:text-[#0B5FFF]"
              >
                <Phone size={16} className="shrink-0 text-[#0B5FFF]" />
                <span>(47) 99987-4509</span>
              </a>

              <a
                href="mailto:contato@ssdtecnologia.com.br"
                className="flex items-center gap-3 transition hover:text-[#0B5FFF]"
              >
                <Mail size={16} className="shrink-0 text-[#0B5FFF]" />
                <span>contato@ssdtecnologia.com.br</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#0B5FFF]"
                />

                <span className="leading-6">
                  Rua George Fridrich Mordhorst, 175 - Sala 01
                  <br />
                  Itoupava Central, Cep 89.062-220
                  <br />
                  Blumenau / SC
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FileText size={16} className="shrink-0 text-[#0B5FFF]" />
                <span>CNPJ 36.221.250/0001-07</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-[#002198]">
              Navegação
            </h3>

            <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#0B1020]">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#0B5FFF]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-[#DFE7F7] pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SSD Tecnologia. Todos os direitos reservados.</p>
          <p>Soluções inteligentes para sua empresa.</p>
        </div>
      </div>
    </footer>
  );
}