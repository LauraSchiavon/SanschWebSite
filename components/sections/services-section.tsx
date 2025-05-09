"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Instagram, 
  Facebook, 
  TrendingUp, 
  BarChart3, 
  Megaphone, 
  Share2 
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Gestão de Redes Sociais',
    description: 'Cuidamos de todo o processo de criação, publicação e análise de conteúdo para suas redes sociais, gerando engajamento e fortalecendo sua presença digital.',
    icon: <Instagram className="h-10 w-10" />,
    features: [
      'Planejamento estratégico de conteúdo',
      'Design de posts e stories',
      'Copywriting especializado',
      'Análise de desempenho mensal',
      'Interação com audiência'
    ],
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Criação de Conteúdo',
    description: 'Produzimos conteúdos relevantes e otimizados para diferentes plataformas, aumentando seu alcance e autoridade no mercado.',
    icon: <Share2 className="h-10 w-10" />,
    features: [
      'Fotografia e vídeos profissionais',
      'Conteúdos para blog e newsletter',
      'Posts e carrosséis de alta conversão',
      'Reels e conteúdos em vídeo',
      'Infográficos e materiais informativos'
    ],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Meta Ads',
    description: 'Campanhas publicitárias otimizadas para Facebook e Instagram que geram leads, vendas e resultados mensuráveis para seu negócio.',
    icon: <Facebook className="h-10 w-10" />,
    features: [
      'Segmentação avançada de público',
      'Criação de criativos de alta conversão',
      'Otimização contínua de campanhas',
      'Teste A/B para melhor performance',
      'Relatórios detalhados de resultados'
    ],
    image: 'https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Google Ads',
    description: 'Estratégias de anúncios no Google para captar clientes no momento exato em que buscam por seus produtos ou serviços.',
    icon: <BarChart3 className="h-10 w-10" />,
    features: [
      'Pesquisa de palavras-chave estratégicas',
      'Estruturação profissional de campanhas',
      'Redação de anúncios persuasivos',
      'Otimização por conversão',
      'Remarketing inteligente'
    ],
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Estratégia Digital',
    description: 'Desenvolvimento de estratégias digitais completas, unindo presença orgânica e paga para maximizar seus resultados online.',
    icon: <TrendingUp className="h-10 w-10" />,
    features: [
      'Análise competitiva de mercado',
      'Definição de objetivos e KPIs',
      'Jornada de compra do cliente',
      'Funil de vendas otimizado',
      'Estratégia integrada de canais'
    ],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Gestão de Tráfego',
    description: 'Monitoramento e otimização de campanhas de tráfego pago para garantir o melhor custo por aquisição e ROI para seu negócio.',
    icon: <Megaphone className="h-10 w-10" />,
    features: [
      'Gestão integrada de plataformas',
      'Otimização de conversões',
      'Distribuição estratégica de investimento',
      'Redução do custo por aquisição',
      'Escalabilidade de resultados'
    ],
    image: 'https://images.pexels.com/photos/990818/pexels-photo-990818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
]

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(1)

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#14213D]"
          >
            Nossos <span className="text-[#FCA311]">Serviços</span>
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
            Oferecemos soluções completas para potencializar sua presença digital
            e transformar visitantes em clientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Service Navigation */}
          <div className="md:col-span-2">
            <div className="sticky top-24 space-y-2">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * service.id }}
                  className={`w-full flex items-center p-4 rounded-lg text-left transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-[#14213D] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className={`mr-4 p-2 rounded-full ${
                    activeService === service.id 
                      ? 'bg-[#FCA311]/20 text-[#FCA311]' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{service.title}</h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="md:col-span-4">
            {services.map((service) => (
              service.id === activeService && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="relative h-64 md:h-80">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/90 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <h4 className="font-semibold text-[#14213D] mb-4">O que incluímos:</h4>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-[#FCA311] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className="w-full bg-[#FCA311] hover:bg-[#e08b00] text-white"
                      onClick={() => window.open('https://wa.me/5514997342092?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20' + encodeURIComponent(service.title), '_blank')}
                    >
                      Solicite um orçamento
                    </Button>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}