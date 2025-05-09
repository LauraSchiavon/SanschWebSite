"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#results", label: "Resultados" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/image/logo.png"
                alt="Logo da Sansch"
                width={120}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#FCA311] transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-[#FCA311] hover:bg-[#e08b00] text-white transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open("https://wa.me/5514997342092", "_blank")
                }
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FCA311] focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FCA311] hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full mt-2 bg-[#FCA311] hover:bg-[#e08b00] text-white"
              onClick={() =>
                window.open("https://wa.me/5514997342092", "_blank")
              }
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
