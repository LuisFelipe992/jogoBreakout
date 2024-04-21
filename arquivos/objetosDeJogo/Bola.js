class Bola{
    constructor(x,y,diam){
        this.x = x;
        this.y = y;
        this.diam = diam;

        //velocidade
        this.velx = 2.5;
        this.vely = 2.5;
    }
    
    atualiza(corpo){
        this.colide(corpo);
        
        this.x+=this.velx;
        this.y+=this.vely;  
    }
    desenha(){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x,this.y,this.diam,this.diam);
    }
    colide(corpo){
        //variavel centro
        let c = this.diam/2;
        


        //colidiu em X
        if(this.x < corpo.x+corpo.larg && this.x+this.diam > corpo.x){
            // colide em Y
            if(this.y < corpo.y && this.y+this.diam > corpo.y){
                //alterra velocidade em x
                if(this.x+c <= corpo.x || this.x+c >= corpo.x+corpo.larg){
                    this.velx*= -1;
                }
                if(this.y+c <= corpo.y || this.y+c >= corpo.y+corpo.alt){
                    this.vely*= -1;
                }
            }
        }
    }
}