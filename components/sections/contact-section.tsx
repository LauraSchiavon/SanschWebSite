"use client";

import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessagesSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#14213D]"
          >
            Entre em <span className="text-[#FCA311]">Contato</span>
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
            Vamos conversar sobre como podemos transformar sua presença digital.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-none overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#14213D] mb-6">
                  Envie-nos uma mensagem
                </h3>
                <form
                  action="https://formsubmit.co/sansch.agencia@outlook.com"
                  method="POST"
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://sansch-web-site.vercel.app/obrigado"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="border-gray-300 focus:border-[#FCA311] focus:ring-[#FCA311] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-gray-300 focus:border-[#FCA311] focus:ring-[#FCA311] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        className="border-gray-300 focus:border-[#FCA311] focus:ring-[#FCA311] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        className="border-gray-300 focus:border-[#FCA311] focus:ring-[#FCA311] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="border-gray-300 focus:border-[#FCA311] focus:ring-[#FCA311] transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#14213D] hover:bg-[#0c1528] text-white flex items-center justify-center gap-2"
                  >
                    <Send size={16} /> Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#14213D] text-white p-8 rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-8">
                Informações de contato
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-5 w-5" />,
                    title: "Telefone",
                    content: "+55 14 99734-2092",
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    title: "E-mail",
                    content: "sansch.agencia@outlook.com",
                  },
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    title: "Endereço",
                    content: "Atendemos todo o Brasil",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    title: "Horário",
                    content: "Segunda a Sexta: 9h às 18h",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FCA311]/20 rounded-lg flex items-center justify-center text-[#FCA311]">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">
                  Precisa de uma resposta rápida?
                </h4>
                <Button
                  className="w-full bg-[#FCA311] hover:bg-[#e08b00] text-white flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open("https://wa.me/5514997342092", "_blank")
                  }
                >
                  <MessagesSquare size={16} /> Fale conosco pelo WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
