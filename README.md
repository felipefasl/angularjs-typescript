# angularjs-typescript
Projeto Angularjs+Typescript com exemplos e explicações.

## Versões

| Versão | Notas | Extras | Apps Desenvolvimento |
| ------ | ------ | ------ | ------ |
| 0.0.1 | Apps, Rotas, Controladores, Componentes | Bootstrap, fontawesome | indexApp, linksUteisApp, homeApp |

## Estrutura
O projeto segue um padrão de organização de arquivos para facilitar o compartilhamento de código e otimização na manutenção.

```javascript
src // Pasta Raiz do projeto
| -- [+]app // Pasta Raiz dos códigos
|     | -- [+]spas // Pasta contendo todas as Sigle Page Applications do contexto
```

## Informações importantes

1. Toda pasta contém um arquivo README.md contendo orientações específicas daquela pasta.
2. Todo arquivo typescript deve conter o seu respectivo **teste** com o mesmo nome adicionado o sufixo 'spec'(ex: nome.ts => nome.spec.ts) na mesma pasta do arquivo origem.
3. Usaremos o Grunt para automatização de tarefas repetitivas(ex: execução de >> testes unitários, build, concatenação de arquivos, etc ).

## Typings

A tipagem é um recurso para auxiliar o desenvolvedor identificar erros em tempo de desenvolvimento antes mesmo do build. Apenda mais sobre interfaces [aqui](Interfaces.md#Interfaces)!

## Padronização

**Por que?** Padrões ajudam a fornecer uma maneira consistente de encontrar algo à primeira vista. Consistência dentro do projeto é vital. Consistência dentro de um time é importante. Consistência em toda a empresa proporciona uma enorme eficiência. Por fim, padrões ajudam a encontrar trechos do seu código mais rápido e torná-lo mais fácil de se entender.

*Dica: Use nomes consistentes para todos os componentes seguindo um padrão que descreva a funcionalidade do componente e seu tipo (ex: algum-nome.controller.ts).*

### Apps

| Tipo  | Recomendações | Exemplo |
| ------ | ------ | ------ | 
| arquivo TS | contém o sufixo **.app** | algum-nome.module.ts |
| construtor angularjs  | uso do lowerCamelCase com o sufixo **App** | ``angular.module('algumNomeApp', [])`` |

### Controllers

| Tipo  | Recomendações | Exemplo |
| ------ | ------ | ------ | 
| arquivo html | contém o sufixo **.tpl** | algum-nome.tpl.html
| arquivo TS | contém o sufixo **.controller** | algum-nome.controller.ts
| classe  | uso do UpperCamelCase com sufixo **Controller** e implementa a interface ng.IController |  ``export class AlgumNomeController implements ng.IController{}``
| construtor angularjs  | uso do UpperCamelCase com o sufixo **Controller** | ``module.controller('AlgumNomeController', AlgumNomeController)``



