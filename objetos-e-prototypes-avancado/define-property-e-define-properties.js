class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        // this.estoque = estoque;
        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            value: estoque,
            writable: false,
            configurable: false, // torna a defineProperty configuravel ou não && torna a variavel não apagavel
        });

        Object.defineProperties(this, {
            nome: {
                enumerable: true,
                value: nome,
                writable: true,
                configurable: true, // torna a defineProperty configuravel ou não && torna a variavel não apagavel
            },
            preco: {
                enumerable: true,
                value: estoque,
                writable: true,
                configurable: true, // torna a defineProperty configuravel ou não && torna a variavel não apagavel
            },
        });
    }
}

const p1 = new Produto('Camiseta', 20, 3);