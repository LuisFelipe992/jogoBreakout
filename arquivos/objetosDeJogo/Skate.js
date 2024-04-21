class Skate{
    constructor(x,y,larg,alt){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = "red"
        //controles
        this.e =false;
        this.d = false;

        this.controles = {
            e: "a",
            d: "d"
        }

        //velocidade
        this.vel = 5;

        this.ouvinte = this.eventoMove();
    }

    atualiza(){
        this.move();
    }
    
    desenha(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
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