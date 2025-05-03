class Player {
    constructor(x,y,cor){
        this.x = x;
        this.y = y;
        this.larg = 70;
        this.alt = 15;
        this.velx = 8;
        this.vidas = 3;
        this.d = false;
        this.e = false;
        this.record = 0;
        this.teclas = {
            direita: 68,
            esquerda: 65
        }
        this.venceu = false;
        this.eOPlayer = true;
    }
    update(canvas, bola){
        this.move(canvas);
        
    }
    draw(ctx){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.larg, this.alt);
        this.drawVidas();
    }
    drawVidas(){
        switch(this.vidas){
            case 3:
                ctx.fillStyle = "red";
                ctx.fillRect(10, canvas.height-21, 20, 20);
                ctx.fillRect(31, canvas.height-21, 20, 20);
                ctx.fillRect(52, canvas.height-21, 20, 20);
                break;
            case 2:
                ctx.fillStyle = "red";
                ctx.fillRect(10, canvas.height-21, 20, 20);
                ctx.fillRect(31, canvas.height-21, 20, 20);
                break;
            case 1:
                ctx.fillStyle = "red";
                ctx.fillRect(10, canvas.height-21, 20, 20);
                break;
            case 0:
                break;
        }
        
    }
    //funções especificas
    move(){
         if(this.e && this.x > 0){
            this.x-= this.velx;
        }
        if(this.d && this.x + this.larg < canvas.width){
            this.x+= this.velx;
        }
    }
    posiciona(){
        this.x = canvas.width/2 - this.larg/2;
    }
}


