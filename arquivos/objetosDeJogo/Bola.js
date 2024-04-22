class Bola{
    constructor(x,y,diam){
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.r = this.diam;
        //controle de movimento
        this.e = true;
        this.d = false;
        this.c = true;
        this.b = false;

        //velocidade
        this.velx = 3;
        this.vely = 3;

        
    }
    
    atualiza(corpo){
        this.colide(corpo);
        this.move(this.velx,this.vely)
        this.x+=this.velx;
        this.y+=this.vely;  
    }

    desenha(){
        ctx.fillStyle = "green";
        ctx.beginPath();
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
                    this.e = true;
                    this.d = false;
                }
                //colide pela direita
                else if(this.x >= colisor.x + colisor.larg){
                    this.x = colisor.x+colisor.larg+this.r;
                    this.d = true;
                    this.e = false;
                }
                //colide por cima
                if(this.y <= colisor.y){
                    this.y = colisor.y-this.r;
                    this.c = true;
                    this.b  =false;
                     
                }
                //colide por baixo
                else if(this.y >= colisor.y + colisor.alt){
                    this.y = colisor.y+colisor.alt+this.r;
                    this.c = false;
                    this.b = true;
                }
                
            }
            
        }
        
        
    }
    move(vx,vy){
        if(this.e){
            this.velx = -Math.abs(vx);
        }else if(this.d){
            this.velx = Math.abs(vx);
        }
        if(this.c){
            this.vely = -Math.abs(vy);
        }else if(this.b){
            this.vely = Math.abs(vy);
        }
    }
}