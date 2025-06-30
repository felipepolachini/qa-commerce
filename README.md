# QA-Commerce

### Loja virtual Geek para simulação de testes

## Introdução

Para a "Parte 1: Cenários de Teste" os 3 cenários de teste foram escritos em BDD e Gherkin e estão contigos nos arquivos:
- adicionar-produto-carrinho.feature
- checkout-simples.feature
- validacao-campos-obrigatorios.feature
	
Para a "Parte 2: Automação de Testes Web e API" foram automatizados os cenários de teste dos fluxos "Adicionar Produto ao Carrinho" e "Checkout Simples" 
nos arquivos checkout-simples.feature e adicionar-produto-carrinho.feature já definidos anteriormente, o validacao-campos-obrigatorios.feature teve seu cenário escrito em BDD
mas não foi automatizado, por isso contém a tag @pending que irá prevenir que ele seja executado uma vez que seu fluxo não foi escolhido para ser automatizado.

As APIs que tiveram seus cenários criados foram:
- **api/produto**: regra de negócio de GET no arquivo get-produto.feature
- **api/carrinho**: fluxos POST (adicionar produto) e GET (buscar carrinho por usuário) 

Além disso, foi definido um after no arquivo de hooks para deletar o carrinho atráves do DELETE da api/carrinho e assim voltar a aplicação ao estado original ao final da execução.

## Pré-requisitos

- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/en/)
- **Git** - [Download](https://git-scm.com/downloads)
- **Visual Studio Code** (ou editor de sua preferência) - [Download](https://code.visualstudio.com/download)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/fabioaraujoqa/qa-commerce.git
cd qa-commerce
```

2. Instale as dependências:
```bash
npm install
```

3. Inicialize o banco de dados:
```bash
npm run db
```

4. Inicie o servidor:
```bash
npm start
```

## URLs da Aplicação

- **Site**: http://localhost:3000/
- **Documentação da API**: http://localhost:3000/api-docs/

## Executando os Testes

### ⚠️ IMPORTANTE: Inicie o servidor primeiro

**Antes de executar qualquer teste, abra um terminal separado e mantenha o servidor rodando:**

```bash
npm start
```

*Deixe este terminal aberto durante toda a execução dos testes. O servidor deve estar ativo em http://localhost:3000/*

### Pré-requisitos para Testes
- ✅ Servidor rodando em terminal separado (`npm start`)
- ✅ Banco de dados inicializado (`npm run db`)

### Comandos de Teste

#### Abrir interface do Cypress (modo interativo):
```bash
npm run test_qa
```

#### Executar testes E2E em modo headless:
```bash
npm run test_qa_e2e_headless
```

#### Executar testes de API em modo headless:
```bash
npm run test_qa_api_headless
```

## Estrutura dos Testes

### Testes E2E (End-to-End)
Localizados em `cypress/e2e/`:
- `adicionar-produto-carrinho.feature` - Testa adição de produtos ao carrinho
- `checkout-simples.feature` - Testa processo de checkout
- `validacao-campos-obrigatorios.feature` - Valida campos obrigatórios

### Testes de API
Localizados em `cypress/api/`:
- `get-produto.feature` - Testa endpoints de produtos
- `post-carrinho.feature` - Testa endpoints do carrinho

## Relatórios

Após executar os testes, os relatórios são gerados em:
- **HTML**: `cypress/reports/html/index.html`
- **Screenshots**: `cypress/reports/screenshots/`

## Tecnologias Utilizadas

- **Cypress** - Framework de testes
- **Cucumber** - BDD (Behavior Driven Development)
- **Mochawesome** - Geração de relatórios
- **Express.js** - Servidor web
- **SQLite** - Banco de dados

---

*Parceria: Fábio Araújo, Bruna Emerich e Tamara Fontanella*