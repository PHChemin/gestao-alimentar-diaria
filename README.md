# Gestão Alimentar Diária

Este projeto tem como objetivo ajudar as pessoas a terem um melhor controle de sua alimentação. Com o uso da ferramenta GAD (Gestão Alimentar Diária) será possível para o usuário salvar suas alimentações (ex: café da manhã, almoço, janta, etc) conforme os dias e posteriormente compara-los. Assim obtendo uma visão melhor sobre sua alimentação e consequentemente ajudando a saúde do usuário.

O frontend da aplicação foi desenvolvido com Html, css e o framework Bootstrap e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Endereço de Deploy - GitHub Pages

adicionar depois

## Protótipo

https://www.figma.com/file/ZOAModlERTeb9CxlkPv9fO/GestaoAlimentarDiaria-GAD?type=design&node-id=0-1&mode=design&t=GWc3wIXCEkEGGRsX-0

## Checklist

RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.
  - [ ] ID1 - Implementa um layout responsivo de uma página web utilizando um Framework CSS, como Bootstrap ou Tailwind, que se adapta adequadamente a diferentes         tamanhos de tela e dispositivos.
  - [ ] ID2 - Utiliza técnicas avançadas de CSS, como Flexbox ou Grid Layout, para criar layouts responsivos e fluidos em diferentes resoluções de tela.
  - [ ] ID3 - Utiliza os componentes CSS e JavaScript oferecidos por um Framework CSS, como cards, modais ou carrosséis, aplicando estilos personalizados conforme o     necessário.
  - [ ] ID4 - Implementa um layout fluido e responsivo utilizando unidades de viewport relativas (vw, vh) em vez de unidades fixas (px) para criar uma experiência de     usuário consistente em diferentes dispositivos e tamanhos de tela.
  - [ ] ID5 - Implementa animações em elementos da página, como hover, fadeIn/fadeOut, slideIn/slideOut, utilizando CSS Animations ou bibliotecas de animação, como o     Animate.css, para fornecer feedback visual ao usuário e criar uma experiência interativa.
  - [ ] ID6 - Cria transições personalizadas entre diferentes estados da página ou elementos, como mudanças de layout, alterações de cor ou exibição/hide de elementos,   usando CSS Transitions ou CSS Animation, para melhorar a usabilidade e a aparência da aplicação.
  - [ ] ID7 - Aplica um Design System consistente, definindo diretrizes de estilo, cores, tipografia e padrões de componentes que são seguidos em toda a aplicação,       garantindo uma experiência de usuário uniforme e atraente.

RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente, utilizando a API do HTML e expressões regulares (REGEX).
  - [ ] ID 18 - Implementa tratamento de formulários no lado cliente com apresentação de mensagens de erro ou sucesso, utilizando os recursos da API do HTML, como        validação de campos obrigatórios, tipo de entrada e limites de caracteres, garantindo que os dados inseridos sejam válidos antes de serem enviados para o servidor.
  - [ ] ID 19 - Aplica expressões regulares (REGEX) de forma eficiente para realizar validações customizadas nos campos de formulários, como formatos específicos de e-  mail, telefone, data ou outros padrões personalizados definidos pelos requisitos do projeto.
  - [ ] ID 20 - Incorpora elementos de listagem, como checkbox, radio ou select, de maneira eficiente em formulários web, possibilitando a seleção e coleta precisa de   dados  pelos usuários.
  - [ ] ID 22 - Realiza a escrita e leitura de dados no Web Storage, permitindo a persistência de informações entre sessões de usuário e fornecendo uma maneira eficaz   de armazenar dados localmente no navegador.

RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web, incluindo Node.js, NPM e linters para garantir a qualidade do código, juntamento com boas práticas de versionamento e organização de projetos.
  - [ ] ID8 - Configura adequadamente um ambiente de desenvolvimento usando Node.js e NPM para gerenciar pacotes e dependências do projeto, facilitando a instalação e    o uso de bibliotecas e ferramentas de terceiros.
  - [ ] ID9 - Utiliza linters, como ESLint ou Stylelint, para analisar e corrigir automaticamente problemas de código, incluindo erros de sintaxe, estilo e boas          práticas, garantindo a qualidade e consistência do código do projeto.
  - [ ] ID10 - Adota boas práticas de versionamento utilizando sistemas como Git, criando e gerenciando repositórios com branches adequados.
  - [ ] ID11 - Utiliza técnicas de minificação e otimização de recursos, como minificação de CSS e JavaScript e otimização de imagens, para melhorar o desempenho e o     tempo de carregamento do site ou aplicação.
  - [ ] ID12 - Organiza os arquivos do projeto em uma estrutura coerente, lógica e modular, facilitando a localização, manutenção e escalabilidade.
  - [ ] ID13 - Utiliza as metodologias BEM (Block Element Modifier) ou SMACSS (Scalable and Modular Architecture for CSS) para organizar e estruturar os estilos CSS de   forma eficiente, garantindo a reutilização de estilos, a legibilidade do código e a manutenção sustentável do projeto.

RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.
  - [ ] ID 14 - Utiliza a biblioteca jQuery para manipular o DOM e aprimorar a interatividade das páginas web, implementando funcionalidades como eventos, animações e   manipulação de elementos HTML de forma eficiente. 
  - [ ] ID 15 - Seleciona e integra com sucesso um plugin jQuery, como o jQuery Mask Plugin ou outro plugin relevante para o projeto, a fim de melhorar a                 funcionalidade ou a aparência de elementos específicos em uma página web. 
  - [ ] ID 16 - Utiliza bibliotecas de web components, como Lit, para criar componentes reutilizáveis e encapsulados, melhorando a modularidade e a manutenibilidade      das páginas web. 
  - [ ] ID 17 - Utiliza uma biblioteca de componentes prontos, como Material Web Components ou outra de escolha, ou então, algum componente independente (standalone) a   fim de oferecer funcionalidades específicas sem a necessidade de estar integrado a uma biblioteca completa.

RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.
  - [ ] ID 21 - Realiza requisições assíncronas para uma API fake e APIs públicas, utilizando adequadamente conceitos como AJAX, Fetch API ou bibliotecas, para obter      dados dinâmicos e realizar a manipulação e exibição dos resultados na página web.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`
