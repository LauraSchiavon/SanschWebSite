"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    content: 'A Sansch revolucionou nossa presença digital. As estratégias de tráfego pago reduziram nosso custo por lead em 40% e as redes sociais nunca tiveram tanto engajamento.',
    author: 'Fernanda Silva',
    role: 'CEO',
    company: 'TechSolutions',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    content: 'Desde que contratamos a Sansch para gerenciar nossas redes sociais, nossa marca ganhou vida. O conteúdo é criativo, profissional e realmente conecta com nosso público.',
    author: 'Ricardo Oliveira',
    role: 'Diretor de Marketing',
    company: 'Empreendimentos Global',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    content: 'A estratégia de Google Ads desenvolvida pela equipe da Sansch nos trouxe um ROI de 320%. Finalmente encontramos uma agência que entende nosso negócio e entrega resultados.',
    author: 'Camila Mendes',
    role: 'Proprietária',
    company: 'Boutique Elegance',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    content: 'Transformação total. Nossa audiência cresceu 200% em 6 meses e as vendas online aumentaram exponencialmente. A Sansch realmente entende de tráfego pago e social media.',
    author: 'Gabriel Santos',
    role: 'Gerente Comercial',
    company: 'Construções Modernas',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      nextTestimonial()
    }, 8000)

    return () => resetTimeout()
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#14213D] to-[#1d2d4d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            O que nossos <span className="text-[#FCA311]">clientes</span> dizem
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1 bg-[#FCA311] mx-auto mt-4 mb-8"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-300"
          >
            Histórias reais de transformação digital que ajudamos a construir.
          </motion.p>
        </div>

        <div className="relative px-4 md:px-12">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, type: 'tween' }}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 relative">
                  <Quote className="h-12 w-12 text-[#FCA311]/30 absolute top-6 left-6" />
                  <div className="md:flex items-start gap-6">
                    <div className="mb-6 md:mb-0 md:w-1/4">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-gray-700 text-lg md:text-xl mb-6 italic">
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div>
                        <h4 className="font-bold text-[#14213D]">
                          {testimonials[currentIndex].author}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            className="absolute top-1/2 -left-4 md:left-0 transform -translate-y-1/2 bg-white border-[#FCA311] hover:bg-[#FCA311] hover:text-white w-10 h-10 p-2 rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="absolute top-1/2 -right-4 md:right-0 transform -translate-y-1/2 bg-white border-[#FCA311] hover:bg-[#FCA311] hover:text-white w-10 h-10 p-2 rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight />
          </Button>
        </div>

        {/* Testimonial dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-[#FCA311]' : 'bg-white/30'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}