# <p align = "center"> Projeto TeachMe - Back-end </p>

<p align="center">
   <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4d6.svg" width="300px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/teachme-backend?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

TeachMe aparece como a solução para um problema latente no meio da programação: a falta de uma boa plataforma exclusiva para o compartilhamento de conhecimentos sobre tecnologia e sobre códigos. Inspirada no *GitBooks*, a plataforma visa permitir a criação de legítimos livros-tutoriais, com um compartilhamento democrático e inteiramente gratuito de saberes e dizeres. 

Nota-se que, embora existam diversas plataformas desse tipo, nenhuma é exclusiva para a programação e falta unidade e estabilidade nesse meio. O *GitBooks* tem plataforma e ferramental nada acessível para o público comum criar seus documentos e compartilhar com outrem, pois à plataforma falta uma interface de usuário que mostre o que está sendo publicado e o que está em ala, e o Medium é pouco produtivo na medida em que tem uma má interface para criação de conteúdos e não é algo exclusivo para programadores.

***

## :computer:	 Tecnologias e Conceitos

- JWTs & refresh tokens
- Node.js
- TypeScript
- PostgreSQL com Prisma
- Testagem com Jest e Faker
- Arquitetura de camadas

***

    ## :rocket: Rotas

    ```yml
    POST /signup
        - Rota para cadastrar um novo usuário
        - headers: {}
        - body: {
            name: "Lorem ipsum",
            nickname: "loremipsum",
            email: "lorem@gmail.com",
            profilePicture: "https://loremipsum.com" (nullable),
            password: "loremipsum"
        }
    ```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    email: "lorem@gmail.com",
    password: "loremipsum"
    }
```

```yml 
GET /user/:id
    - Rota para coletar informações de um usuário específico
    - headers: {}
    - body: {}
```

```yml 
GET /users
    - Rota para coletar as informações de todos os usuários
    - headers: {}
    - body: {}
```

```yml 
PUT /user/:id (autenticada)
    - Rota para editar informações de usuário
    - headers: { Authorization: Bearer $token}
    - body: {
        name: "lorem",
        email: "lorem@ipsum.com",
        nickname: "lorem",
        biography: "lorem",
        profilePicture: "lorem",
        password: "loremipsum"
    }
```

```yml 
DELETE /user/:id (autenticada)
    - Rota para deletar um usuário específico do sistema. Apenas 
    o usuário ou um administrador podem fazer isso.
    - headers: { Authorization: Bearer $token }
    - body: {}
```

```yml 
POST /new-post/:id (autenticada)
    - Rota para criar uma nova postagem
    - headers: { Authorization: Bearer $token }
    - body: {
        name: "lorem",
        creationDate: "DD/MM/YYYY"
    }
```

```yml
DELETE /post/:postId (autenticada)
    - Rota para deleter um post. Só pode ser feito por um 
    admin ou pelo usuário que criou o post
    - headers: { Authorization: Bearer $token }
    - body: {}
```

```yml
PUT /post/:postId (autenticada)
    - Rota para editar um post. Só pode ser feito por um 
    admin ou pelo usuário que criou o post
    - headers: { Authorization: Bearer $token }
    - body: {
        name: "lorem"
    }
```

```yml
POST /publish-post/:postId (autenticada)
    - Rota para fazer um post deixar de ser rascunho e torná-lo público.
    Só pode ser feito por um admin ou pelo usuário que criou o post
    - headers: { Authorization: Bearer $token }
    - body: {}
```

```yml
POST /like-post/:postId (autenticada)
    - Rota para curtir um post. Pode ser feita por qualquer usuário logado.
    - headers: { Authorization: Bearer $token }
    - body: {}
```

```yml
POST /view-post/:postId
    - Rota para registrar uma visualização em um post
    - headers: {}
    - body: {}
```

```yml
GET /posts
    - Rota para receber a lista dos posts publicados
    - headers: {}
    - body: {}
```

```yml
GET /post/:postId
    - Rota para receber um post por id, se ele tiver sido publicado
    - headers: {}
    - body: {}
```

```yml
GET /top-posts
    - Rota para receber os posts mais vistos
    - headers: {}
    - body: {}
```

```yml
POST /new-chapter/:postId (autenticada)
    - Rota para criar um novo capítulo atrelado ao id de um post
    - headers: { Authorization: Bearer $token }
    - body: {
        title: "lorem",
        content: "ipsum",
        lastEdit: date
    }
```

```yml
PUT /edit-chapter/:chapterId (autenticada)
    - Rota para editar as informações de um capítulo
    - headers: { Authorization: Bearer $token }
    - body: {
        title: "lorem",
        content: "ipsum",
        lastEdit: date
    }
```

```yml
DELETE /delete-chapter/:chapterId (autenticada)
    - Rota para deletar um capítulo. Só pode ser feito pelo usuário ou por um admin
    - headers: { Authorization: Bearer $token }
    - body: {}
```

```yml
GET /chapters/:postId
    - Rota para retornar os capítulos de um post pelo ID do post
    - headers: {}
    - body: {}
```

***

## 🏁 Rodando a aplicação

Esse projeto foi feito com [ExpressJS](https://github.com/expressjs/express), então é preciso que sua máquina tenha instaladas as versões estáveis mais recentes do [Node.js](https://nodejs.org/en/download/) e do [npm](https://www.npmjs.com/).

Primeiramente, você precisa clonar esse repositório para a sua máquina:

```
git clone https://github.com/adnanbezerra/teachme-backend.git
```

Então, dentro do diretório do projeto, você deve rodar o seguinte comando para instalar as dependências necessárias:

```
npm install
```

Agora, você preisa configurar o arquivo `.env`. Você deve copiar o que estiver dentro de `.env.example`, criar um arquivo `.env`, colar as informações copiadas e preencher as variáveis necessária.

Agora, você pode finalmente rodar o seu servidor localmente usando esse comando:
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/adnanbezerra/teachme-front.git) que contem a interface da aplicação, para testar o projeto por completo.