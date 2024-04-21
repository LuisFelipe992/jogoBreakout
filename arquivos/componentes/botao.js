class Botao{
    constructor(x,y,larg,alt,cor,texto,imgCaminho){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = cor;
        this.txt = texto;
        //logico
        this.clique = false;

        this.xTxt = this.x+(this.larg/2);
        this.yTxt = this.y+(this.alt/2);
        this.corTxt = "white";
    }
    atualiza(){
        if(this.clique){
            //  O QUE O BOTAO FAZ?
            console.log("clicou em: "+this.txt);
            this.clique = false;
        }
    }
    desenha(ctx){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.corTxt;
        ctx.fillText(this.txt, this.xTxt, this.yTxt);
    }

    click(x,y){
        if(x >= this.x && x<=this.x+this.larg){
            if(y >= this.y && y <= this.y+this.alt)
                this.clique = true; 
        }
    }
    
}