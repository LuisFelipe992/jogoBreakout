class ModoTeste{
    constructor(){
        this.jogadores = new Array();
        this.bolas = new Array();

        this.jogadores.push(new Skate(100,500,30,15));

        this.bolas.push(new Bola(0,0,10));
    }
    atualiza(){
        //atualiza os jogadores/skates
        for(let i = 0; i < this.jogadores.length; i++){
            this.jogadores[i].atualiza();
        }
        //atualiza as bolas
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].atualiza(this.jogadores[0]);
        }
    }
    desenha(){
        //desenha os jogadores/skates
        for(let i = 0; i < this.jogadores.length; i++){
            this.jogadores[i].desenha();
        }
        //desenha as bolas
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].desenha();
        }
    }
}