import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Users, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { DemoModal } from "./DemoModal";

interface CTASectionProps {
  onNavigateToStudio: () => void;
}

export function CTASection({ onNavigateToStudio }: CTASectionProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-600/20 to-blue-600/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            Transforme a sua agência. Junte-se à revolução.
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            O futuro do marketing digital é inteligente. E o seu é agora.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/30  -blue-400/40 mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
            <p className="text-gray-400">Redução no tempo de produção</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600/30 to-emerald-800/30  -emerald-400/40 mb-4">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">3x</h3>
            <p className="text-gray-400">Mais campanhas simultâneas</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-800/30  -purple-400/40 mb-4">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-400">Agências na lista de espera</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
          >
            <motion.span
              className="flex items-center"
              animate={{
                textShadow: [
                  "0 0 5px rgba(59, 130, 246, 0.5)",
                  "0 0 10px rgba(59, 130, 246, 0.8)",
                  "0 0 5px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Solicite uma Demonstração
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Button>

          <Button
            onClick={() =>
              window.open(
                "https://calendly.com/lorenacsilva/bauc-mind",
                "_blank"
              )
            }
            className="bg-white text-white hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agende sua Demonstração
          </Button>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"></div>
          <span>Um produto by Bauc Mind</span>
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="mt-32 pt-16 pb-8 bg-gradient-to-t from-gray-900/50 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Logo e Descrição */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-white font-bold text-2xl">Bauc Mind</span>
            </div>
            <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
              Transformando agências com inteligência artificial. Do briefing ao
              performance, tudo automatizado e otimizado para resultados
              excepcionais.
            </p>
          </div>

          {/* Links e Informações */}
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            {/* Produto */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-4">Produto</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Funcionalidades
                </a>
              </div>
            </div>

            {/* Empresa */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-4">Empresa</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Suporte */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-4">Suporte</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Central de Ajuda
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  © 2025 Bauc. Todos os direitos reservados.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Termos de Uso
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
}
