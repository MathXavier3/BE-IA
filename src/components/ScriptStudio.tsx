import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle2, Play, Eye } from 'lucide-react'
import { motion } from 'motion/react'

interface Script {
  id: number
  title: string
  content: string
  type: string
  duration: string
  cta: string
  approved: boolean
}

interface ScriptStudioProps {
  onNext: () => void
  onBack: () => void
}

export function ScriptStudio({ onNext, onBack }: ScriptStudioProps) {
  const [scripts, setScripts] = useState<Script[]>([
    {
      id: 1,
      title: "Roteiro 1: Foco no Benefício",
      content: "Você sabia que 80% das pessoas gastam mais do que ganham?\n\n[CENA 1 - PROBLEMA]\nMostre uma pessoa estressada olhando as contas\n\n[CENA 2 - SOLUÇÃO]\nApresente nosso produto como a solução\n\n[CENA 3 - BENEFÍCIO]\nMostre os resultados: economia de R$ 500/mês\n\n[CENA 4 - CALL TO ACTION]\n'Clique agora e transforme sua vida financeira em 30 dias!'",
      type: "Benefício",
      duration: "30s",
      cta: "Clique agora e transforme sua vida financeira!",
      approved: false
    },
    {
      id: 2,
      title: "Roteiro 2: Apelo Emocional",
      content: "Imagine nunca mais perder o sono por causa das contas...\n\n[CENA 1 - SONHO]\nMostre uma família feliz, sem preocupações financeiras\n\n[CENA 2 - REALIDADE]\nContraste com a realidade atual: stress, contas\n\n[CENA 3 - TRANSFORMAÇÃO]\nNosso produto como ponte entre realidade e sonho\n\n[CENA 4 - FUTURO]\nA vida que você merece está a um clique de distância\n\n[CALL TO ACTION]\n'Sua família merece essa tranquilidade. Comece hoje!'",
      type: "Emocional",
      duration: "25s",
      cta: "Sua família merece essa tranquilidade. Comece hoje!",
      approved: false
    },
    {
      id: 3,
      title: "Roteiro 3: Urgência + Prova Social",
      content: "Mais de 10.000 pessoas já transformaram suas finanças...\n\n[CENA 1 - PROVA SOCIAL]\nDepoimentos rápidos de clientes reais\n\n[CENA 2 - RESULTADOS]\nMostre números: 'Economizei R$ 2.000 em 3 meses'\n\n[CENA 3 - URGÊNCIA]\n'Últimas 48 horas para garantir 50% OFF'\n\n[CENA 4 - ESCASSEZ]\n'Apenas 100 vagas restantes neste mês'\n\n[CALL TO ACTION]\n'Garante sua vaga agora - Oferta expira em breve!'",
      type: "Urgência",
      duration: "20s",
      cta: "Garante sua vaga agora - Oferta expira em breve!",
      approved: false
    }
  ])

  const [selectedScript, setSelectedScript] = useState<number | null>(null)

  const handleApproveScript = (id: number) => {
    setScripts(prev => prev.map(script => 
      script.id === id ? { ...script, approved: true } : { ...script, approved: false }
    ))
    setSelectedScript(id)
  }

  const storyboardFrames = [
    { title: "Cena 1: Abertura Dramática", description: "Hook inicial que prende a atenção" },
    { title: "Cena 2: Problema Apresentado", description: "Identifica a dor do público" },
    { title: "Cena 3: Solução Revelada", description: "Apresenta o produto/serviço" },
    { title: "Cena 4: Benefícios Claros", description: "Mostra os resultados esperados" },
    { title: "Cena 5: Prova Social", description: "Depoimentos ou cases de sucesso" },
    { title: "Cena 6: Call to Action", description: "Convite claro para ação" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-8">
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
            <h1 className="text-4xl text-center text-white">Estúdio de Roteiro</h1>
            <div className="w-20"></div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-300 text-lg">
              Selecione o roteiro que melhor representa sua estratégia
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scripts Column */}
          <div className="space-y-6">
            <h2 className="text-2xl text-white mb-4">Roteiros Sugeridos</h2>
            
            {scripts.map((script) => (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: script.id * 0.1 }}
              >
                <Card className={`
                  bg-slate-800/50 border-slate-700 backdrop-blur-sm transition-all duration-300
                  ${script.approved 
                    ? 'ring-2 ring-emerald-400 bg-slate-700/70 shadow-lg shadow-emerald-400/20' 
                    : 'hover:bg-slate-700/50'
                  }
                `}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl text-white mb-2">{script.title}</h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-slate-300 border-slate-600">
                            {script.type}
                          </Badge>
                          <Badge variant="outline" className="text-slate-300 border-slate-600">
                            {script.duration}
                          </Badge>
                        </div>
                      </div>
                      {script.approved && (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>

                    <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                      <pre className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                        {script.content}
                      </pre>
                    </div>

                    <div className="bg-slate-700/30 p-3 rounded-lg mb-4">
                      <p className="text-xs text-slate-400 mb-1">CALL TO ACTION:</p>
                      <p className="text-emerald-400">{script.cta}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleApproveScript(script.id)}
                        className={`
                          flex-1
                          ${script.approved 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                            : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                          }
                        `}
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Aprovar Roteiro
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Storyboard Column */}
          <div className="space-y-6">
            <h2 className="text-2xl text-white mb-4">Visualização de Storyboard</h2>
            
            {selectedScript ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                {storyboardFrames.map((frame, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                    <div className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Play className="w-6 h-6 text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white mb-1">{frame.title}</h4>
                          <p className="text-sm text-slate-400">{frame.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-700 rounded-lg">
                  <p className="text-emerald-300 text-sm">
                    ✓ Storyboard gerado com base no roteiro aprovado
                  </p>
                </div>
              </motion.div>
            ) : (
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <div className="p-8 text-center">
                  <Play className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">
                    Aprove um roteiro para visualizar o storyboard
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button 
            onClick={onNext}
            disabled={!selectedScript}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedScript ? 'Criar Thumbnails' : 'Aprove um Roteiro para Continuar'}
          </Button>
        </div>
      </div>
    </div>
  )
}