
# Aplicativo Mobile de Previsão do Tempo

É um aplicativo móvel inovador desenvolvido em React Native, projetado para fornecer previsões meteorológicas precisas e atualizadas para cidades ao redor do mundo. Este projeto é o resultado de um esforço colaborativo para concluir as disciplinas de Programação para Dispositivos Móveis e DevOps da turma do 5º período da Uniesp.


## Funcionalidades

- Pesquisa de cidades.
- Exibição do clima e temperatura atuais.
- Previsção do tempo para as próximas horas.
- Exibição da velocidade do vendo.
- Possibilidade de alternar entre os temas Dark e Light.


## Tecnologias Utilizadas

- React Native
- Expo
- Axios
- Docker
- API da Open Weather
## Como usar (com Docker)

Siga o passo a passo para instalar e rodar o projeto na sua máquina.

- Clone este repositório para a sua máquina local.
- Abra um terminal no diretório raiz do projeto.
- Construa a imagem docker utilizando este comando:

```bash
  docker build -t weatherapp .
```
- Após a imagem "weatherapp" ser criada, execute este comando:

```bash
  docker run -p 19006:19006 -p 19001:19001 -p 19002:19002 weatherapp web
```

- Acesse o aplicativo localmente nesse endereço:

```bash
  http://localhost:19006
```
## Como usar (sem Docker)

Siga o passo a passo para instalar e rodar o projeto na sua máquina.

- Clone este repositório para a sua máquina local.
- Abra um terminal no diretório raiz do projeto.
- Execute este comando:

```bash
  npm install
```

- Execute este comando para executar a aplicação:

```bash
    npx react-native start
```

- Também poderá executar o comando do expo para executar a aplicação:

```bash
    npx expo start
```
## Autores

- Breno Ryan
- Luan Lucas
- Igor Galdino
- Mateus Pessoa
- Mateus Magalhães
