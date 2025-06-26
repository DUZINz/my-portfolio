# 🚀 Meu Portfólio Pessoal

Um portfólio moderno e responsivo construído com React, TypeScript e Material-UI, apresentando minhas habilidades, projetos e experiência como desenvolvedor Full Stack.

## ✨ Características

- **Design Moderno**: Interface elegante com tema dark e animações suaves
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Fluidas**: Usando Framer Motion para transições elegantes
- **Navegação Suave**: Scroll suave entre seções com navbar fixo
- **Formulário de Contato**: Sistema de contato funcional com validação
- **Performance Otimizada**: Carregamento rápido e otimizado para SEO

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript
- **UI Library**: Material-UI (MUI) v6
- **Animações**: Framer Motion
- **Ícones**: Material-UI Icons
- **Build Tool**: Vite
- **Linting**: ESLint
- **Styling**: Emotion (CSS-in-JS)

## 📋 Seções do Portfólio

1. **Hero**: Apresentação inicial com foto e links principais
2. **Sobre Mim**: Biografia, skills e serviços oferecidos
3. **Projetos**: Showcase dos principais projetos desenvolvidos
4. **Experiência**: Timeline da jornada profissional e acadêmica
5. **Contato**: Formulário de contato e informações de contato
6. **Footer**: Links das redes sociais e informações adicionais

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/my-portfolio.git
cd my-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Navbar/
│   ├── Footer/
│   ├── Loading/
│   └── ScrollToTop/
├── pages/
│   └── Home/
│       └── Sections/    # Seções do portfólio
│           ├── Hero/
│           ├── About/
│           ├── Projects/
│           ├── Experience/
│           └── Contact/
├── assets/              # Imagens e outros assets
├── theme.ts             # Configuração do tema Material-UI
├── index.css            # Estilos globais
└── main.tsx             # Ponto de entrada da aplicação
```

## 🎨 Personalização

### Tema
O tema pode ser personalizado no arquivo `src/theme.ts`. Você pode alterar:
- Cores primárias e secundárias
- Tipografia
- Espaçamentos
- Componentes customizados

### Conteúdo
Para personalizar o conteúdo:

1. **Informações pessoais**: Edite os arquivos de cada seção
2. **Projetos**: Modifique o array `projects` em `Projects.tsx`
3. **Experiência**: Atualize o array `experiences` em `Experience.tsx`
4. **Skills**: Edite o array `skills` em `About.tsx`

### Imagens
- Substitua `src/assets/images/fotoEduardo.jpg` pela sua foto
- Adicione imagens dos projetos na pasta `public/`

## 📱 Responsividade

O portfólio foi desenvolvido com mobile-first approach e é totalmente responsivo:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🔧 Scripts Disponíveis

- `npm run dev`: Executa em modo de desenvolvimento
- `npm run build`: Cria build de produção
- `npm run preview`: Preview da build de produção
- `npm run lint`: Executa o linter

## 🌟 Funcionalidades Especiais

- **Scroll suave** entre seções
- **Animações** de entrada e hover
- **Navegação sticky** que esconde/mostra baseado no scroll
- **Botão "voltar ao topo"** que aparece após scroll
- **Formulário de contato** com validação
- **Links para redes sociais** funcionais
- **Tema dark** elegante e moderno

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abrir um Pull Request

## 📞 Contato

- **Email**: eduardo@email.com
- **LinkedIn**: [linkedin.com/in/eduardo](https://linkedin.com/in/eduardo)
- **GitHub**: [github.com/eduardo](https://github.com/eduardo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
