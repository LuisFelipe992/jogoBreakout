//classe bola
class Bola{
    constructor(x,y,diam,caminhho){
        this.x = x;
        this.y = y;
        this.diam = 34;
        this.r = this.diam/2;
        //controle de movimento
        this.e = true;
        this.d = false;
        this.c = true;
        this.b = false;

        //velocidade
        this.velx = 5;
        this.vely = 5;

        //imagens
        this.imagem = caminhho;
        

    }
    
    atualiza(corpo){
        this.colide(corpo);
        this.move(this.velx,this.vely)
        this.x+=this.velx;
        this.y+=this.vely;  
    }
    //943 844
    desenha(){
        ctx.shadowColor = "yellow";
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 45;
        ctx.shadowColor = "transparent";

        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        ctx.fill();
        ctx.drawImage(this.imagem,943,844,34,34,this.x-this.r,this.y-this.r,34,34)
        
    }
    colide(corp){
        
        for(let i = 0; i < corp.length; i++){
            let colisor = corp[i];
            //verifica se o objeto entrou em contato
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
                this.destroi(colisor,corp,i)
                
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
    //destroi um elemento dentro de um array
    destroi(colisor,corp=Array,i){
        if(colisor.tag == "bloco"){
            if(colisor.vidas == 0)
                corp.splice(i,1);
            colisor.destroi();
        }
    }
}