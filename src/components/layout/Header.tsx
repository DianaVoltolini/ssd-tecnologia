// src/components/layout/Header.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contrato Mensal", href: "/contrato-mensal" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DFE7F7] bg-white/96 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="relative flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/logo-light.png"
            alt="SSD Tecnologia"
            width={250}
            height={80}
            priority
            className="h-auto w-[200px] object-contain"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-[17px]
                font-semibold
                text-[#0B1020]
                transition
                duration-200
                hover:text-[#0B5FFF]
                after:absolute
                after:-bottom-2
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-[#0B5FFF]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DFE7F7] bg-white text-[#002198] shadow-sm md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-[#DFE7F7] bg-white px-6 py-6 shadow-2xl shadow-blue-950/5 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-2xl
                  px-4
                  py-4
                  text-base
                  font-semibold
                  text-[#0B1020]
                  transition
                  hover:bg-[#F8FBFF]
                  hover:text-[#0B5FFF]
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}