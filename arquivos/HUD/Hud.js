class Hud{
    constructor(x,y,larg,alt,img){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt  = alt;

        // Imagem
        this.img = img;
        this.imgx = 0;
        this.imgy = 15;
        this.imgLarg = 193;
        this.imgAlt = 180;

        //relogio
        this.relogio = new Relogio(30,2);
    }
    atualiza(){
        this.relogio.atualiza();
    }
    desenha(){
        ctx.drawImage(this.img,this.imgx,this.imgy,this.imgLarg,this.imgAlt,this.x,this.y,this.larg,this.alt);

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        //Define o alinhamento horizontal e vertical do texto
        ctx.textAlign = "right"; // Alinhamento horizontal no centro
        ctx.textBaseline = "middle"; // Alinhamento vertical no meio
        ctx.fillText(""+this.relogio.minutos+" : "+this.relogio.segundos,177,68);
    }
}