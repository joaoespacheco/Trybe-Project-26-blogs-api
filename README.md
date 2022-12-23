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
### Products:
<details>
<summary><strong>GET /products</strong></summary>
 
Lista todos os produtos cadastrados no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array com todos os produtos cadastrados

</details>
<details>
<summary><strong>GET /products/:id</strong></summary>
 
Lista apenas o produto correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo as informações do produto

</details>
<details>
<summary><strong>GET /products/search?q=searchTerm</strong></summary>
 
Lista todos os produtos que possuem em seu nome o termo passado na rota</br>
> * Se bem-sucedido, retorna status 200 e um array contendo os produtos que correspondem a busca
> * Se o termo de busca for vazio, retorna status 200 e um array contendo todos os produtos cadastrados

</details>
<details>
<summary><strong>POST /products</strong></summary>
 
Cadastra um novo produto no banco de dados</br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo os dados do novo produto

</details>
<details>
<summary><strong>PUT /products/:id</strong></summary>
 
Altera as informações de um produto cadastrado no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um objeto contendo os dados atualizados do produto

</details>
<details>
<summary><strong>DELETE /products/:id</strong></summary>
 
Remove um produto cadastrado do banco de dados </br>
> * Se bem-sucedido, retorna apenas o status 204

</details>

### Sales:
<details>
<summary><strong>GET /sales</strong></summary>

Lista todas as vendas cadastradas no banco de dados </br>
> * Se bem-sucedido, retorna status 200 e um array com todas as vendas cadastradas

</details>
<details>
<summary><strong>GET /sales/:id</strong></summary>

Lista apenas a venda correspondente ao id da rota </br>
> * Se bem-sucedido, retorna status 200 e um array contendo as informações da venda

</details>
<details>
<summary><strong>POST /sales</strong></summary>

Cadastra uma nova venda no banco de dados </br>
> * Se bem-sucedido, retorna status 201 e um objeto contendo o id da venda e um array com as informações dos produtos vendidos

</details>
<details>
<summary><strong>PUT /sales/:id</strong></summary>

Altera as informações de uma venda cadastrada no banco de dados
> * Se bem-sucedido, retorna status 200 e um objeto contendo o id da venda e um array com as informações atualizadas dos produtos vendidos

</details>
<details>
<summary><strong>DELETE /sales/:id</strong></summary>

Remove uma venda cadastrada no banco de dados
> * Se bem-sucedido, retorna apenas um status 204

</details>
</br>


## 🤹🏽 Habilidades Desenvolvidas:
* Criar uma aplicação utilizando Express.js
* Criar uma API RESTful utilizando arquitetura MSC (Model-Service-Controller)
* Validar dados das requisições utilizando a biblioteca Joi
* Implementar testes unitários utilizando as ferramentas Mocha, Chai e Sinon
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
