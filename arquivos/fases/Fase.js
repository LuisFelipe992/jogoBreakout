class Fase{
    constructor(){
        //atributo imagem
        this.sprites = document.querySelector("img");
        //HUD
        this.hud = new Hud(0,15,192,180,this.sprites);
        //skate do jogador
        this.jogadores = new Array();
        //bolas
        this.bolas = new Array();
        //obstáculos
        this.obs = new Array();
        //blocos
        this.blocos = new Array();
        // quantidade de blocos
        this.qtdeBlocos = 0;
        //icones especiais
        this.especiais = new Array();

        // limitar a tela de jogo criando as paredes no atributo obs
        this.obs.push(new Parede(224,40,46,1092,224,0,46,1092,this.sprites));
        this.obs.push(new Parede(270,40,1380,41,270,0,1380,41,this.sprites));
        this.obs.push(new Parede(1645,40,46,1092,1650,0,46,1082,this.sprites));
        this.obs.push(new Obstaculo(0,canvas.height,2000,40,"gray"));

        // criando os Skatea dos jogadores
        this.jogadores.push(new Skate(this.obs[2].x/2,canvas.height-100,30,15,this.sprites));

        // criando as bolas
        this.bolas.push(new Bola(this.jogadores[0].x+this.jogadores[0].larg/2, this.jogadores[0].y-20,10,this.sprites));

        //Grade retangular
        this.layer0 = new Grade(245,50,76,38);
        //Grade quadricular
        this.layer1 = new Grade(245,50,38,38)
    }

    atualiza(){
        //atualiza o Skate do Jogador (Função sem param adicional)
        this.atualizaObj(this.jogadores);

        //atualiza as Bolas (Função com param adicional)
        this.atualizaObj(this.bolas,this.jogadores);

        //atualiza Relógio
        this.hud.atualiza();

        //temporario, tem que arrumar...
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].colide(this.obs);
        }
        for(let i = 0; i < this.bolas.length; i++){
            this.bolas[i].colide(this.blocos);
        }

        // atualizando os especiais
        this.atualizaObj(this.especiais);
    }

    desenha(){
        //desenhando Skates
        this.desenhaObj(this.jogadores);

        // desenhando Bolas
        this.desenhaObj(this.bolas);

        // desenhando Paredes
        this.desenhaObj(this.obs);
        
        // desenhando os Blocos
        this.desenhaObj(this.blocos);

        // desenhando os especiais
        this.desenhaObj(this.especiais);

        // desenhando o HUD
        this.hud.desenha();
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