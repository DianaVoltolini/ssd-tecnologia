// src/components/ContactForm.tsx

"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

const SSD_WHATSAPP_NUMBER = "5547999874509";

function formatPhone(value: string) {
  const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);

  if (onlyNumbers.length <= 2) {
    return onlyNumbers;
  }

  if (onlyNumbers.length <= 6) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  }

  if (onlyNumbers.length <= 10) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
      2,
      6
    )}-${onlyNumbers.slice(6)}`;
  }

  return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
    2,
    7
  )}-${onlyNumbers.slice(7)}`;
}

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    cidade: "",
    servico: "Contrato mensal de TI",
    mensagem: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = `
Olá, vim pelo site da SSD Tecnologia.

*Nome:* ${form.nome}
*Empresa:* ${form.empresa}
*WhatsApp:* ${form.whatsapp}
*E-mail:* ${form.email}
*Cidade:* ${form.cidade}
*Serviço desejado:* ${form.servico}

*Mensagem:*
${form.mensagem}
`;

    const url = `https://wa.me/${SSD_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-white/10 bg-white p-6 text-[#0B1020] shadow-2xl shadow-black/20 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-bold">Nome</span>
          <input
            required
            value={form.nome}
            onChange={(event) =>
              setForm({ ...form, nome: event.target.value })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
            placeholder="Seu nome"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">Empresa</span>
          <input
            required
            value={form.empresa}
            onChange={(event) =>
              setForm({ ...form, empresa: event.target.value })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
            placeholder="Nome da empresa"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">WhatsApp</span>
          <input
            required
            type="tel"
            inputMode="numeric"
            maxLength={15}
            value={form.whatsapp}
            onChange={(event) =>
              setForm({
                ...form,
                whatsapp: formatPhone(event.target.value),
              })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
            placeholder="(47) 99999-9999"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">E-mail</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
            placeholder="email@empresa.com.br"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">Cidade</span>
          <input
            value={form.cidade}
            onChange={(event) =>
              setForm({ ...form, cidade: event.target.value })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
            placeholder="Blumenau"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">Serviço desejado</span>
          <select
            value={form.servico}
            onChange={(event) =>
              setForm({ ...form, servico: event.target.value })
            }
            className="w-full rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
          >
            <option>Contrato mensal de TI</option>
            <option>Suporte remoto ou presencial</option>
            <option>Manutenção</option>
            <option>Redes corporativas</option>
            <option>Servidores</option>
            <option>Consultoria em TI</option>
            <option>Venda de equipamentos</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block space-y-2">
        <span className="text-sm font-bold">Mensagem</span>
        <textarea
          rows={5}
          value={form.mensagem}
          onChange={(event) =>
            setForm({ ...form, mensagem: event.target.value })
          }
          className="w-full resize-none rounded-2xl border border-[#DFE7F7] px-4 py-3 outline-none transition focus:border-[#0B5FFF]"
          placeholder="Conte rapidamente o que sua empresa precisa."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#002198] px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#0B5FFF]"
      >
        Solicitar atendimento
        <ArrowRight size={18} />
      </button>
    </form>
  );
}