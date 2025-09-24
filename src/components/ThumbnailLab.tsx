import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { CheckCircle2, Eye, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

interface Thumbnail {
  id: number
  title: string
  image: string
  contrast: 'Alto' | 'Médio' | 'Baixo'
  focus: string
  selected: boolean
  description: string
}

interface ThumbnailLabProps {
  onNext: () => void
  onBack: () => void
}

export function ThumbnailLab({ onNext, onBack }: ThumbnailLabProps) {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([
    {
      id: 1,
      title: "Mulher de Sucesso",
      image: "https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTg3MjgxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contrast: 'Alto',
      focus: 'Rosto + Emoção',
      selected: false,
      description: 'Foco na expressão de confiança e sucesso'
    },
    {
      id: 2,
      title: "Crescimento Financeiro",
      image: "https://images.unsplash.com/photo-1723443956765-fdc2100ec80e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBtb25leXxlbnwxfHx8fDE3NTg3MjgxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contrast: 'Alto',
      focus: 'Gráficos + Números',
      selected: false,
      description: 'Destaca resultados e crescimento'
    },
    {
      id: 3,
      title: "Família Feliz",
      image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzU4NjMzNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contrast: 'Médio',
      focus: 'Conexão Emocional',
      selected: false,
      description: 'Apelo emocional para segurança familiar'
    },
    {
      id: 4,
      title: "Urgência Temporal",
      image: "https://images.unsplash.com/photo-1649583501374-f2a7ab8a4cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmdlbnQlMjBjbG9jayUyMHRpbWV8ZW58MXx8fHwxNzU4NzI4MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      contrast: 'Alto',
      focus: 'Urgência + Ação',
      selected: false,
      description: 'Cria senso de urgência imediata'
    }
  ])

  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null)

  const handleSelectThumbnail = (id: number) => {
    setThumbnails(prev => prev.map(thumb => 
      thumb.id === id 
        ? { ...thumb, selected: true }
        : { ...thumb, selected: false }
    ))
    setSelectedThumbnail(id)
  }

  const getContrastColor = (contrast: string) => {
    switch (contrast) {
      case 'Alto': return 'text-green-400 border-green-400'
      case 'Médio': return 'text-yellow-400 border-yellow-400'
      case 'Baixo': return 'text-red-400 border-red-400'
      default: return 'text-gray-400 border-gray-400'
    }
  }

  const getContrastIcon = (contrast: string) => {
    switch (contrast) {
      case 'Alto': return <Zap className="w-3 h-3" />
      case 'Médio': return <Eye className="w-3 h-3" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 p-8">
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
            <h1 className="text-4xl text-center text-white">Laboratório de Thumbs</h1>
            <div className="w-20"></div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-300 text-lg mb-2">
              Escolha a thumbnail que vai "parar o scroll"
            </p>
            <div className="inline-flex items-center gap-2 bg-orange-900/20 border border-orange-700 rounded-lg px-4 py-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm">
                Dica: Thumbnails com maior contraste maximizam o "scroll-stop"
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {thumbnails.map((thumbnail, index) => (
            <motion.div
              key={thumbnail.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className={`
                bg-slate-800/50 border-slate-700 backdrop-blur-sm transition-all duration-300 overflow-hidden
                ${thumbnail.selected 
                  ? 'ring-2 ring-orange-400 bg-slate-700/70 shadow-lg shadow-orange-400/20' 
                  : 'hover:bg-slate-700/50'
                }
              `}>
                <div className="relative">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={thumbnail.image}
                      alt={thumbnail.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay for contrast effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Contrast Badge */}
                    <div className={`
                      absolute top-2 right-2 px-2 py-1 rounded-full text-xs border 
                      ${getContrastColor(thumbnail.contrast)} bg-black/70 backdrop-blur-sm
                      flex items-center gap-1
                    `}>
                      {getContrastIcon(thumbnail.contrast)}
                      {thumbnail.contrast}
                    </div>

                    {/* Selected Indicator */}
                    {thumbnail.selected && (
                      <div className="absolute top-2 left-2 bg-orange-500 rounded-full p-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white mb-2">{thumbnail.title}</h3>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline" className="text-xs text-slate-300 border-slate-600">
                        {thumbnail.focus}
                      </Badge>
                    </div>

                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {thumbnail.description}
                    </p>

                    <Button
                      onClick={() => handleSelectThumbnail(thumbnail.id)}
                      className={`
                        w-full 
                        ${thumbnail.selected 
                          ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                          : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }
                      `}
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      {thumbnail.selected ? 'Selecionado' : 'Escolher este Thumb'}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Preview Section */}
        {selectedThumbnail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl text-white mb-4">Preview do Thumbnail Selecionado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={thumbnails.find(t => t.id === selectedThumbnail)?.image || ''}
                        alt="Thumbnail Selecionado"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Análise de Performance:</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-300">Contraste:</span>
                          <span className={getContrastColor(thumbnails.find(t => t.id === selectedThumbnail)?.contrast || 'Baixo')}>
                            {thumbnails.find(t => t.id === selectedThumbnail)?.contrast}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">Scroll-Stop Estimado:</span>
                          <span className="text-green-400">85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">CTR Projetado:</span>
                          <span className="text-blue-400">3.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Action Button */}
        <div className="text-center">
          <Button 
            onClick={onNext}
            disabled={!selectedThumbnail}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedThumbnail ? 'Gerar Vídeo' : 'Selecione um Thumbnail'}
          </Button>
        </div>
      </div>
    </div>
  )
}