// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ssdtecnologia.com.br"),
  title: {
    default: "SSD Tecnologia | Suporte de TI para Empresas em Blumenau",
    template: "%s | SSD Tecnologia",
  },
  description:
    "Suporte técnico, contrato mensal de TI, manutenção, redes, servidores, consultoria e venda de equipamentos para empresas em Blumenau e região.",
  keywords: [
    "SSD Tecnologia",
    "suporte de TI Blumenau",
    "contrato mensal de TI",
    "empresa de TI em Blumenau",
    "suporte técnico empresarial",
    "manutenção de computadores para empresas",
    "redes corporativas",
    "servidores",
    "consultoria em TI",
    "TI para empresas",
  ],
  authors: [{ name: "SSD Tecnologia" }],
  creator: "SSD Tecnologia",
  publisher: "SSD Tecnologia",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/icon-ssd.png",
  },
  openGraph: {
    title: "SSD Tecnologia | Suporte de TI para Empresas em Blumenau",
    description:
      "Soluções inteligentes em tecnologia para empresas que precisam de segurança, estabilidade e suporte profissional.",
    url: "https://ssdtecnologia.com.br",
    siteName: "SSD Tecnologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-light.png",
        width: 1200,
        height: 630,
        alt: "SSD Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSD Tecnologia | Suporte de TI para Empresas em Blumenau",
    description:
      "Contrato mensal de TI, suporte técnico, redes, servidores e consultoria para empresas em Blumenau e região.",
    images: ["/images/logo-light.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}