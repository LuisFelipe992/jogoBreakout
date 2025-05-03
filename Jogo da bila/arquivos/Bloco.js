class Bloco{
    constructor(x,y,cor, v){
        this.x = x;
        this.y = y;
        this.larg = 30;
        this.alt = 15;
        this.cor = cor;
        this.vidas = v;

    }
    draw(ctx){
        if(this.vidas == 3)
            ctx.fillStyle = "purple";
        else if(this.vidas == 2)
            ctx.fillStyle = "yellow";
        else
            ctx.fillStyle = "green";
        //ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.larg, this.alt);
    }

    colisao(bola){
        if(bola.x + bola.r >= this.x && bola.x - bola.r <= this.x + this.larg && bola.y + bola.r >= this.y && bola.y - bola.r <= this.y + this.alt){
            this.vidas--;
        }
        
    }
}