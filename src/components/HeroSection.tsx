import React, { useState } from "react";
import { motion } from "motion/react";
import { Camera, BarChart3, Shield, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { DemoModal } from "./DemoModal";

interface HeroSectionProps {
  onNavigateToStudio: () => void;
}

export function HeroSection({ onNavigateToStudio }: HeroSectionProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          {/* Digital Wire Animations */}
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <linearGradient
                id="wireGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00BFFF" />
                <stop offset="100%" stopColor="#50C878" />
              </linearGradient>
              <linearGradient
                id="wireGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#50C878" />
                <stop offset="100%" stopColor="#00BFFF" />
              </linearGradient>
            </defs>

            {/* Animated connecting lines */}
            <motion.path
              d="M 200 200 Q 400 300 600 200 T 1000 200"
              stroke="url(#wireGradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
            <motion.path
              d="M 100 400 Q 300 500 500 400 T 900 400"
              stroke="url(#wireGradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <motion.path
              d="M 300 600 Q 500 700 700 600 T 1100 600"
              stroke="url(#wireGradient1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
          </svg>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm">
            <Camera className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm  -emerald-500/30">
            <BarChart3 className="w-8 h-8 text-emerald-400" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-sm">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A sua agência nunca mais será a mesma.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Liberte-se do manual. Otimize o tempo, maximize os resultados e eleve
          sua agência a um novo patamar de inovação com a inteligência
          artificial mais avançada do mercado.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <Button
            onClick={() => {
              console.log("Botão clicado, abrindo modal");
              setIsDemoModalOpen(true);
            }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <motion.span
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
            </motion.span>
          </Button>

          <Button
            onClick={onNavigateToStudio}
            variant="outline"
            className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Be Mind
          </Button>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => {
          console.log("Fechando modal");
          setIsDemoModalOpen(false);
        }}
      />
    </section>
  );
}
