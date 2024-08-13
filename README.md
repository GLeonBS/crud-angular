# Projeto CRUD em Angular com JSON Server

## Descrição

Este projeto é um CRUD (Create, Read, Update, Delete) desenvolvido em Angular, utilizando o JSON Server como backend para simulação de uma API RESTful. O CRUD permite realizar operações básicas de gerenciamento de dados, como adicionar, visualizar, editar e excluir registros.

## Funcionalidades

- **Listagem**: Visualize todos os registros existentes.
- **Criação**: Adicione novos registros ao sistema.
- **Edição**: Altere os dados de registros existentes.
- **Exclusão**: Remova registros do sistema.

## Tecnologias Utilizadas

- **Angular**: Framework utilizado para o desenvolvimento da interface do usuário.
- **JSON Server**: Ferramenta utilizada para simular uma API RESTful e armazenar os dados do CRUD.

## Requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **Angular CLI** (versão 16 ou superior)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Executando o Projeto

1. Em um terminal, dentro da pasta do projeto, inicie o JSON Server:
   ```bash
   npx json-server db.json
   ```
   O servidor será iniciado em [http://localhost:3000](http://localhost:3000).

2. Em outro terminal, também na pasta do projeto, inicie o servidor de desenvolvimento do Angular:
   ```bash
   npm run start
   ```
   O servidor do Angular estará disponível em [http://localhost:4200](http://localhost:4200).

## Estrutura do Projeto

- **src/app**: Contém os componentes, serviços e demais arquivos do Angular.
- **db.json**: Arquivo JSON utilizado pelo JSON Server para armazenar os dados do CRUD.