import React from 'react';
import { motion } from 'motion/react';
import { Camera, BarChart3, AlertCircle } from 'lucide-react';

export function ChallengeSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            O problema não é o marketing. É o processo.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              O que acontece quando você precisa escalar sem aumentar sua equipe? Quando o tempo de produção de um vídeo consome o orçamento? Quando um erro de configuração em uma campanha custa caro?
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As agências enfrentam um cenário onde a inovação é crucial, mas os processos manuais e a falta de integração limitam o potencial de crescimento. As ferramentas de criação e as de gestão de tráfego vivem em mundos separados, e essa desconexão se traduz em perda de tempo e dinheiro.
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
              {/* Disconnected Circles */}
              <div className="flex items-center space-x-12">
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/30 border-2 border-blue-400/40 flex items-center justify-center backdrop-blur-sm">
                    <Camera className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-sm text-blue-400 font-medium">Criação</span>
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 border-2 border-emerald-400/40 flex items-center justify-center backdrop-blur-sm">
                    <BarChart3 className="w-12 h-12 text-emerald-400" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-sm text-emerald-400 font-medium">Gestão</span>
                  </div>
                </motion.div>
              </div>

              {/* Dotted Line with Alert */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 border-t-2 border-dotted border-red-400"></div>
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <div className="w-8 border-t-2 border-dotted border-red-400"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-xs text-red-400 font-medium">Desconexão</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}