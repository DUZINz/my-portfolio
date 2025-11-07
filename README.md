# 🚀 Meu Portfólio Pessoal

Portfólio moderno e responsivo construído com React + TypeScript + MUI. Mostra minhas skills, projetos públicos do GitHub e experiência.

## 🧩 Principais recursos
- Tema escuro com Material-UI
- Seções: Hero, Sobre, Projetos (do GitHub), Experiência, Contato, Footer
- Animações sutis com Framer Motion
- Layout responsivo (mobile → desktop)
- Busca automática de repositórios públicos do GitHub

## 🔧 Tecnologias
- React 19, TypeScript
- Material-UI (MUI) v6
- Framer Motion
- Vite
- ESLint, Prettier

## 🚀 Rodando localmente
Pré-requisitos: Node.js 18+ e npm ou yarn

1. Instale dependências:
   npm install

2. Inicie em modo dev:
   npm run dev

3. Build de produção:
   npm run build
   npm run preview

Abra http://localhost:5173

## ⚙️ Configurar busca de projetos do GitHub
Atualmente o componente Projects busca repositórios de `DUZINz`. Para usar outro usuário edite:
- `src/pages/Home/Sections/Projects/Projects.tsx` — URL da fetch (ex.: `'https://api.github.com/users/DUZINz/repos?...'`)

Sugestão: use uma variável de ambiente Vite (VITE_GITHUB_USER) para não editar o código direto:
- criar `.env` com `VITE_GITHUB_USER=DUZINz`
- alterar o fetch para usar `import.meta.env.VITE_GITHUB_USER`

## 📝 Personalização rápida
- Troque textos nas seções em `src/pages/Home/Sections/*`
- Substitua imagens em `src/assets/images/`
- Ajuste cores/typography em `src/theme.ts`

## 🧪 Testes & lint
- Linter: npm run lint
- Adicione testes em `src/__tests__/` conforme necessário

## 📄 Licença
MIT — veja LICENSE

## 📞 Contato
- Email: eduardogrunitzky@gmail.com
- GitHub: https://github.com/DUZINz
- LinkedIn: https://linkedin.com/in/eduardo-grunitzky-65400b1b1/
