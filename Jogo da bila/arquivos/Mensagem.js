class Mensagem{
    constructor(x,y,txt,cor,tamanho){
        this.txt = txt;
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.tam = tamanho;
        this.alpha =1;
        this.qualEstado;//saber em qual fase está
    }
    update(){
        if(this.alpha != 0){
            this.alpha -= 0.02;
        }
    }
    reinicia(txt){
        this.txt = txt;
        this.alpha =1;
    }
    draw(ctx){
        ctx.font = "60px Arial";
        ctx.fillStyle = "rgba(255,255,255,"+this.alpha+")";
        ctx.fillText(this.txt,this.x,this.y);
    }
    drawPontos(msg,x,y){
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(msg,x,y);
    }

}