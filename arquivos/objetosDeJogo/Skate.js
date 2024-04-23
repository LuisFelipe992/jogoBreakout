class Skate{
    constructor(x,y,larg,alt,sprite){
        this.x = x;
        this.y = y;
        this.larg = 198;
        this.alt = 42;
        this.cor = "red"
        //controles
        this.e =false;
        this.d = false;

        //sprites
        this.img = sprite;
        this.imgx= 861;
        this.imgy= 895;
        this.imglarg = 198;
        this.imgalt = 42;

        this.controles = {
            e: "a",
            d: "d"
        }

        //velocidade
        this.vel = 8;

        this.ouvinte = this.eventoMove();
    }

    atualiza(){
        this.move();
    }
    
    desenha(){
        ctx.fillStyle = this.cor;
        //ctx.fillRect(this.x,this.y,this.larg,this.alt);
        ctx.drawImage(this.img,this.imgx,this.imgy,this.imglarg,this.imgalt,this.x,this.y,this.larg,this.alt);
    }
    move(){
        // se anda para a esquerda
        if(this.e){
            this.x = (this.x>0)? this.x-this.vel : 0; 
        }
        //se anda para a direita
        else if(this.d){
            this.x = (this.x+this.larg<700)? this.x+this.vel : 700-this.larg;
        }
    }


    eventoMove(){
        window.document.addEventListener('keydown', (e)=>{
            if(e.key == this.controles.e){
                this.e = true;
                this.d = false;
            }
            if(e.key == this.controles.d){
                this.e = false;
                this.d = true;
            }
                
        },false);
        window.document.addEventListener('keyup', (e)=>{
            if(e.key == this.controles.e){
                this.e = false;
            }
            if(e.key == this.controles.d){
                this.d = false;
            }
                
        },false);
    }
}