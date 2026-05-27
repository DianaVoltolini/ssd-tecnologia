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
    default:
      "SSD Tecnologia | Suporte de TI e Assistência Técnica em Computadores em Blumenau",
    template: "%s | SSD Tecnologia",
  },

  description:
    "Suporte de TI, assistência técnica em computadores, manutenção de computadores, redes, servidores, informática empresarial e contrato mensal de TI para empresas em Blumenau e região.",

  keywords: [
    "SSD Tecnologia",
    "suporte de TI Blumenau",
    "assistência técnica em computadores",
    "assistência técnica Blumenau",
    "assistência técnica informática",
    "manutenção de computadores",
    "manutenção de computadores Blumenau",
    "suporte técnico empresarial",
    "suporte técnico para empresas",
    "empresa de TI em Blumenau",
    "informática empresarial",
    "contrato mensal de TI",
    "redes corporativas",
    "servidores para empresas",
    "consultoria em TI",
    "suporte remoto",
    "suporte presencial",
    "TI para empresas",
    "microcomputadores",
    "manutenção de micros",
  ],

  authors: [{ name: "SSD Tecnologia" }],
  creator: "SSD Tecnologia",
  publisher: "SSD Tecnologia",

  alternates: {
    canonical: "https://ssdtecnologia.com.br",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title:
      "SSD Tecnologia | Suporte de TI e Assistência Técnica em Computadores em Blumenau",
    description:
      "Assistência técnica em computadores, manutenção, suporte técnico empresarial, redes, servidores e contrato mensal de TI para empresas em Blumenau e região.",
    url: "https://ssdtecnologia.com.br",
    siteName: "SSD Tecnologia",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo-light.png",
        width: 1200,
        height: 630,
        alt: "SSD Tecnologia - Suporte de TI em Blumenau",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SSD Tecnologia | Suporte de TI e Assistência Técnica em Computadores",
    description:
      "Suporte de TI, assistência técnica em computadores, manutenção, redes, servidores e contrato mensal de TI para empresas.",
    images: ["/images/logo-light.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SSD Tecnologia",
  url: "https://ssdtecnologia.com.br",
  logo: "https://ssdtecnologia.com.br/images/logo-light.png",
  image: "https://ssdtecnologia.com.br/images/logo-light.png",
  description:
    "Suporte de TI, assistência técnica em computadores, manutenção de computadores, redes corporativas, servidores e contrato mensal de TI para empresas em Blumenau e região.",
  telephone: "+5547999874509",
  email: "contato@ssdtecnologia.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua George Fridrich Mordhorst, 175 - Sala 01",
    addressLocality: "Blumenau",
    addressRegion: "SC",
    postalCode: "89062-220",
    addressCountry: "BR",
  },
  areaServed: [
    "Blumenau",
    "Itoupava Central",
    "Vale do Itajaí",
    "Santa Catarina",
  ],
  priceRange: "$$",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Suporte de TI para empresas",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Assistência técnica em computadores",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manutenção de computadores",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Contrato mensal de TI",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Redes corporativas e servidores",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}