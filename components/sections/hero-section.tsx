"use client"

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Particles from '@/components/ui/particles'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Particles */}
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={100} 
        colors={['#14213D', '#FCA311', '#E5E5E5']}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#14213D]">
              Transformamos sua presença
              <span className="text-[#FCA311] block mt-2">digital em resultados reais</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              A Sansch potencializa seu negócio através de estratégias personalizadas 
              de social media e tráfego pago para gerar mais vendas e visibilidade.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                className="bg-[#14213D] hover:bg-[#0c1528] text-white text-lg py-6 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/5514997342092', '_blank')}
              >
                Entre em contato
              </Button>
              <Button 
                variant="outline"
                className="border-[#FCA311] text-[#FCA311] hover:bg-[#FCA311] hover:text-white text-lg py-6 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 group"
                onClick={() => window.open('https://wa.me/5514997342092?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.', '_blank')}
              >
                Solicite um orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14213D]/10 to-[#FCA311]/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Digital marketing team" 
                    className="object-cover w-full h-full rounded-2xl opacity-90"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#14213D] font-medium">Resultados crescentes</span>
                </div>
              </div>
              
              <div className="absolute -top-5 -left-5 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#FCA311] rounded-full animate-pulse"></div>
                  <span className="text-[#14213D] font-medium">Estratégias inovadoras</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-[#14213D] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#FCA311] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}