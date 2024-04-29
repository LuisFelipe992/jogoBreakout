//classe de teste apenas para verificar o funcionamento dos objetos
class ModoTeste{
    constructor(){
        this.sprites = document.querySelector("img");
        this.jogadores = new Array();
        this.bolas = new Array();
        this.obs = new Array();
        this.blocos = new Array();

        this.obs.push(new Parede(40,40,46,1092,224,0,46,1092,this.sprites))
        this.obs.push(new Parede(86,40,1380,41,270,0,1380,41,this.sprites))
        this.obs.push(new Parede(1421,40,46,1092,1650,0,46,1082,this.sprites))
        this.obs.push(new Obstaculo(0,canvas.height,2000,40,"gray"))

        this.jogadores.push(new Skate(100,480,30,15,this.sprites));
        
        // defina limite de i para setar a quantidade de bolas
        for(let i = 0; i<1; i++){
            this.bolas.push(new Bola(130+20*i,200+15*i,10,this.sprites));
        }

        // defina limite de i para setar a quantidade de blocos
        for(let i = 0; i<15; i++){
            this.blocos.push(new Bloco(100+i*80,150,0,0,"",this.sprites,0   ));
        }

        //op de gradiente de fundo
        this.grad = ctx.createLinearGradient(0,0,0,canvas.height);
        this.grad.addColorStop(0,"blue");
        this.grad.addColorStop(1,"#000");

        //layout
        this.layer = new Grade(50,50,76,38);
        this.layer.posicionaAuto(this.blocos,3);
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
        
        this.gradiente(this.grad)
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

    gradiente(grad){
        ctx.fillStyle="gray";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    
}