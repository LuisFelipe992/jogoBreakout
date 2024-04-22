class Bola{
    constructor(x,y,diam){
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.r = this.diam;
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
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.fill();
    }
    colide(corp){
        //variavel centro
        
        
        for(let i = 0; i < corp.length; i++){
            let colisor = corp[i];

            if((this.x + this.r >= colisor.x) && (this.x - this.r <= colisor.x + colisor.larg) && (this.y + this.r >= colisor.y) && (this.y - this.r <= colisor.y + colisor.alt)){
                // pela esqueda
                if(this.x <= colisor.x){
                    this.x = colisor.x - this.r;
                    this.velx*=-1
                }
                //colide pela direita
                else if(this.x >= colisor.x + colisor.larg){
                    this.x = colisor.x+colisor.larg+this.r;
                    this.velx*=-1
                }
                //colide por cima
                if(this.y <= colisor.y){
                    this.y = colisor.y-this.r;
                    this.vely*=-1
                     
                }
                //colide por baixo
                else if(this.y >= colisor.y + colisor.alt){
                    this.y = colisor.y+colisor.alt+this.r;
                    this.vely*=-1
                }
                
            }
            
        }
        
        
    }
    colisao(colisor){
        
    }
}