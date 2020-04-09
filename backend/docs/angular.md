# Beagle creator - Angular
[beagle-angular](https://github.com/ZupIT/beagle-angular)!
Utilize o padrão `angular/poc-name` para criar uma nova branch e iniciar a POC

# Instruções para configurar o projeto
- Importe a lib beagle-angular no package.json
```json
dependencies: {
  "beagle-angular": "version"
}
```

- Adicione a seguinte configuração ao arquivo
angular.json:
```json
"projects": {
  "my-project": {
    "architect": {
      "build": {
        "options": {
          "preserveSymlinks": true,
        }
      }
    }
  }
}
```

- Siga as instruções para uso da lib [beagle-angular](https://github.com/ZupIT/beagle-angular)!