import { useState, useEffect } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, TrendingDown, AlertTriangle, Eye, MousePointer, DollarSign, Users, Lightbulb, Pause, Play, RefreshCw } from 'lucide-react'
import { motion } from 'motion/react'

interface Metric {
  name: string
  value: string
  change: number
  trend: 'up' | 'down' | 'stable'
  icon: any
}

interface Anomaly {
  id: string
  type: 'warning' | 'critical' | 'opportunity'
  title: string
  description: string
  impact: string
  suggestion: string
}

interface PerformanceObservatoryProps {
  onBack: () => void
}

export function PerformanceObservatory({ onBack }: PerformanceObservatoryProps) {
  const [metrics, setMetrics] = useState<Metric[]>([
    { name: 'CPA', value: 'R$ 42,50', change: 15, trend: 'up', icon: DollarSign },
    { name: 'CVR', value: '3.2%', change: -5, trend: 'down', icon: TrendingUp },
    { name: 'CTR', value: '2.8%', change: -12, trend: 'down', icon: MousePointer },
    { name: 'Impressões', value: '125.4K', change: 8, trend: 'up', icon: Eye },
  ])

  const [anomalies, setAnomalies] = useState<Anomaly[]>([
    {
      id: '1',
      type: 'warning',
      title: 'CPA Aumentando em 15%',
      description: 'O custo por aquisição aumentou significativamente nas últimas 24 horas.',
      impact: 'Pode comprometer o ROI da campanha se não corrigido',
      suggestion: 'Pausar segmentação com baixo desempenho e testar novos criativos'
    },
    {
      id: '2',
      type: 'critical',
      title: 'Fadiga de Anúncio Detectada',
      description: 'A segmentação para o público "Mulheres 25-35" mostra sinais de fadiga.',
      impact: 'CTR caiu 40% nos últimos 3 dias',
      suggestion: 'Pausar anúncio atual e ativar nova variação de criativo'
    }
  ])

  const [isLive, setIsLive] = useState(true)
  const [selectedPeriod, setSelectedPeriod] = useState('24h')

  const performanceData = [
    { time: '00:00', cpa: 35, cvr: 3.8, ctr: 3.2, impressions: 8500 },
    { time: '04:00', cpa: 38, cvr: 3.6, ctr: 3.0, impressions: 9200 },
    { time: '08:00', cpa: 42, cvr: 3.4, ctr: 2.9, impressions: 12000 },
    { time: '12:00', cpa: 45, cvr: 3.2, ctr: 2.8, impressions: 15200 },
    { time: '16:00', cpa: 43, cvr: 3.1, ctr: 2.7, impressions: 18500 },
    { time: '20:00', cpa: 41, cvr: 3.3, ctr: 2.9, impressions: 16800 },
    { time: '24:00', cpa: 42.5, cvr: 3.2, ctr: 2.8, impressions: 14200 },
  ]

  const segmentData = [
    { segment: 'Mulheres 25-35', performance: 85, cpa: 38, volume: 45 },
    { segment: 'Mulheres 36-45', performance: 92, cpa: 35, volume: 38 },
    { segment: 'Homens 25-35', performance: 78, cpa: 48, volume: 17 },
  ]

  const getTrendIcon = (trend: string, change: number) => {
    if (trend === 'up') {
      return <TrendingUp className={`w-4 h-4 ${change > 0 ? 'text-red-400' : 'text-green-400'}`} />
    } else if (trend === 'down') {
      return <TrendingDown className={`w-4 h-4 ${change < 0 ? 'text-red-400' : 'text-green-400'}`} />
    }
    return null
  }

  const getAnomalyColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-yellow-500 bg-yellow-900/20'
      case 'critical': return 'border-red-500 bg-red-900/20'
      case 'opportunity': return 'border-green-500 bg-green-900/20'
      default: return 'border-slate-500 bg-slate-800/50'
    }
  }

  const getAnomalyIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-400" />
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-400" />
      case 'opportunity': return <Lightbulb className="w-5 h-5 text-green-400" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
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
            <h1 className="text-4xl text-center text-white">Observatório de Performance</h1>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsLive(!isLive)}
                size="sm"
                variant={isLive ? "default" : "outline"}
                className={isLive ? "bg-green-600 hover:bg-green-700" : "bg-slate-800/50 border-slate-600"}
              >
                {isLive ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
                {isLive ? 'AO VIVO' : 'PAUSADO'}
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-300 text-sm">{metric.name}</span>
                      </div>
                      {getTrendIcon(metric.trend, metric.change)}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl text-white">{metric.value}</span>
                      <span className={`text-sm ${
                        metric.change > 0 && metric.name === 'CPA' ? 'text-red-400' :
                        metric.change > 0 ? 'text-green-400' :
                        metric.change < 0 && metric.name === 'CPA' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Anomaly Alerts */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-2xl text-white">Alertas de Anomalia</h2>
            <Badge variant="outline" className="text-orange-400 border-orange-400 animate-pulse">
              {anomalies.length} Detectado{anomalies.length !== 1 ? 's' : ''}
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {anomalies.map((anomaly, index) => (
              <motion.div
                key={anomaly.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border backdrop-blur-sm ${getAnomalyColor(anomaly.type)}`}>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      {getAnomalyIcon(anomaly.type)}
                      <div className="flex-1">
                        <h3 className="text-white mb-2">{anomaly.title}</h3>
                        <p className="text-slate-300 text-sm mb-3">{anomaly.description}</p>
                        <p className="text-slate-400 text-xs mb-4">
                          <strong>Impacto:</strong> {anomaly.impact}
                        </p>
                        <div className="bg-slate-900/50 p-3 rounded-lg mb-4">
                          <p className="text-blue-300 text-sm">
                            <strong>Sugestão:</strong> {anomaly.suggestion}
                          </p>
                        </div>
                        <Button 
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Implementar Sugestão
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Performance Charts */}
        <Tabs defaultValue="timeline" className="mb-8">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger value="timeline">Timeline de Performance</TabsTrigger>
            <TabsTrigger value="segments">Análise por Segmento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl text-white">Métricas em Tempo Real</h3>
                  <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <TabsList className="bg-slate-700/50">
                      <TabsTrigger value="1h">1h</TabsTrigger>
                      <TabsTrigger value="24h">24h</TabsTrigger>
                      <TabsTrigger value="7d">7d</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="cpa" stroke="#EF4444" strokeWidth={2} />
                      <Line type="monotone" dataKey="cvr" stroke="#10B981" strokeWidth={2} />
                      <Line type="monotone" dataKey="ctr" stroke="#3B82F6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="segments">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl text-white mb-6">Performance por Segmento</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={segmentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="segment" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="performance" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Narrative Report */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <div className="p-8">
            <h2 className="text-2xl text-white mb-6">Relatório Narrativo da Campanha</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-blue-300 mb-2">O que aconteceu?</h3>
                <p className="text-slate-300 leading-relaxed">
                  O CPA da campanha "Finanças Q1" aumentou em 15% nas últimas 24 horas, passando de R$ 37,00 para R$ 42,50. 
                  Simultaneamente, o CTR caiu 12%, indicando fadiga de anúncio no público principal.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-yellow-300 mb-2">Por que aconteceu?</h3>
                <p className="text-slate-300 leading-relaxed">
                  A segmentação para o público "Mulheres 25-35 anos" mostrou sinais de fadiga, com CTR caindo 40% nos últimos 3 dias. 
                  A frequência média aumentou para 4.2, indicando que estamos mostrando o mesmo anúncio repetidamente para o mesmo público.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-green-300 mb-2">O que fazer agora?</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Sugerimos pausar o anúncio atual para o público "Mulheres 25-35 anos" e ativar a nova variação de criativo 
                  gerada pela ANI. Também recomendamos expandir a segmentação para "Mulheres 36-45 anos", que está 
                  performando 8% melhor que a média.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                  <Lightbulb className="w-4 h-4" />
                  <span>Learning Card Gerado e salvo para otimizações futuras</span>
                </div>
                
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Implementar Sugestões Automaticamente
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}