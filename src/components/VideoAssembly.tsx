import { useState, useEffect } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { Play, Pause, RotateCcw, CheckCircle2, AlertTriangle, Shield, Volume2 } from 'lucide-react'
import { motion } from 'motion/react'

interface BrandGuardCheck {
  name: string
  status: 'checking' | 'approved' | 'warning' | 'error'
  description: string
}

interface VideoAssemblyProps {
  onNext: () => void
  onBack: () => void
}

export function VideoAssembly({ onNext, onBack }: VideoAssemblyProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(30)
  const [brandGuardStatus, setBrandGuardStatus] = useState<'checking' | 'approved' | 'warning'>('checking')
  const [checks, setChecks] = useState<BrandGuardCheck[]>([
    { name: 'Logo', status: 'checking', description: 'Verificando posicionamento e qualidade' },
    { name: 'Cores da Marca', status: 'checking', description: 'Analisando paleta de cores' },
    { name: 'Tom de Voz', status: 'checking', description: 'Verificando consistência da mensagem' },
    { name: 'Diretrizes Visuais', status: 'checking', description: 'Checando compliance visual' }
  ])

  // Simulate video timeline
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 0.1, duration))
      }, 100)
    } else if (currentTime >= duration) {
      setIsPlaying(false)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  // Simulate BrandGuard checking process
  useEffect(() => {
    const timer = setTimeout(() => {
      setChecks(prev => prev.map((check, index) => {
        if (index === 0) return { ...check, status: 'approved' }
        return check
      }))
      
      setTimeout(() => {
        setChecks(prev => prev.map((check, index) => {
          if (index === 1) return { ...check, status: 'approved' }
          return check
        }))
        
        setTimeout(() => {
          setChecks(prev => prev.map((check, index) => {
            if (index === 2) return { ...check, status: 'warning', description: 'Tom ligeiramente informal detectado' }
            return check
          }))
          
          setTimeout(() => {
            setChecks(prev => prev.map((check, index) => {
              if (index === 3) return { ...check, status: 'approved' }
              return check
            }))
            setBrandGuardStatus('warning')
          }, 1000)
        }, 800)
      }, 600)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const restart = () => {
    setCurrentTime(0)
    setIsPlaying(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'checking':
        return <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      case 'approved':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'checking': return 'border-blue-400 bg-blue-400/10'
      case 'approved': return 'border-green-400 bg-green-400/10'
      case 'warning': return 'border-yellow-400 bg-yellow-400/10'
      case 'error': return 'border-red-400 bg-red-400/10'
      default: return 'border-slate-600 bg-slate-800/50'
    }
  }

  const timelineScenes = [
    { start: 0, end: 5, name: 'Abertura', color: 'bg-blue-500' },
    { start: 5, end: 12, name: 'Problema', color: 'bg-red-500' },
    { start: 12, end: 20, name: 'Solução', color: 'bg-green-500' },
    { start: 20, end: 25, name: 'Benefícios', color: 'bg-purple-500' },
    { start: 25, end: 30, name: 'CTA', color: 'bg-orange-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-8">
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
            <h1 className="text-4xl text-center text-white">Painel de Montagem Automática</h1>
            <div className="w-20"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="xl:col-span-2 space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
                  {/* Video Preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <p className="text-slate-300">Pré-visualização do Vídeo</p>
                      <p className="text-slate-400 text-sm">30 segundos</p>
                    </div>
                  </div>

                  {/* BrandGuard Seal */}
                  <motion.div 
                    className={`
                      absolute top-4 right-4 px-3 py-2 rounded-full border-2 backdrop-blur-sm
                      flex items-center gap-2 text-sm
                      ${brandGuardStatus === 'checking' 
                        ? 'border-blue-400 bg-blue-400/20 text-blue-300' 
                        : brandGuardStatus === 'approved'
                        ? 'border-green-400 bg-green-400/20 text-green-300'
                        : 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                      }
                    `}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Shield className="w-4 h-4" />
                    {brandGuardStatus === 'checking' && 'Verificando...'}
                    {brandGuardStatus === 'approved' && 'BRANDGUARD ✓'}
                    {brandGuardStatus === 'warning' && 'BRANDGUARD ⚠'}
                  </motion.div>
                </div>

                {/* Player Controls */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={togglePlayPause}
                      size="sm"
                      className="bg-slate-700 hover:bg-slate-600"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    
                    <Button
                      onClick={restart}
                      size="sm"
                      variant="outline"
                      className="bg-slate-800/50 border-slate-600 text-slate-300"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>

                    <div className="flex items-center gap-2 ml-auto">
                      <Volume2 className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300 text-sm">
                        {Math.floor(currentTime)}s / {duration}s
                      </span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <Progress value={(currentTime / duration) * 100} className="h-2" />
                    <div className="flex gap-1 h-6">
                      {timelineScenes.map((scene, index) => (
                        <div
                          key={index}
                          className={`${scene.color} rounded-sm flex items-center justify-center text-xs text-white px-1`}
                          style={{ 
                            width: `${((scene.end - scene.start) / duration) * 100}%` 
                          }}
                        >
                          {scene.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline Details */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl text-white mb-4">Timeline Simplificada</h3>
                <div className="space-y-3">
                  {timelineScenes.map((scene, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-4 h-4 ${scene.color} rounded`}></div>
                      <span className="text-slate-300">{scene.name}</span>
                      <span className="text-slate-500 text-sm ml-auto">
                        {scene.start}s - {scene.end}s
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* BrandGuard Panel */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl text-white">BrandGuard</h3>
                </div>

                <div className="space-y-4">
                  {checks.map((check, index) => (
                    <motion.div
                      key={check.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        p-4 rounded-lg border transition-all duration-500
                        ${getStatusColor(check.status)}
                      `}
                    >
                      <div className="flex items-start gap-3">
                        {getStatusIcon(check.status)}
                        <div className="flex-1 min-w-0">
                          <p className="text-white">{check.name}</p>
                          <p className="text-sm text-slate-400 mt-1">
                            {check.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {brandGuardStatus === 'warning' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300">Atenção Detectada</span>
                    </div>
                    <p className="text-yellow-200 text-sm">
                      Tom de voz ligeiramente informal detectado. Isso pode afetar a percepção da marca.
                    </p>
                  </motion.div>
                )}

                {brandGuardStatus === 'approved' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-4 bg-green-900/20 border border-green-600 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="text-green-300">Totalmente Aprovado!</span>
                    </div>
                    <p className="text-green-200 text-sm">
                      Todos os elementos estão em conformidade com as diretrizes da marca.
                    </p>
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Brand Elements Summary */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-lg text-white mb-4">Elementos Verificados</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Logo</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">OK</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Cores</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">OK</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Tom de Voz</span>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">⚠</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Diretrizes</span>
                    <Badge variant="outline" className="text-green-400 border-green-400">OK</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 px-6 py-3"
            >
              Revisar Novamente
            </Button>
            <Button 
              onClick={onNext}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
            >
              Prosseguir para Pre-flight
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}