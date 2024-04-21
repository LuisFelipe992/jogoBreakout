class ModoTeste{
    constructor(){
        this.jogadores = new Array();
        this.bolas = new Array();
        this.obs = new Array();

        this.obs.push(new Obstaculo(10,10,500,10,"gray"))
        this.obs.push(new Obstaculo(500,10,10,500,"gray"))
        this.obs.push(new Obstaculo(10,500,500,10,"gray"))
        this.obs.push(new Obstaculo(10,10,10,500,"gray"))

        this.jogadores.push(new Skate(100,480,30,15));

        
        for(let i = 0; i<50; i++){
            this.bolas.push(new Bola(30+7*i,30+8*i,10));
        }
    }

    atualiza(){
        this.atualizaObj(this.jogadores);
        this.atualizaObj(this.bolas,this.jogadores);

        //temporario, tem que arrumar...
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].colide(this.obs);
        }
    }

    desenha(){
        this.desenhaObj(this.jogadores);
        this.desenhaObj(this.bolas);
        this.desenhaObj(this.obs)
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