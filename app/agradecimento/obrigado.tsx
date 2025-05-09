"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <CheckCircle className="w-16 h-16 text-[#38A169] mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-[#14213D] mb-2">
        Obrigado pelo contato!
      </h1>
      <p className="text-gray-600 max-w-md mb-6">
        Recebemos sua mensagem com sucesso. Em breve entraremos em contato com
        você.
      </p>
      <Link href="/">
        <a className="px-6 py-3 bg-[#FCA311] text-white rounded-lg hover:bg-[#e08b00] transition">
          Voltar para a página inicial
        </a>
      </Link>
    </main>
  );
}
