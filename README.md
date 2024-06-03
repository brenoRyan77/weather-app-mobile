
# Aplicativo Mobile de Previsão do Tempo

É um aplicativo móvel inovador desenvolvido em React Native, projetado para fornecer previsões meteorológicas precisas e atualizadas para cidades ao redor do mundo. Este projeto é o resultado de um esforço colaborativo para concluir as disciplinas de Programação para Dispositivos Móveis e DevOps da turma do 5º período da Uniesp.


## Funcionalidades

- Exibição do clima e temperatura baseado na localização do dispositivo.
- Exibição da velocidade do vendo e umidade, temperatura máxima e miníma.
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
  docker run -p 8085:8081 weatherapp web
```

- Acesse o aplicativo localmente nesse endereço:

```bash
  http://localhost:8085
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
