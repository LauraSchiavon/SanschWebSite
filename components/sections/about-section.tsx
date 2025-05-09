"use client"

import { motion } from 'framer-motion'
import { CheckCircle2, Users, LineChart, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: <Users className="h-10 w-10 text-[#FCA311]" />,
    title: 'Gestão de Redes Sociais',
    description: 'Criamos e gerenciamos conteúdo relevante para sua marca se destacar nas plataformas digitais.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-[#FCA311]" />,
    title: 'Criação de Conteúdo',
    description: 'Desenvolvemos conteúdos estratégicos e criativos que geram engajamento e conversão.'
  },
  {
    icon: <LineChart className="h-10 w-10 text-[#FCA311]" />,
    title: 'Tráfego Pago',
    description: 'Estratégias de Meta Ads e Google Ads para maximizar seu retorno sobre investimento.'
  }
]

export default function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#14213D]"
          >
            Sobre a <span className="text-[#FCA311]">Sansch</span>
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
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Somos especialistas em social media e tráfego pago, focados em criar estratégias 
            digitais que transformam visibilidade em vendas reais para o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-[#14213D]/5 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#14213D] mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#14213D] mb-6">Por que escolher a Sansch?</h3>
              <ul className="space-y-4">
                {[
                  'Estratégias personalizadas para seu negócio',
                  'Acompanhamento detalhado de resultados',
                  'Equipe especializada e atualizada',
                  'Foco em ROI mensurável'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#FCA311] mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#14213D] p-8 md:p-12 flex items-center justify-center">
              <blockquote className="text-white italic text-lg">
                "Nossa missão é transformar sua marca em uma potência digital,
                através de estratégias que geram resultados reais e mensuráveis."
                <footer className="mt-4 font-semibold text-[#FCA311]">— Equipe Sansch</footer>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}