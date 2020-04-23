# angularjs-typescript-karma-jasmine
Projeto Angularjs+Typescript com exemplos e explicações.

## Estrutura
O projeto segue um padrão de organização de arquivos para facilitar o compartilhamento de código e otimização na manutenção.

```javascript
src // Pasta Raiz do projeto
| -- [+]app // Pasta Raiz dos códigos
|     | -- [+]components // Pasta contendo os componentes compartilhados entre spas
|     | -- [+]entities // Pasta contendo todas as entidades do projeto(interfaces, enums, classes)
|     | -- [+]scripts // Pasta contendo contendo todos os scripts **static's**(somente código ts) ou **não**(codigo ts + angular) 
|     | -- [+]services // Pasta contendo todos os serviços consumidos pelo projeto
|     |     | -- [+]utils // Pasta contendo serviços estáticos úteis (não-angularjs e apenas typescript)
|     |     | // Serviços globais do projeto
|     | -- [+]spas // Pasta contendo todas as Sigle Page Applications do contexto
| -- [+]assets // Pasta de ativos do projeto(ex: imagens, .json, .txt, .pdf)
```

## Informações importantes

1. Toda pasta contém um arquivo README.md contendo orientações específicas daquela pasta.
2. Todo arquivo typescript deve conter o seu respectivo **teste** com o mesmo nome adicionado o sufixo 'spec'(ex: nome.ts => nome.spec.ts) na mesma pasta do arquivo origem.
3. Usaremos o Grunt para automatização de tarefas repetitivas(ex: execução de >> testes unitários, build, concatenação de arquivos, etc ).
4. Usaremos o Karma para automatizar os testes em diversos navegadores web com um único comando.
5. Usaremos o Jasmine para escrever os testes unitários.
