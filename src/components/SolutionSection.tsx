import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Shield, BarChart3, ArrowRight, Zap } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            O motor que impulsiona a BAUC.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Nós resolvemos nossos próprios desafios primeiro. A Bauc Mind
              nasceu como o nosso motor de inovação interno, uma plataforma
              dual-AGI que unifica criação e gestão de tráfego em um único
              fluxo.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Com ela, automatizamos o funil de campanha, da ideia inicial ao
              vídeo com 'cinema look', e garantimos a gestão com segurança e
              precisão.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Unified Flow Animation */}
              <div className="flex items-center space-x-6">
                {/* Step 1: Ideas */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-700/30 -2 -yellow-400/40 flex items-center justify-center backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(250, 204, 21, 0.3)",
                        "0 0 20px rgba(250, 204, 21, 0.6)",
                        "0 0 10px rgba(250, 204, 21, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-xs text-yellow-400 font-medium">
                      Ideas
                    </span>
                  </div>
                </motion.div>

                {/* Arrow 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </motion.div>

                {/* Step 2: BrandGuard */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/30 -2 -blue-400/40 flex items-center justify-center backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.6)",
                        "0 0 10px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  >
                    <Shield className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-xs text-blue-400 font-medium">
                      BrandGuard
                    </span>
                  </div>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ArrowRight className="w-6 h-6 text-emerald-400" />
                </motion.div>

                {/* Step 3: Optimization */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-700/30 -2 -emerald-400/40 flex items-center justify-center backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.3)",
                        "0 0 20px rgba(34, 197, 94, 0.6)",
                        "0 0 10px rgba(34, 197, 94, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
                  >
                    <BarChart3 className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-xs text-emerald-400 font-medium">
                      Otimização
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Connecting Flow Line */}
              <motion.div
                className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400/50 via-blue-400/50 to-emerald-400/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Dual AGI Highlight */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-900/20 to-emerald-900/20 rounded-2xl p-8  -blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-white">
              Plataforma Dual-AGI
            </h3>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Dois sistemas de IA especializados trabalhando em perfeita sintonia:
            um focado na criação de conteúdo cinematográfico e outro na
            otimização inteligente de campanhas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
