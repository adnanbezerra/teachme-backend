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
    - body:{
        "name": "Lorem ipsum",
        "nickname": "loremipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```

```yml 
GET /user/:id
    - Em breve!
    - Rota para coletar informações de um usuário específico
    - headers: {}
    - body: {}
```

```yml 
GET /users
    - Em breve!
    - Rota para coletar as informações de todos os usuários
    - headers: {}
    - body: {}
```

```yml 
PUT /user/:id (autenticada)
    - Em breve!
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
    - Em breve!
    - Rota para deletar um usuário específico do sistema. Apenas o usuário ou um administrador pode, fazer isso.
    - headers: { Authorization: Bearer $token }
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

Agora, voc pode finalmente rodar o seu servidor localmente usando esse comando:
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/teachme-front.git) que contem a interface da aplicação, para testar o projeto por completo.