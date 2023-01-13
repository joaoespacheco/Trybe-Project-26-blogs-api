# Blogs API 💻

## 📄 Sobre:

Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvida uma API RESTful e um banco de dados para a produção de conteúdo de um blog.

Para está aplicação foi utilizado o banco de dados <strong>MySQL</strong> e o <strong>ORM sequelize</strong>.

A API foi criada utilizando arquitetura <strong>MSC (model-service-controller)</strong>.

Para as funções de autenticação foi utilizado a ferramenta <strong>JSON Web Token</strong>.


</br>
<details>
<summary><strong>Desempenho</strong></summary>
Aprovado com 100% de desempenho em todos os requisitos

![image](https://user-images.githubusercontent.com/99846604/212220238-367948e8-a802-4424-9c88-8ca8cb090f21.png)

</details>

<details>
<summary><strong>Requisitos</strong></summary>
</br>
<strong>Requisitos obrigatórios:</strong> </br>

1. Crie migrations para as tabelas users, categories, blog_posts, posts_categories </br>
2. Crie o modelo User em src/models/User.js com as propriedades corretas </br>
3. Crie o endpoint POST /login, suas funcionalidades e validações necessárias </br>
4. Crie o endpoint POST /user, suas funcionalidades e validações necessárias </br>
5. Crie o endpoint GET /user, suas funcionalidades e validações necessárias </br>
6. Crie o endpoint GET /user/:id, suas funcionalidades e validações necessárias </br>
7. Crie o modelo Category em src/models/Category.js com as propriedades corretas </br>
8. Crie o endpoint POST /categories, suas funcionalidades e validações necessárias </br>
9. Crie o endpoint GET /categories, suas funcionalidades e validações necessárias </br>
10. Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas </br>
11. Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas </br>
12. Crie o endpoint POST /post, suas funcionalidades e validações necessárias </br>
13. Crie o endpoint GET /post, suas funcionalidades e validações necessárias </br>
14. Crie o endpoint GET /post/:id, suas funcionalidades e validações necessárias </br>
15. Crie o endpoint PUT /post/:id, suas funcionalidades e validações necessárias </br>
</br>

<strong>Requisitos bônus:</strong> </br>
16. Crie o endpoint DELETE /post/:id, suas funcionalidades e validações necessárias </br>
17. Crie o endpoint DELETE /user/me, suas funcionalidades e validações necessárias </br>
18. Crie o endpoint GET /post/search?q=:searchTerm, suas funcionalidades e validações necessárias </br>
</details>

<details>
<summary><strong>Diagrama Entidade-Relacionamento</strong></summary>
 
![image](https://user-images.githubusercontent.com/99846604/209252421-d2ec9654-de1f-4a72-b851-e1a4647f21f5.png)
 
</details>
</br>

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

      git clone git@github.com:joaoespacheco/Trybe-Project.26-blogs-api.git

Navegue até a raíz do projeto.

      cd Trybe-Project.26-blogs-api/
      
Uma vez na raiz do projeto, execute o comando abaixo para instalar as dependências do projeto.
    
    npm install
<br/>

<details>
   <summary><strong>Rodando a aplicação com o Docker</strong></summary>
  </br>

   Na pasta raiz do projeto, suba o container através do docker-compose.yml, utilizando o comando abaixo.

        docker-compose up -d

   Entre no terminal do container

        docker exec -it blogs_api bash
        
   Caso não tenha instalado anteriormente, uma vez no terminal do container, execute o comando abaixo para instalar as dependências do projeto.

        npm install
        
   Para criar o banco e executar as migrations utilize o seguinte comando no terminal do container
   
        npm run prestart

   Para popular o banco criado utilize o seguinte comando no terminal do container
   
        npm run seed
        
   Para iniciar o servidor utilize o seguinte comando no terminal do container

        npm run start
        
   Para iniciar o servidor no modo de desenvolvimento utilize o seguinte comando no terminal do container

        npm run debug

   Para dropar o banco criado utilize o seguinte comando no terminal do container
   
        npm run drop

</details>
</br>

## ↪️ Rotas:

A documentação referente as rotas foi confeccionada utilizando a ferramenta Swagger/OpenAPI e pode ser visualizada de duas maneiras:

### Acessando as informações das rotas localmente:
A documentação das rotas pode ser acessada após iniciar a aplicação localmente de acordo com as instruções da seção anterior chamada "Execução". </br> 
</br>
Para visualizar as rotas e testar as requisições você pode utilizar a rota http://localhost:3000/api-docs. Caso preferir, você também pode utilizar um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para realizar os testes.

### Acessando as informações das rotas online:
Para visualizar as rotas você pode utilizar a plataforma Swagger Viewer <strong>[clicando aqui](https://swaggerviewer.ptr.red/spec/aHR0cHM6Ly9naXRodWIuY29tL2pvYW9lc3BhY2hlY28vVHJ5YmUtUHJvamVjdC4yNi1ibG9ncy1hcGkvcmF3L21haW4vc3JjL3N3YWdnZXIuanNvbg%3D%3D)</strong>.
      
</br>

## 🤹🏽 Habilidades Desenvolvidas:
* Criar uma aplicação utilizando Express.js
* Criar uma API RESTful utilizando arquitetura MSC (Model-Service-Controller)
* Validar os dados das requisições utilizando a biblioteca Joi
* Criar um banco de dados, suas migrations, models e associações entre as tabelas
* Utilizar ORM Sequelize para realizar as conexões e as queries ao banco de dados
* Implementar autenticação via token utilizando JSON Web Token
</br>

## 🧰 Ferramentas:
* JavaScript
* Node.js
  * Express.js
* DotEnv
* Joi
* MySQL
* Sequelize
* JSON Web Token
* Docker
</br>

## 📝 Desenvolvido por:
* [João Emanuel Soares Pacheco](https://github.com/joaoespacheco)
