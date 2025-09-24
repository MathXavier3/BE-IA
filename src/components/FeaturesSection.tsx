import React from "react";
import { motion } from "motion/react";
import { Shield, CheckCircle, Brain, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Guardrails Reais",
    subtitle: "BrandGuard",
    description:
      "Evite reprovações e mantenha a consistência da marca com nosso verificador de políticas e regras.",
    color: "from-blue-500 to-blue-700",
    glowColor: "rgba(59, 130, 246, 0.4)",
  },
  {
    icon: CheckCircle,
    title: "Bloqueio de Erro Caro",
    subtitle: "Pre-flight",
    description:
      "Valide UTMs, pixels e limites de orçamento antes de publicar, evitando perdas financeiras.",
    color: "from-emerald-500 to-emerald-700",
    glowColor: "rgba(34, 197, 94, 0.4)",
  },
  {
    icon: Brain,
    title: "Automação com Segurança",
    subtitle: "Automação Inteligente",
    description:
      "Nossa automação é 'suggest-only', ou seja, você mantém o controle, com sugestões de ±10-20% de pacing para otimização segura.",
    color: "from-purple-500 to-purple-700",
    glowColor: "rgba(147, 51, 234, 0.4)",
  },
  {
    icon: MessageSquare,
    title: "Relatórios que Agem",
    subtitle: "Relatório Narrativo",
    description:
      "Esqueça os gráficos vazios. Nossos relatórios narrativos explicam 'o que aconteceu / por que / o que fazer agora', para que você tome decisões estratégicas.",
    color: "from-orange-500 to-orange-700",
    glowColor: "rgba(249, 115, 22, 0.4)",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            O que diferencia o Be Mind.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6  -gray-700/50 hover:-gray-600/50 transition-all duration-300 h-full">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Animation */}
                <motion.div
                  className="absolute inset-0 rounded-2xl -2 -transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${feature.glowColor}, transparent) -box`,
                    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-blue-900/20 to-emerald-900/20 rounded-2xl p-8  -blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Recursos Pensados para Agências Reais
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Cada funcionalidade foi desenvolvida baseada em problemas reais que
            enfrentamos diariamente. Não é apenas IA por IA - é inteligência
            aplicada onde realmente importa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
