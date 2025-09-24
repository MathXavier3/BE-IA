import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import StudioApp from "./StudioApp";

type AppMode = "landing" | "studio";

export default function App() {
  const [currentMode, setCurrentMode] = useState<AppMode>("landing");

  // Verificar se há parâmetros na URL para determinar o modo
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get("mode");

    if (mode === "studio") {
      setCurrentMode("studio");
    } else {
      setCurrentMode("landing");
    }
  }, []);

  // Função para navegar para o studio
  const navigateToStudio = () => {
    setCurrentMode("studio");
    // Atualizar a URL sem recarregar a página
    const newUrl =
      window.location.origin + window.location.pathname + "?mode=studio";
    window.history.pushState({ mode: "studio" }, "", newUrl);
  };

  // Função para voltar à landing page
  const navigateToLanding = () => {
    setCurrentMode("landing");
    // Atualizar a URL sem recarregar a página
    const newUrl = window.location.origin + window.location.pathname;
    window.history.pushState({ mode: "landing" }, "", newUrl);
  };

  // Escutar mudanças no histórico do navegador
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const urlParams = new URLSearchParams(window.location.search);
      const mode = urlParams.get("mode");

      if (mode === "studio") {
        setCurrentMode("studio");
      } else {
        setCurrentMode("landing");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      {currentMode === "studio" ? (
        <StudioApp onNavigateToLanding={navigateToLanding} />
      ) : (
        <LandingPage onNavigateToStudio={navigateToStudio} />
      )}
    </>
  );
}
