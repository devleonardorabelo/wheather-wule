# Wule Clima

![Image of Yaktocat](https://github.com/devleonardorabelo/wheather-wule/blob/master/docs/assets/home.png)

## Sobre

### Referências

O Wule Clima é um aplicativo de Clima, onde utiliza dos serviços da <a href="https://www.weatherapi.com">Weather api</a> e consome todos os dados apresentados.

### Licença

Este projeto é público, podendo ser copiado livremente. É bem vindo a participação de qualquer um que quiser contribuir com este projeto.

## Instalação

### Weather api

É necessário possuir uma chave válida na <a href="https://www.weatherapi.com">Weather api</a>, onde deve ser criada uma conta para possuir a mesma.
Após isso, substitua o valor de `API_KEY` em `env.json` para a sua respectiva chave.

```json
{
  "API_KEY": "COLOQUE_AQUI_SUA_LICENÇA",
  "API_URL": "https://api.weatherapi.com/v1"
}
```

### Dependências

É necessário baixar todas as dependências do projeto, use o comando:

```
npm i
```

### iOS

Passo exclusivo para iOS

```
cd ios
pod install
```

## Uso

### Ambiente

É necessário uma preparação do ambiente para que possa rodar este projeto. A documentação do React Native está acessível <a href="https://reactnative.dev/docs/environment-setup">clicando aqui</a> ou no seu site oficial.

#### Android

Para rodar o projeto em android, é necessário possuir um Emulador ou um dispositívo físico liberado para modo de desenvolvimento.

```
npm run android
```

#### iOS

Para rodar o projeto em iOS, é necessário possuir um Mac com Xcode ou um dispositívo físico liberado para desenvolvimento.

```
npm run ios
```

### Referências técninas

Funções e Tipagens estão disponível na <a href="https://github.com/devleonardorabelo/wheather-wule/blob/master/docs/instructions.md">documentação de instruções.</a>
