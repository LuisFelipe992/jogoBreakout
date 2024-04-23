//classe de teste apenas para verificar o funcionamento dos objetos
class ModoTeste{
    constructor(){
        this.sprites = document.querySelector("img");
        this.jogadores = new Array();
        this.bolas = new Array();
        this.obs = new Array();
        this.blocos = new Array();

        this.obs.push(new Obstaculo(10,10,500,10,"gray"))
        this.obs.push(new Obstaculo(500,10,10,500,"gray"))
        this.obs.push(new Obstaculo(10,500,500,10,"gray"))
        this.obs.push(new Obstaculo(10,10,10,500,"gray"))

        this.jogadores.push(new Skate(100,480,30,15,this.sprites));
        
        // defina limite de i para setar a quantidade de bolas
        for(let i = 0; i<10; i++){
            this.bolas.push(new Bola(130+20*i,200+15*i,10,this.sprites));
        }

        // defina limite de i para setar a quantidade de blocos
        for(let i = 0; i<4; i++){
            this.blocos.push(new Bloco(100+i*80,150,0,0,"",this.sprites,2   ));
        }
    }

    atualiza(){
        this.atualizaObj(this.jogadores);
        this.atualizaObj(this.bolas,this.jogadores);
        

        //temporario, tem que arrumar...
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].colide(this.obs);
        }
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].colide(this.blocos);
        }
    }

    desenha(){
        this.desenhaObj(this.jogadores);
        this.desenhaObj(this.bolas);
        this.desenhaObj(this.obs);
        this.desenhaObj(this.blocos);
    }

    //"sem parametro"
    atualizaObj(o){
        for(let i = 0; i < o.length; i++){
            o[i].atualiza();
        }
    }
    //"com parametro"
    atualizaObj(o,param){
        for(let i = 0; i < o.length; i++){
            o[i].atualiza(param);
        }
    }

    desenhaObj(o){
        for(let i = 0; i < o.length; i++){
            o[i].desenha();
        }
    }


    
}