class Bola{
    constructor(x,y,diam){
        this.x = x;
        this.y = y;
        this.diam = diam;
        //velocidade
        this.aleatorio = Math.random();
        this.velx = 3*((this.aleatorio < 0.5)? -1: 1);
        this.aleatorio = Math.random();
        this.vely = 3*((this.aleatorio < 0.5)? -1: 1);
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
    colide(corp){
        //variavel centro
        let c = this.diam/2;
        
        
        for(let i = 0; i < corp.length; i++){
            let corpo = corp[i];
            //colidiu em X
            if(this.x < corpo.x+corpo.larg && this.x+this.diam > corpo.x){
                // colide em Y
                if(this.y < corpo.y+corpo.alt && this.y+this.diam > corpo.y){
                    //alterra velocidade em x
                    console.log("colidiu")
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
}