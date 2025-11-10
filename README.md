# 🚀 Projeto React + Vite

Este projeto foi desenvolvido com **React** e **Vite**, oferecendo uma
estrutura moderna, leve e eficiente para o desenvolvimento de aplicações
web.\
Inclui **Hot Module Replacement (HMR)** e regras básicas do **ESLint**
para garantir qualidade de código.

------------------------------------------------------------------------

## ⚙️ Principais Plugins

-   **@vitejs/plugin-react** -- utiliza **Babel** (ou **oxc** quando
    usado com *rolldown-vite*) para o *Fast Refresh*.
-   **@vitejs/plugin-react-swc** -- utiliza **SWC** para um *Fast
    Refresh* mais rápido e eficiente.

------------------------------------------------------------------------

## 🧠 React Compiler

O **React Compiler** não está habilitado nesta configuração, pois pode
afetar o desempenho de desenvolvimento e build.\
Se desejar ativá-lo, consulte a [documentação oficial do React
Compiler](https://react.dev/).

------------------------------------------------------------------------

## ✅ ESLint e Boas Práticas

Para aplicações em produção, recomenda-se utilizar **TypeScript** com
regras de lint baseadas em tipos.\
Veja o modelo com TypeScript para integrar **TypeScript** e
**typescript-eslint** ao seu projeto.

------------------------------------------------------------------------

## 📂 Estrutura de Diretórios

    sghss-frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md

------------------------------------------------------------------------

## 🧰 Como Executar o Projeto

### 1. Clonar o repositório

``` bash
git clone https://github.com/AlexssandreCarvalho/sghss-frontend.git
```

### 2. Instalar dependências

``` bash
npm install
```

### 3. Rodar o servidor de desenvolvimento

``` bash
npm run dev
```

O projeto será iniciado e estará acessível normalmente em:
<http://localhost:5173>

------------------------------------------------------------------------

## 📫 Contato

**Autor:** Alex Carvalho\
**GitHub:**
[@AlexssandreCarvalho](https://github.com/AlexssandreCarvalho)\
**E-mail:** alexvieiracarvalho@gmail.com
