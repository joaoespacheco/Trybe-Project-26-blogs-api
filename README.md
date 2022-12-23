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

## ↪️ Rotas:
### Login:
<details>
<summary><strong>POST /login</strong></summary>
 
Esta rota é responsável por fazer o login na API </br>
> * Se bem-sucedido, retorna status 200 e um token

</details>

### User:
<details>
<summary><strong>GET /user</strong></summary>

Lista todos os usuários cadastrados no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e array contendo todos os usuários encontrados

</details>
<details>
<summary><strong>GET /user/{ userId }</strong></summary>

Lista apenas o usuário correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo as informações do usuário

</details>
<details>
<summary><strong>POST /user</strong></summary>

Cadastra um novo usuário no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um token

</details>
<details>
<summary><strong>DELETE /user/me</strong></summary>

Remove o usuário vinculado ao token inserido na requisição</br>
> * Se bem-sucedido, retorna apenas o status 204

</details>

### Categories:
<details>
<summary><strong>GET /categories</strong></summary>

Lista todas as categorias cadastradas no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações de todas as categorias encontradas

</details>
<details>
<summary><strong>POST /categories</strong></summary>

Cadastra uma nova categoria no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo as informações da nova categoria

</details>

### Post:
<details>
<summary><strong>GET /post</strong></summary>

Lista todas as publicações cadastradas no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações de todas as publicações encontradas

</details>
<details>
<summary><strong>GET /post/{ postId }</strong></summary>

Lista apenas a publicação correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo as informações da publicação

</details>
<details>
<summary><strong>GET /post/search?q={ searchTerm }</strong></summary>

Lista todas as publicações que possuem em seu titulo ou conteúdo o termo passado na rota </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações das publicações encontradas

</details>
<details>
<summary><strong>POST /post</strong></summary>

Cadastra uma nova publicação no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo as informações da nova publicação

</details>
<details>
<summary><strong>PUT /post/{ postId }</strong></summary>

Altera as informações da publicação correspondente ao id da rota</br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo as informações atualizadas da publicação, do criador da publicação e de suas categorias

</details>
<details>
<summary><strong>DELETE /post:id</strong></summary>

Remove a publicação correspondente ao id da rota</br>
> * Se bem-sucedido, retorna apenas o status 204

</details>
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
