"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Sansch<span className="text-[#FCA311]">.</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Transformamos sua presença digital em resultados reais.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-[#FCA311] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-[#FCA311] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-[#FCA311] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#FCA311] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'Gestão de Redes Sociais', 
                'Criação de Conteúdo', 
                'Meta Ads', 
                'Google Ads',
                'Estratégia Digital'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-gray-300 hover:text-[#FCA311] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Vamos conversar?</h3>
            <p className="text-gray-300 mb-4">
              Estamos prontos para transformar sua presença digital.
            </p>
            <Button
              className="w-full bg-[#FCA311] hover:bg-[#e08b00] text-white flex items-center justify-center gap-2"
              onClick={() => window.open('https://wa.me/5514997342092', '_blank')}
            >
              <Send size={16} /> Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            &copy; {new Date().getFullYear()} Sansch. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}