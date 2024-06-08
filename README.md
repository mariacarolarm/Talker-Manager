# Projeto de Cadastro de Talkers

Neste projeto, eu construí uma aplicação de cadastro de talkers (palestrantes) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.

## Funcionalidades

Desenvolvi uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers) e também desenvolvi alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

## Habilidades Desenvolvidas

Além das funcionalidades mencionadas, utilizei meus conhecimentos em Docker para containerizar a aplicação.

## Tecnologias Utilizadas

- Node.js
- Express
- Docker
- Módulo `fs` para manipulação de arquivos
- JWT (JSON Web Token) para autenticação

## Como Utilizar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie a aplicação com `npm start`
4. Utilize os endpoints da API para gerenciar os talkers

## Endpoints

- **GET /talker**: Lista todos os palestrantes
- **GET /talker/:id**: Busca um palestrante pelo ID
- **POST /login**: Faz login de um palestrante e gera um token JWT
- **POST /talker**: Cadastra um novo palestrante
- **PUT /talker/:id**: Edita um palestrante pelo ID
- **DELETE /talker/:id**: Remove um palestrante pelo ID

Sinta-se à vontade para explorar e contribuir para o projeto!
