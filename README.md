
# Quiz Game

Front-end de um mini-game de perguntas e respostas desenvolvido para praticar React e Redux-Toolkit. 



## Demonstração

Clique [aqui](https://marcosebsilva.github.io/quiz-game/) para acessar a aplicação.

- Para iniciar uma partida, é necessário que:
    - **nickname** tenha mais de 4 caracteres;
    - **question amount** seja maior que 5;
- O Ranking é salvo no **localStorage** e representa a maior nota de um **nickname**, impedindo duplicatas.


## Stack utilizada

- [react](https://github.com/facebook/react/)
- [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- [styled-components](https://github.com/styled-components/styled-components)

#### Deploy feito no [gh-pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/creating-a-github-pages-site).




## Rodando localmente

#### É necessário que o node e o npm estejam instalados.

Clone o projeto

```bash
  git clone git@github.com:marcosebsilva/quiz-game.git
```

Entre no diretório do projeto

```bash
  cd quiz-game
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run dev
```


## Referência

API de perguntas - [Open Trivia DB](https://opentdb.com/api_config.php).
