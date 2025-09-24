import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Brain, Database, CheckCircle2 } from "lucide-react";

interface BriefingData {
  objetivo: string;
  publicoAlvo: string;
  mensagemCentral: string;
  orcamento: string;
  deadline: string;
  observacoes: string;
}

interface BriefingPanelProps {
  onNext: () => void;
}

export function BriefingPanel({ onNext }: BriefingPanelProps) {
  const [briefingData, setBriefingData] = useState<BriefingData>({
    objetivo: "",
    publicoAlvo: "",
    mensagemCentral: "",
    orcamento: "",
    deadline: "",
    observacoes: "",
  });

  const [completeness, setCompleteness] = useState(0);

  useEffect(() => {
    const fields = Object.values(briefingData);
    const filledFields = fields.filter((field) => field.trim() !== "").length;
    const percentage = Math.round((filledFields / fields.length) * 90);
    setCompleteness(percentage);
  }, [briefingData]);

  const handleInputChange = (field: keyof BriefingData, value: string) => {
    setBriefingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl mb-12 text-center text-white">
          Bauc Mind: Nova Campanha
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário de Briefing */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <Label className="text-slate-200 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    Objetivo da Campanha
                  </Label>
                  <Input
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Ex: Aumentar conversões em 30% para nosso novo produto..."
                    value={briefingData.objetivo}
                    onChange={(e) =>
                      handleInputChange("objetivo", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-200 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    Público-Alvo
                  </Label>
                  <Input
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Ex: Mulheres de 25-40 anos, empresárias..."
                    value={briefingData.publicoAlvo}
                    onChange={(e) =>
                      handleInputChange("publicoAlvo", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-200 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    Mensagem Central
                  </Label>
                  <Textarea
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                    placeholder="Qual é a mensagem principal que você quer transmitir?"
                    value={briefingData.mensagemCentral}
                    onChange={(e) =>
                      handleInputChange("mensagemCentral", e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      Orçamento
                    </Label>
                    <Input
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      placeholder="R$ 10.000"
                      value={briefingData.orcamento}
                      onChange={(e) =>
                        handleInputChange("orcamento", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-200 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      Deadline
                    </Label>
                    <Input
                      type="date"
                      className="bg-slate-700/50 border-slate-600 text-white"
                      value={briefingData.deadline}
                      onChange={(e) =>
                        handleInputChange("deadline", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-200 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    Observações Adicionais
                  </Label>
                  <Textarea
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Informações adicionais relevantes para a campanha..."
                    value={briefingData.observacoes}
                    onChange={(e) =>
                      handleInputChange("observacoes", e.target.value)
                    }
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Medidor de Completude */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <div className="p-6">
                <h3 className="text-xl mb-6 text-center text-white">
                  Velocímetro de Briefing
                </h3>

                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-600"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 40 * (1 - completeness / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl text-white">{completeness}%</div>
                      <div className="text-sm text-slate-300">
                        {completeness < 30
                          ? "Iniciando"
                          : completeness < 60
                          ? "Em Progresso"
                          : completeness < 90
                          ? "Quase Pronto"
                          : "Otimizado"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                    <Brain className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-slate-200">
                      Brand Data Loaded
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                    <Database className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-slate-200">
                      Persona Insights Ativado
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto" />
                  </div>
                </div>
              </div>
            </Card>

            <Button
              onClick={onNext}
              disabled={completeness < 60}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {completeness < 60
                ? `Complete mais ${60 - completeness}%`
                : "Gerar Ideias"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
