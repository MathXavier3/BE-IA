import { useState, useEffect } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { AlertTriangle, CheckCircle2, Link, Eye, Users, DollarSign, Rocket, XCircle } from 'lucide-react'
import { motion } from 'motion/react'

interface PreflightCheck {
  id: string
  name: string
  icon: any
  status: 'pending' | 'checking' | 'success' | 'warning' | 'error'
  progress: number
  description: string
  details?: string
}

interface PreflightPanelProps {
  onNext: () => void
  onBack: () => void
}

export function PreflightPanel({ onNext, onBack }: PreflightPanelProps) {
  const [checks, setChecks] = useState<PreflightCheck[]>([
    {
      id: 'utm',
      name: 'UTMs Válidas',
      icon: Link,
      status: 'pending',
      progress: 0,
      description: 'Verificando links de rastreamento',
      details: 'utm_source=facebook&utm_medium=video&utm_campaign=financas_q1'
    },
    {
      id: 'pixel',
      name: 'Pixel Instalado',
      icon: Eye,
      status: 'pending',
      progress: 0,
      description: 'Checando pixel de conversão',
      details: 'Facebook Pixel ID: 1234567890123456'
    },
    {
      id: 'audience',
      name: 'Segmentação Configurada',
      icon: Users,
      status: 'pending',
      progress: 0,
      description: 'Validando configuração de público',
      details: 'Público salvo: Mulheres 25-45 anos interessadas em finanças'
    },
    {
      id: 'budget',
      name: 'Orçamento e Limites',
      icon: DollarSign,
      status: 'pending',
      progress: 0,
      description: 'Verificando configurações de budget',
      details: 'Budget diário: R$ 200 | CPA máximo: R$ 50'
    }
  ])

  const [overallStatus, setOverallStatus] = useState<'checking' | 'ready' | 'blocked'>('checking')

  // Simulate preflight checks
  useEffect(() => {
    const runChecks = async () => {
      // UTM Check
      setTimeout(() => {
        setChecks(prev => prev.map(check => 
          check.id === 'utm' 
            ? { ...check, status: 'checking', progress: 50 }
            : check
        ))
        
        setTimeout(() => {
          setChecks(prev => prev.map(check => 
            check.id === 'utm' 
              ? { ...check, status: 'success', progress: 100 }
              : check
          ))
        }, 800)
      }, 500)

      // Pixel Check
      setTimeout(() => {
        setChecks(prev => prev.map(check => 
          check.id === 'pixel' 
            ? { ...check, status: 'checking', progress: 30 }
            : check
        ))
        
        setTimeout(() => {
          setChecks(prev => prev.map(check => 
            check.id === 'pixel' 
              ? { ...check, status: 'error', progress: 100, description: 'Pixel não encontrado no domínio' }
              : check
          ))
        }, 1200)
      }, 1000)

      // Audience Check
      setTimeout(() => {
        setChecks(prev => prev.map(check => 
          check.id === 'audience' 
            ? { ...check, status: 'checking', progress: 70 }
            : check
        ))
        
        setTimeout(() => {
          setChecks(prev => prev.map(check => 
            check.id === 'audience' 
              ? { ...check, status: 'success', progress: 100 }
              : check
          ))
        }, 1500)
      }, 1500)

      // Budget Check
      setTimeout(() => {
        setChecks(prev => prev.map(check => 
          check.id === 'budget' 
            ? { ...check, status: 'checking', progress: 90 }
            : check
        ))
        
        setTimeout(() => {
          setChecks(prev => prev.map(check => 
            check.id === 'budget' 
              ? { ...check, status: 'success', progress: 100 }
              : check
          ))
        }, 2000)
      }, 2000)
    }

    runChecks()
  }, [])

  // Update overall status based on individual checks
  useEffect(() => {
    const hasErrors = checks.some(check => check.status === 'error')
    const allCompleted = checks.every(check => check.status !== 'pending' && check.status !== 'checking')
    
    if (hasErrors) {
      setOverallStatus('blocked')
    } else if (allCompleted) {
      setOverallStatus('ready')
    }
  }, [checks])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <div className="w-5 h-5 bg-slate-600 rounded-full" />
      case 'checking':
        return <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />
      default:
        return null
    }
  }

  const getStatusLight = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-slate-500'
      case 'checking':
        return 'bg-blue-400 animate-pulse'
      case 'success':
        return 'bg-green-400'
      case 'warning':
        return 'bg-yellow-400'
      case 'error':
        return 'bg-red-400 animate-ping'
      default:
        return 'bg-slate-500'
    }
  }

  const getCheckBackground = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-900/20 border-green-700'
      case 'error':
        return 'bg-red-900/20 border-red-700'
      case 'warning':
        return 'bg-yellow-900/20 border-yellow-700'
      case 'checking':
        return 'bg-blue-900/20 border-blue-700'
      default:
        return 'bg-slate-800/50 border-slate-700'
    }
  }

  const hasErrors = checks.some(check => check.status === 'error')
  const successCount = checks.filter(check => check.status === 'success').length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
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
            <h1 className="text-4xl text-center text-white">Painel de Pre-flight</h1>
            <div className="w-20"></div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-300 text-lg">
              Verificação final antes do lançamento da campanha
            </p>
          </div>
        </div>

        {/* Cockpit-style Dashboard */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-8">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 border-4 border-slate-600 rounded-full flex items-center justify-center">
                  <div className={`
                    w-24 h-24 rounded-full flex items-center justify-center text-2xl
                    ${overallStatus === 'ready' 
                      ? 'bg-green-500 text-white' 
                      : overallStatus === 'blocked'
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-blue-500 text-white'
                    }
                  `}>
                    {overallStatus === 'ready' && <CheckCircle2 className="w-12 h-12" />}
                    {overallStatus === 'blocked' && <XCircle className="w-12 h-12" />}
                    {overallStatus === 'checking' && <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />}
                  </div>
                </div>
                <div className="absolute -inset-4">
                  <div className={`
                    w-full h-full border-2 rounded-full
                    ${overallStatus === 'ready' ? 'border-green-400' : 'border-slate-500'}
                  `} />
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl text-white mb-2">
                {overallStatus === 'ready' && 'Sistema Pronto para Lançamento'}
                {overallStatus === 'blocked' && 'Erros Críticos Detectados'}
                {overallStatus === 'checking' && 'Executando Verificações...'}
              </h2>
              <p className="text-slate-400">
                {successCount} de {checks.length} verificações aprovadas
              </p>
            </div>

            {/* Checks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {checks.map((check, index) => {
                const IconComponent = check.icon
                return (
                  <motion.div
                    key={check.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      p-4 rounded-lg border transition-all duration-500
                      ${getCheckBackground(check.status)}
                    `}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {/* Status Light */}
                      <div className={`
                        w-3 h-3 rounded-full
                        ${getStatusLight(check.status)}
                      `} />
                      
                      <IconComponent className="w-5 h-5 text-slate-300" />
                      <span className="text-white">{check.name}</span>
                      
                      <div className="ml-auto">
                        {getStatusIcon(check.status)}
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-2">
                      {check.description}
                    </p>
                    
                    {check.details && (
                      <p className="text-xs text-slate-500 font-mono bg-slate-900/50 p-2 rounded">
                        {check.details}
                      </p>
                    )}
                    
                    {check.status === 'checking' && (
                      <div className="mt-3">
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${check.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Critical Error Alert */}
            {hasErrors && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-900/30 border-2 border-red-600 rounded-lg p-6 mb-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <h3 className="text-xl text-red-300">ERRO CRÍTICO DETECTADO</h3>
                </div>
                <p className="text-red-200 mb-4">
                  O sistema detectou problemas que impedem o lançamento da campanha. 
                  Corrija os erros antes de prosseguir.
                </p>
                <Button
                  variant="destructive"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  disabled
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  BLOQUEAR ENVIO: Erros Críticos Detectados
                </Button>
              </motion.div>
            )}

            {/* Success State */}
            {overallStatus === 'ready' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-900/30 border-2 border-green-600 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl text-green-300">SISTEMA APROVADO</h3>
                </div>
                <p className="text-green-200 mb-4">
                  Todas as verificações foram concluídas com sucesso. 
                  A campanha está pronta para ser lançada.
                </p>
              </motion.div>
            )}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline"
              className="bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 px-6 py-3"
            >
              Revisar Configurações
            </Button>
            <Button 
              onClick={onNext}
              disabled={overallStatus !== 'ready'}
              className={`
                px-8 py-6 text-lg
                ${overallStatus === 'ready' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white' 
                  : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                }
              `}
            >
              <Rocket className="w-5 h-5 mr-2" />
              {overallStatus === 'ready' ? 'Publicar Campanha Agora' : 'Corrija os Erros para Continuar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}