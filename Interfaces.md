# Interfaces

JavaScript dá muita flexibilidade aos desenvolvedores, e não é possível prever um tipo de variável em JavaScript pois ela pode ser mutável.

Exemplo:

```js
var a = 2;
a = function () {
  console.log("Fui inicializado como um número mas agora sou uma função!");
}
```

Isso pode ser uma vantagem na hora de desenvolver códigos em JavaScript, por ser mais rápido, mas é uma desvantagem na hora de dar manutenção ao código. Por esse motivo, o TypeScript possui suporte interno para interfaces.

Uma interface define as especificações de uma entidade. Ele estabelece o contrato que declara o que precisa ser feito, mas não especifica como será feito.

Exemplo em JavaScript sem o uso de interfaces:

```js
var carro = {
    marca: 'Toyota',
    ano: 2020,
    acelerar: function () {
        return 'acelerei';
    }
};
```

É possível criar uma tipagem para uma variável criar uma interface, conforme o exemplo em TypeScript a seguir:

```ts
let carro: { marca: string; ano: number; acelerar: () => string; } = {
    marca: 'Toyota',
    ano: 2020,
    acelerar: () => {
        return 'acelerei';
    }
};
```

Mas vamos concordar, o código fica mais bagunçado e ilegível, por isso é uma boa prática criar interfaces para definir tipos de dados.

Exemplo em TypeScript com o uso de interfaces:

```ts
interface Carro {
    marca: string;
    ano: number;
    acelerar: () => string;
}

let carro: Carro = {
    marca: 'Toyota',
    ano: 2020,
    acelerar: () => {
        return 'acelerei';
    }
};
```

## Erros na tipagem

Ao especificar os tipos de dados, caso tenha algum erro, conseguimos obtê-lo em tempo de compilação, o que facilita na correção.

Vamos supor uma situação: Quero colocar o ano no objeto "carro" com o tipo *string*:

```ts
let carro: Carro = {
    marca: 'Toyota',
    ano: '2020',
    acelerar: () => {
        return 'acelerei';
    }
};
```

Como será o erro apresentado?

```ts
Type 'string' is not assignable to type 'number'
The expected type comes from property 'ano' which is declared here on type 'Carro'
```

Com isso, se qualquer tipo de dado for diferente do tipo declarado na interface, conseguimos ver o erro e corrigir na hora. Isso facilita na manutenção e na construção também.

## Propriedade Opcional

Às vezes, podemos declarar uma interface com propriedades em excesso, mas nem todos os atributos do objeto são obrigatórios. Assim, tem uma forma de definir propriedades opcionais, marcados com "?".

```ts
interface Carro {
    marca: string;
    ano?: number;
    acelerar: () => string;
}
```

Assim, podemos definir o seguinte objeto, que não contém erros mesmo sem o atributo "ano":

```ts
let carro: Carro = {
    marca: 'Toyota',
    acelerar: () => {
        return 'acelerei';
    }
};
```

## Propriedades somente leitura

É possível marcar um atributo como sendo somente leitura, ou seja, não é possível atribuir um valor a uma variável que já possui um valor definido.

```ts
interface Carro {
    marca: string;
    readonly ano: number;
}

let carro: Carro = {
    marca: 'Toyota',
    ano: '2020'
};

carro.marca = 'Honda'; // Ok
carro.ano = '2019';    // Erro, a marca já foi definida anteriormente como 'Toyota'
```

## Herdando Interfaces

Uma interface pode herdar uma ou mais interfaces, isso as tornam flexíveis e reutilizáveis.

```ts
interface Pessoa {
    nome: string;
    genero: string;
}

interface Empregado extends Pessoa {
    codigo: number;
}

let empregado: Empregado = {
    codigo: 1,
    nome: "Felipe",
    genero: "Masculino"
};
```

## Criando interfaces em arquivos separados

Conforme o código vai crescendo, a tendência é aumentar a quantidade de interfaces. Por esse motivo, é aconselhável criar um outro arquivo para declará-las.

Para exportá-la, basta inserir o comando "export" e usar normalmente no seu arquivo .ts.

*sua-interface.ts:*
```ts
export interface Pessoa {
    nome: string;
    genero: string;
}
```

*seu-arquivo.ts:*
```ts
let pessoa: Pessoa = {
    nome: "Felipe",
    genero: "Masculino"
};
```