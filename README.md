# 🚀 miguelmodesto.dev

Portfólio pessoal desenvolvido para apresentar projetos, habilidades e experiências como Backend Developer.

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.3.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-FF0055?style=flat&logo=framer&logoColor=white)

## 📋 Sobre o Projeto

Site portfólio moderno e minimalista com design dark theme, apresentando:

- **Sobre**: Informações sobre experiência e foco de atuação
- **Projetos**: Showcase de projetos desenvolvidos com links para demo e repositório
- **Tecnologias**: Stack de tecnologias utilizadas
- **Contato**: Formas de entrar em contato

## ✨ Características

- 🎨 Design minimalista com tema dark
- ✨ Animações suaves com Framer Motion
- 📱 Layout totalmente responsivo
- ⚡ Performance otimizada com Vite
- 🎯 Navegação intuitiva por seções
- 🚀 Build otimizado para produção

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS 4** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **ESLint** - Linting e qualidade de código

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Miguel-D3v/miguelmodesto-portifolio.git
cd miguelmodesto-portifolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção localmente
npm run lint     # Executa linting do código
```

## 🎯 Estrutura do Projeto

```
miguelmodesto-portifolio/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos do App
│   ├── index.css       # Estilos globais
│   └── main.jsx        # Entry point
├── .eslintrc.js        # Configuração ESLint
├── vite.config.js      # Configuração Vite
└── package.json        # Dependências e scripts
```

## 🎨 Personalização

### Adicionar Novos Projetos

Edite o array `projects` em [src/App.jsx](src/App.jsx):

```javascript
const projects = [
  {
    title: "Nome do Projeto",
    description: "Descrição do projeto...",
    stack: ["Tech1", "Tech2", "Tech3"],
    live: "https://seu-projeto-demo.com",  // Link do Live Demo aqui
    github: "https://github.com/seu-usuario/projeto",
  },
];
```

### Atualizar Tecnologias

Edite o array `technologies` em [src/App.jsx](src/App.jsx):

```javascript
const technologies = [
  "Node.js",
  "TypeScript",
  // Adicione mais tecnologias...
];
```

### Alterar Informações de Contato

Modifique os links na seção de contato em [src/App.jsx](src/App.jsx):

```javascript
<a href="mailto:seu-email@example.com">Enviar Email</a>
<a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
```

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Railway**

### Deploy na Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como referência para seu próprio portfólio.

## 👤 Autor

**Miguel Modesto**

- GitHub: [@Miguel-D3v](https://github.com/Miguel-D3v)
- LinkedIn: [miguel-modesto](https://linkedin.com/in/miguel-modesto)
- Email: miguelmodesto00@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
