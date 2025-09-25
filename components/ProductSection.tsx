import React from "react";
import { motion } from "motion/react";
import { Brain, Star, Crown, Sparkles } from "lucide-react";

export function ProductSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Conheça BMind: A inteligência que você sempre quis.
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
              Acreditamos que essa revolução não deve ser um segredo. Por isso,
              estamos levando o poder da nossa tecnologia para outras agências,
              mas em uma plataforma com identidade própria.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              O BMind é o nosso SaaS, uma solução poderosa com o core
              tecnológico que nos coloca à frente.
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center mb-4">
                <Crown className="w-6 h-6 text-yellow-400 mr-3" />
                <h4 className="text-lg font-bold text-white">
                  Estratégia "Frontier Inside"
                </h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nossa estratégia é 'Frontier Inside'. A versão mais avançada
                continua sendo a nossa, mas o AI Studio Pro entrega um
                desempenho de ponta, com funcionalidades e barreiras que
                protegem o nosso diferencial.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* AI Studio Pro Logo Concept */}
              <motion.div
                className="relative w-48 h-48 mx-auto"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/30 to-emerald-400/30"></div>

                {/* Middle Ring */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-blue-400/50"
                  animate={{
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>

                {/* Inner Core */}
                <motion.div
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/40 to-emerald-600/40 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
                      "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(34, 197, 94, 0.4)",
                      "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Brain className="w-16 h-16 text-white" />
                </motion.div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-blue-400"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 60}deg) translateY(-80px)`,
                    }}
                    animate={{
                      scale: [0.5, 1, 0.5],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Product Label */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">BMind</h3>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-blue-400 font-medium">
                    A melhor IA do mercado
                  </span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Differentiator */}
        <motion.div
          className="text-center bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-emerald-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-emerald-400 mr-3" />
            <h3 className="text-xl font-bold text-white">
              Independente mas Poderoso
            </h3>
          </div>
          <p className="text-gray-300 max-w-4xl mx-auto">
            É a melhor IA do mercado, feita sob medida para o seu sucesso, sem o
            vínculo direto com a BAUC. Uma identidade própria com toda a
            potência tecnológica que você precisa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
