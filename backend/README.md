# Beagle creator
Este repositório tem a finalidade de concentrar a construção de POCs utilizando o beagle-web.

Para iniciar, veja as [docs](https://github.com/ZupIT/beagle-creator/tree/master/docs) abaixo e entenda como criar um projeto de acordo com a tecnologia utilizada.
- [React](https://github.com/ZupIT/beagle-creator/tree/master/docs/react.md) demonstra como utilizar a lib [beagle-react](https://github.com/ZupIT/beagle-react)
- [Angular](https://github.com/ZupIT/beagle-creator/tree/master/docs/angular.md) demonstra como utilizar a lib [beagle-angular](https://github.com/ZupIT/beagle-angular)

Por enquanto, as libs ainda não foram distribuídas no NPM. Portanto, é necessário utilizar `yarn link` para que ela funcione corretamente. Veja a sessão [Trabalhando com as libs linkadas](#trabalhando-com-as-libs-linkadas)

## Nomenclatura de branches
Ao criar uma nova POC utilize o padrão `X/poc-name` sendo `X` a tecnologia utilizada e `poc-name` o nome escolhido pro projeto. Exemplos:
- react/tmdb
- angular/tmdb

## Trabalhando com as libs linkadas

1. Clone e compile o projeto [beagle-web](https://github.com/ZupIT/beagle-web)
```
git clone git@github.com:ZupIT/beagle-web.git
cd beagle-web
yarn
yarn build
```

2. Clone e compile o projeto beagle-X
```
git clone git@github.com:ZupIT/beagle-X.git
cd beagle-X
yarn
yarn build
```

3. Crie um link para a biblioteca através do comando `yarn link`:
```
cd beagle-X
yarn link
```

4. Linque a biblioteca beagle-web. No diretório do beagle-web, rode:
```
cd beagle-web
yarn link
```

5. Conecte os links ao seu projeto. No diretório do beagle-creator, rode:
```
yarn link beagle-web
yarn link beagle-X
```
