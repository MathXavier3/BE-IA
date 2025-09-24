import { useState } from "react";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  Brain,
  Camera,
  Play,
  Settings,
  BarChart3,
  Home,
} from "lucide-react";

// Import all components
import { BriefingPanel } from "./components/BriefingPanel";
import { IdeasRoom } from "./components/IdeasRoom";
import { ScriptStudio } from "./components/ScriptStudio";
import { ThumbnailLab } from "./components/ThumbnailLab";
import { VideoAssembly } from "./components/VideoAssembly";
import { PreflightPanel } from "./components/PreflightPanel";
import { PerformanceObservatory } from "./components/PerformanceObservatory";

type Screen =
  | "home"
  | "briefing"
  | "ideas"
  | "script"
  | "thumbnail"
  | "assembly"
  | "preflight"
  | "performance";

const screens = [
  {
    id: "briefing",
    name: "Briefing",
    icon: Brain,
    description: "Configure sua campanha",
  },
  {
    id: "ideas",
    name: "Ideias",
    icon: Zap,
    description: "Gere ângulos criativos",
  },
  {
    id: "script",
    name: "Roteiro",
    icon: Play,
    description: "Crie roteiros otimizados",
  },
  {
    id: "thumbnail",
    name: "Thumbnails",
    icon: Camera,
    description: "Desenhe thumbnails que param o scroll",
  },
  {
    id: "assembly",
    name: "Montagem",
    icon: Settings,
    description: "Gere seu vídeo automaticamente",
  },
  {
    id: "preflight",
    name: "Pre-flight",
    icon: Settings,
    description: "Verificação final do sistema",
  },
  {
    id: "performance",
    name: "Performance",
    icon: BarChart3,
    description: "Monitor em tempo real",
  },
];

interface StudioAppProps {
  onNavigateToLanding: () => void;
}

export default function StudioApp({ onNavigateToLanding }: StudioAppProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  const nextScreen = () => {
    const currentIndex = screens.findIndex((s) => s.id === currentScreen);
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1].id as Screen);
    }
  };

  const prevScreen = () => {
    const currentIndex = screens.findIndex((s) => s.id === currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(screens[currentIndex - 1].id as Screen);
    } else {
      setCurrentScreen("home");
    }
  };

  const goToScreen = (screenId: Screen) => {
    setCurrentScreen(screenId);
  };

  const goHome = () => {
    setCurrentScreen("home");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "briefing":
        return <BriefingPanel onNext={nextScreen} />;
      case "ideas":
        return <IdeasRoom onNext={nextScreen} onBack={prevScreen} />;
      case "script":
        return <ScriptStudio onNext={nextScreen} onBack={prevScreen} />;
      case "thumbnail":
        return <ThumbnailLab onNext={nextScreen} onBack={prevScreen} />;
      case "assembly":
        return <VideoAssembly onNext={nextScreen} onBack={prevScreen} />;
      case "preflight":
        return <PreflightPanel onNext={nextScreen} onBack={prevScreen} />;
      case "performance":
        return <PerformanceObservatory onBack={prevScreen} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-8">
            <div className="max-w-6xl mx-auto text-center">
              {/* Logo and Title */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-6xl text-white">Bauc Mind</h1>
                </div>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Plataforma completa de IA para criação, otimização e gestão de
                  campanhas publicitárias. Do briefing ao performance, tudo
                  automatizado e inteligente.
                </p>
              </motion.div>

              {/* Feature Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              >
                {screens.map((screen, index) => {
                  const IconComponent = screen.icon;
                  return (
                    <motion.div
                      key={screen.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 cursor-pointer hover:bg-slate-700/50 transition-all duration-300"
                      onClick={() => goToScreen(screen.id as Screen)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4">
                          <IconComponent className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl text-white mb-2">
                          {screen.name}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {screen.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Quick Start Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button
                  onClick={() => goToScreen("briefing")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
                >
                  <Zap className="w-6 h-6 mr-3" />
                  Iniciar Nova Campanha
                </Button>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-16 text-slate-500 text-sm"
              >
                <p>Powered by AI • BrandGuard • Otimização Automática</p>
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="size-full min-h-screen bg-slate-900">
      {/* Fixed Navigation for non-home screens */}
      {currentScreen !== "home" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700"
        >
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <Button
                onClick={goHome}
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                <Home className="w-4 h-4 mr-2" />
                Bauc Mind
              </Button>

              {/* Progress Indicator */}
              <div className="flex items-center gap-2">
                {screens.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${
                        screen.id === currentScreen
                          ? "bg-blue-400 w-6"
                          : screens.findIndex((s) => s.id === currentScreen) >
                            index
                          ? "bg-green-400"
                          : "bg-slate-600"
                      }
                    `}
                  />
                ))}
              </div>

              <Button
                onClick={onNavigateToLanding}
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                ← Voltar ao Site
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Home Screen Navigation */}
      {currentScreen === "home" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700"
        >
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl text-white font-semibold">Bauc Mind</h2>
              </div>

              <Button
                onClick={onNavigateToLanding}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                ← Voltar ao Site
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Screen Content */}
      <div className={currentScreen !== "home" ? "pt-20" : "pt-20"}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
