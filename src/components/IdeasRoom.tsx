import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { CheckCircle2, XCircle, Lightbulb, Target, Heart, Zap } from 'lucide-react'
import { motion } from 'motion/react'

interface Idea {
  id: number
  title: string
  description: string
  category: string
  icon: any
  selected: boolean
}

interface IdeasRoomProps {
  onNext: () => void
  onBack: () => void
}

export function IdeasRoom({ onNext, onBack }: IdeasRoomProps) {
  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: 1,
      title: "Hook: Economia Consciente",
      description: "Foque em como seu produto ajuda a economizar dinheiro a longo prazo, destacando o ROI para o consumidor.",
      category: "Benefício Econômico",
      icon: Target,
      selected: false
    },
    {
      id: 2,
      title: "Apelo Emocional: Transformação",
      description: "Mostre a jornada de transformação do cliente, antes e depois de usar seu produto ou serviço.",
      category: "Conexão Emocional",
      icon: Heart,
      selected: false
    },
    {
      id: 3,
      title: "Urgência: Oferta Limitada",
      description: "Crie senso de urgência com ofertas por tempo limitado ou estoque reduzido.",
      category: "Gatilho de Urgência",
      icon: Zap,
      selected: false
    },
    {
      id: 4,
      title: "Autoridade: Depoimentos",
      description: "Use depoimentos reais e cases de sucesso para construir credibilidade e confiança.",
      category: "Prova Social",
      icon: Lightbulb,
      selected: false
    },
    {
      id: 5,
      title: "Problema/Solução",
      description: "Identifique uma dor específica do público e apresente seu produto como a solução definitiva.",
      category: "Problem-Solution Fit",
      icon: Target,
      selected: false
    },
    {
      id: 6,
      title: "Comparação: Antes vs Agora",
      description: "Mostre como a vida era difícil antes da sua solução e como fica fácil depois.",
      category: "Demonstração",
      icon: Zap,
      selected: false
    }
  ])

  const selectedCount = ideas.filter(idea => idea.selected).length
  const progress = Math.min((selectedCount / 3) * 100, 100)

  const handleIdeaToggle = (id: number, select: boolean) => {
    setIdeas(prev => prev.map(idea => 
      idea.id === id ? { ...idea, selected: select } : idea
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button 
              onClick={onBack}
              variant="outline" 
              className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50"
            >
              ← Voltar
            </Button>
            <h1 className="text-4xl text-center text-white">Sala de Ideias</h1>
            <div className="w-20"></div> {/* Spacer */}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm text-slate-300 mb-2">
              <span>Fase 2 de 7: Ideias</span>
              <span>{selectedCount}/3 selecionadas</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p className="text-slate-300 text-lg">
            Selecione 2-3 ângulos que mais se alinham com sua estratégia
          </p>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {ideas.map((idea) => {
            const IconComponent = idea.icon
            return (
              <motion.div
                key={idea.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idea.id * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Card className={`
                  h-full bg-slate-800/50 border-slate-700 backdrop-blur-sm cursor-pointer transition-all duration-300
                  ${idea.selected 
                    ? 'ring-2 ring-blue-400 bg-slate-700/70 shadow-lg shadow-blue-400/20' 
                    : 'hover:bg-slate-700/50 hover:border-slate-600'
                  }
                `}>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`
                        p-3 rounded-lg 
                        ${idea.selected ? 'bg-blue-500/20' : 'bg-slate-700/50'}
                      `}>
                        <IconComponent className={`
                          w-6 h-6 
                          ${idea.selected ? 'text-blue-400' : 'text-slate-400'}
                        `} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white mb-1">{idea.title}</h3>
                        <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                          {idea.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {idea.description}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleIdeaToggle(idea.id, true)}
                        size="sm"
                        className={`
                          flex-1 
                          ${idea.selected 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                          }
                        `}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Selecionar
                      </Button>
                      
                      <Button
                        onClick={() => handleIdeaToggle(idea.id, false)}
                        size="sm"
                        variant="outline"
                        className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50"
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Button 
            onClick={onNext}
            disabled={selectedCount === 0}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedCount === 0 
              ? 'Selecione pelo menos 1 ideia' 
              : `Continuar com ${selectedCount} ideia${selectedCount > 1 ? 's' : ''}`
            }
          </Button>
        </div>
      </div>
    </div>
  )
}