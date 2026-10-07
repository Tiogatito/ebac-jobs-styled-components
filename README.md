# EBAC Jobs — Styled Components

Exercício do módulo 29: conversão dos estilos do projeto EBAC Jobs para Styled Components.

Este repositório é um fork de [ogiansouza/base_exercicio_css_in_js](https://github.com/ogiansouza/base_exercicio_css_in_js). Foram preservados o conteúdo das sete vagas, a fotografia do hero, as fontes Lato e Gloock, a estrutura da página e a paleta principal do material.

## Executar

Requisitos: Node.js 24.x e npm.

```sh
npm ci
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

`npm run format` aplica a formatação do Prettier com a configuração fornecida na base.

O build verifica os tipos TypeScript e gera a pasta `dist`. A configuração `vercel.json` usa esse comando e essa pasta para a publicação.

## Conversão dos estilos

| Parte solicitada | Implementação                         |
| ---------------- | ------------------------------------- |
| Cabeçalho        | `src/components/Cabecalho/styles.ts`  |
| Hero             | `src/components/Hero/styles.ts`       |
| Formulário       | `src/components/FormVagas/styles.ts`  |
| Vaga             | `src/components/Vaga/styles.ts`       |
| ListaVagas       | `src/containers/ListaVagas/styles.ts` |

Todos os estilos da aplicação são definidos com Styled Components, sem arquivos CSS ou CSS Modules. `createGlobalStyle` concentra o reset e os estilos globais. `ThemeProvider` fornece cores e breakpoints tipados. `styled(Botao)` e `styled(Container)` reutilizam estilos; seletores aninhados e media queries tratam estados e telas pequenas. Os componentes estilizados são declarados fora das funções de renderização.

## Ajustes na base

- Create React App foi substituído por Vite; React, TypeScript e Styled Components foram atualizados. O lockfile fixa as dependências.
- A pesquisa usa comparação literal, ignorando maiúsculas e espaços nas extremidades. Caracteres como `[` não são interpretados como expressão regular.
- Contagem e mensagem de ausência de resultados são anunciadas com `aria-live`.
- Formulário com rótulo acessível, foco visível, campos e botões adaptados ao celular.
- A paleta original recebeu um tom mais escuro para textos e ações, melhorando o contraste.
- O link demonstrativo sem destino foi substituído por detalhes em um diálogo nativo, que pode ser fechado pelo botão ou pela tecla Escape.

## Material e limites

A fotografia original está em `public/images/hero.jpg`, evitando depender de uma requisição externa para carregá-la. Sua origem é [a imagem Pixabay usada na base](https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg). Os ícones em `public` também vieram do projeto original. As fontes são carregadas pelo Google Fonts.

As vagas são exemplos estáticos do material de apoio. Não há backend, cadastro ou envio de candidaturas.
