class Fase01 extends Fase{
    constructor(){
        //chamando o construtor da classe pai
        super();

        // defina limite de i para setar a quantidade de blocos
        for(let i = 0; i<9; i++){
            this.blocos.push(new Bloco(100+i*80,150,0,0,"",this.sprites,0,false));
        }

        // definindo as posições dos blocos
        this.posi = new Array(
            {x:17, y:5},
            {x:18, y:5},
            {x:19, y:5},

            {x:17, y:6},
            {x:18, y:6},
            {x:19, y:6},

            {x:17, y:7},
            {x:18, y:7},
            {x:19, y:7},
        
        );

        
        this.layer1.posiciona(this.blocos,this.posi)
    }
}