class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        // this.estoque = estoque;
        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            // value: estoque,
            // writable: false,
            configurable: false, // torna a defineProperty configuravel ou não && torna a variavel não apagavel
            get: function() {
                return estoque;
            },

            set:function(value) {
                if (typeof value !== 'number') {
                    throw new TypeError('Erro, estoque deve ser do tipo number');
                }
                estoque = valor;
            }
        });
    }
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'Qualquer coisa' // Erro, estoque deve ser do tipo number