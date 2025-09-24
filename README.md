# 🧠 Bauc Mind Interface Design

<div align="center">

![Bauc Mind Logo](https://img.shields.io/badge/Bauc%20Mind-Interface%20Design-blue?style=for-the-badge&logo=brain&logoColor=white)

**A sua agência nunca mais será a mesma.**

_Plataforma completa de IA para criação, otimização e gestão de campanhas publicitárias_

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🚀 Demo](#-demonstração) • [📖 Documentação](#-funcionalidades) • [🛠️ Instalação](#️-instalação) • [🎯 Roadmap](#-roadmap)

</div>

---

## 🎯 Sobre o Projeto

O **Bauc Mind** é uma plataforma revolucionária que integra inteligência artificial com design de interface para transformar completamente o processo de criação e gestão de campanhas publicitárias.

Liberte-se do manual. Otimize o tempo, maximize os resultados e eleve sua agência a um novo patamar de inovação com a inteligência artificial mais avançada do mercado.

### 🔥 Principais Diferenciais

- **🤖 IA Integrada**: Automação completa do processo criativo
- **🎨 Interface Moderna**: Design system baseado em Radix UI + Tailwind CSS
- **⚡ Performance**: Construído com Vite para máxima velocidade
- **📱 Responsivo**: Experiência perfeita em todos os dispositivos
- **🔧 Modular**: Arquitetura componentizada e escalável

---

## 🚀 Demonstração

### Landing Page

Acesse a landing page para conhecer nossa proposta de valor e solicitar uma demonstração.

### Studio App

Experimente o ambiente de trabalho completo com todas as ferramentas integradas:

- **Briefing**: Configure sua campanha
- **Ideias**: Gere ângulos criativos
- **Roteiro**: Crie roteiros otimizados
- **Thumbnails**: Desenhe thumbnails que param o scroll
- **Montagem**: Gere seu vídeo automaticamente
- **Pre-flight**: Verificação final do sistema
- **Performance**: Monitor em tempo real

---

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

### Passos para instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/bauc-mind-interface.git
   cd bauc-mind-interface
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

### Build para produção

```bash
npm run build
# ou
yarn build
```

Os arquivos de produção serão gerados na pasta `build/`.

---

## 🏗️ Arquitetura

### Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── ui/              # Design System (Radix UI + Tailwind)
│   ├── figma/           # Componentes específicos do Figma
│   ├── BriefingPanel.tsx
│   ├── ChallengeSection.tsx
│   ├── CTASection.tsx
│   ├── DemoModal.tsx
│   ├── FeaturesSection.tsx
│   ├── HeroSection.tsx
│   ├── IdeasRoom.tsx
│   ├── PerformanceObservatory.tsx
│   ├── PreflightPanel.tsx
│   ├── ProductSection.tsx
│   ├── ScriptStudio.tsx
│   ├── SolutionSection.tsx
│   ├── ThumbnailLab.tsx
│   └── VideoAssembly.tsx
├── contexts/            # Contextos React
├── guidelines/          # Diretrizes de design
├── styles/              # Estilos globais
├── App.tsx              # Componente principal
├── LandingPage.tsx      # Página inicial
├── StudioApp.tsx        # Aplicação do estúdio
└── main.tsx             # Ponto de entrada
```

### Tecnologias Utilizadas

| Categoria         | Tecnologia      | Versão  | Propósito              |
| ----------------- | --------------- | ------- | ---------------------- |
| **Frontend**      | React           | 18.3.1  | Framework principal    |
| **Linguagem**     | TypeScript      | 5.0+    | Tipagem estática       |
| **Build Tool**    | Vite            | 6.3.5   | Build e dev server     |
| **Styling**       | Tailwind CSS    | 3.0+    | Framework CSS          |
| **UI Components** | Radix UI        | Latest  | Componentes acessíveis |
| **Animações**     | Motion          | Latest  | Animações fluidas      |
| **Ícones**        | Lucide React    | 0.487.0 | Ícones modernos        |
| **Formulários**   | React Hook Form | 7.55.0  | Gerenciamento de forms |
| **Gráficos**      | Recharts        | 2.15.2  | Visualizações de dados |

---

## 🎨 Funcionalidades

### 🏠 Landing Page

- **Hero Section**: Apresentação impactante com animações
- **Challenge Section**: Identificação dos problemas do mercado
- **Solution Section**: Apresentação da solução
- **Product Section**: Demonstração das funcionalidades
- **Features Section**: Destaque dos principais recursos
- **CTA Section**: Chamadas para ação estratégicas

### 🎬 Studio App

- **Dashboard Home**: Visão geral com navegação intuitiva
- **Briefing Panel**: Configuração inteligente de campanhas
- **Ideas Room**: Geração de ângulos criativos com IA
- **Script Studio**: Criação de roteiros otimizados
- **Thumbnail Lab**: Design de thumbnails que convertem
- **Video Assembly**: Montagem automática de vídeos
- **Preflight Panel**: Verificação final do sistema
- **Performance Observatory**: Monitoramento em tempo real

### 🎯 Recursos Avançados

- **Navegação Inteligente**: Sistema de roteamento baseado em URL
- **Animações Fluidas**: Transições suaves entre telas
- **Design Responsivo**: Adaptação perfeita a todos os dispositivos
- **Tema Escuro**: Interface moderna e elegante
- **Componentes Modulares**: Arquitetura escalável e reutilizável

---

## 🎨 Design System

### Componentes UI

O projeto utiliza um design system completo baseado em Radix UI com customizações Tailwind CSS:

- **Accordion**: Acordeões expansíveis
- **Alert Dialog**: Diálogos de confirmação
- **Avatar**: Componentes de perfil
- **Button**: Botões com variantes
- **Card**: Cards informativos
- **Dialog**: Modais e overlays
- **Form**: Formulários com validação
- **Input**: Campos de entrada
- **Select**: Seletores dropdown
- **Tabs**: Navegação por abas
- **Tooltip**: Dicas contextuais
- E muito mais...

### Paleta de Cores

```css
/* Gradientes principais */
--gradient-primary: linear-gradient(135deg, #3B82F6, #10B981)
--gradient-secondary: linear-gradient(135deg, #8B5CF6, #06B6D4)

/* Cores base */
--background: #0F172A (slate-900)
--foreground: #F8FAFC (slate-50)
--primary: #3B82F6 (blue-500)
--secondary: #10B981 (emerald-500)
```

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção

# Linting (quando configurado)
npm run lint         # Executa linter
npm run lint:fix     # Corrige problemas automaticamente

# Testes (quando configurado)
npm run test         # Executa testes
npm run test:watch   # Executa testes em modo watch
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Padrões de Código

- Use TypeScript para tipagem
- Siga as convenções do ESLint/Prettier
- Escreva componentes funcionais com hooks
- Use Tailwind CSS para estilização
- Documente componentes complexos

---

## 📋 Roadmap

### 🎯 Próximas Funcionalidades

- [ ] **Integração com APIs**: Conectores para plataformas de anúncios
- [ ] **IA Avançada**: Modelos de linguagem para criação de conteúdo
- [ ] **Analytics**: Dashboard de métricas e performance
- [ ] **Colaboração**: Sistema de comentários e aprovações
- [ ] **Templates**: Biblioteca de templates personalizáveis
- [ ] **Exportação**: Múltiplos formatos de saída
- [ ] **Mobile App**: Aplicativo nativo para iOS/Android
- [ ] **API REST**: Backend para integrações externas

### 🔄 Melhorias Planejadas

- [ ] **Performance**: Otimizações de carregamento
- [ ] **Acessibilidade**: Melhorias de a11y
- [ ] **Testes**: Cobertura completa de testes
- [ ] **Documentação**: Guias detalhados de uso
- [ ] **Internacionalização**: Suporte a múltiplos idiomas

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Equipe

<div align="center">

**Desenvolvido com ❤️ pela equipe Bauc Mind**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/seu-usuario)

</div>

---

## 📞 Suporte

- **Email**: contato@baucmind.com
- **Discord**: [Comunidade Bauc Mind](https://discord.gg/baucmind)
- **Documentação**: [docs.baucmind.com](https://docs.baucmind.com)
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/bauc-mind-interface/issues)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

_Transformando o futuro da criação publicitária com IA_

</div>
