"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { ArrowUpCircle, Users, DollarSign, MousePointer } from "lucide-react";

const resultData = [
  { month: "Jan", followers: 300, engagement: 2.4, cpl: 5.2 },
  { month: "Fev", followers: 430, engagement: 2.9, cpl: 4.8 },
  { month: "Mar", followers: 580, engagement: 3.2, cpl: 4.2 },
  { month: "Abr", followers: 700, engagement: 3.6, cpl: 3.9 },
  { month: "Mai", followers: 920, engagement: 4.1, cpl: 3.5 },
  { month: "Jun", followers: 1050, engagement: 4.5, cpl: 3.0 },
];

const metrics = [
  {
    id: 1,
    label: "Crescimento de seguidores",
    value: "+250%",
    description: "Aumento médio em 6 meses",
    icon: <Users className="h-8 w-8 text-[#FCA311]" />,
  },
  {
    id: 2,
    label: "Redução no CPL",
    value: "-42%",
    description: "Custo por lead em campanhas",
    icon: <DollarSign className="h-8 w-8 text-[#FCA311]" />,
  },
  {
    id: 3,
    label: "Taxa de Engajamento",
    value: "+87%",
    description: "Aumento nas interações",
    icon: <ArrowUpCircle className="h-8 w-8 text-[#FCA311]" />,
  },
  {
    id: 4,
    label: "Taxa de Conversão",
    value: "+63%",
    description: "Aumento médio na conversão",
    icon: <MousePointer className="h-8 w-8 text-[#FCA311]" />,
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#14213D]"
          >
            Nossos <span className="text-[#FCA311]">Resultados</span>
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
            Estratégias que geram crescimento real e mensurável para nossos
            clientes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Follower Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#14213D] mb-6">
              Crescimento de Seguidores
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={resultData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorFollowers"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#14213D" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#14213D"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="followers"
                    stroke="#14213D"
                    fillOpacity={1}
                    fill="url(#colorFollowers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* CPL Reduction Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#14213D] mb-6">
              Redução no Custo por Lead
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={resultData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cpl" fill="#FCA311" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#FCA311]"
            >
              <div className="flex items-start">
                <div className="mr-4">{metric.icon}</div>
                <div>
                  <p className="text-gray-600 text-sm">{metric.label}</p>
                  <h3 className="text-3xl font-bold text-[#14213D]">
                    {metric.value}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
