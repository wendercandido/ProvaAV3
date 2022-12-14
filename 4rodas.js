class veiculo{
     constructor(rodas,combustivel,cor){
        this.rodas=rodas;
    this.combustivel=combustivel;
    this.cor=cor;
    frear()
    console.log('frear..');
     }
}

class caminhao {
    constructor(rodas,combustivel,cor){
        this.retrovisor = retrovisor;
        frear() 
        console.log('frear');
    }
    }

   class caminhao extends Veiculo {
    acelerar() {
        super.acelerar();
        console.log('Muito');
    }
   }

    class mercedes{
        constructor(marca, preco,ano,modelo) {
            this.marca = marca;
        this.preco = preco;
        this.ano = ano;
        this.modelo = modelo;
        }
        
       }
       const mercedes = new caminhao('mercedes', 4);
   
   class Veiculo extends BMW {
    constructor(rodas, gasolina,farol) {
    super(rodas, gasolina);
    this.farol = farol;
    }
   }
   const honda = new (4, 'Gasolina', true);
   