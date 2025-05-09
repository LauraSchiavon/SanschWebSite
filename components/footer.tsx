"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Descrição + Redes Sociais */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/image/logo.png"
                alt="Logo da Sansch"
                width={120}
                height={40}
              />
            </Link>
            <p className="text-sm mb-4">
              Transformamos sua presença digital em resultados reais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/sansch_agencia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FCA311] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61572360503890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FCA311] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#hero", label: "Início" },
                { href: "#about", label: "Sobre" },
                { href: "#services", label: "Serviços" },
                { href: "#results", label: "Resultados" },
                { href: "#contact", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#FCA311] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-base font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Gestão de Redes Sociais",
                "Criação de Conteúdo",
                "Meta Ads",
                "Google Ads",
                "Gestão de Tráfego",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="hover:text-[#FCA311] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chamada para ação */}
          <div>
            <h3 className="text-base font-semibold mb-4">Vamos conversar?</h3>
            <p className="text-sm mb-4">
              Estamos prontos para transformar sua presença digital.
            </p>
            <Button
              className="w-full bg-[#FCA311] hover:bg-[#e08b00] text-white flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                window.open("https://wa.me/5514997342092", "_blank")
              }
            >
              <Send size={16} /> Fale Conosco
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-white">
          &copy; {new Date().getFullYear()} Sansch. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
