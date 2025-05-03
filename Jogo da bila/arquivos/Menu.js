// classe Menu
class Menu{
    constructor(){
        this.x = canvas.width/2 -75;
        this.b1 = new Botao(this.x,200,"green","jogar");
        this.b2 = new Botao(this.x,280,"green","Ranking");
        this.b3 = new Botao(this.x,360,"red","sair");

        this.clickB1 = false;
        this.clickB2 = false;
        this.clickB3 = false;
    }
    update(){

    }
    clique(x,y){
        if(x > this.b1.x && x < this.b1.x + this.b1.larg && y > this.b1.y && y < this.b1.y + this.b1.alt ){
            this.clickB1 = true;
        }else if(x > this.b2.x && x < this.b2.x + this.b2.larg && y > this.b2.y && y < this.b2.y + this.b2.alt ){
            this.clickB2 = true;
        }else if(x > this.b3.x && x < this.b3.x + this.b3.larg && y > this.b3.y && y < this.b3.y + this.b3.alt ){
            this.clickB3 = true;
        }
    }
    draw(){
        this.b1.draw();
        this.b2.draw();
        this.b3.draw();
    }
}


//classe botao
class Botao{
    constructor(x = Number,y = Number,cor = String,text = String){
        this.x = x;
        this.y = y;
        this.larg = 150;
        this.alt = 70;
        this.cor = cor;
        this.texto = text;
    }
    draw(){
        ctx.font = "30px Arial";
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.larg, this.alt);
        ctx.fillStyle = "white";
        ctx.fillText(this.texto, this.x + this.larg/4, this.y+this.alt/2)
    }
    clique(x,y,estado,valorEstado){
        if(x>=this.x && x<=this.x+this.larg && y>=this.y && y<= this.y+this.alt ){
            estado = valorEstado;
        }
    }
}

// classe Ranking
class Ranking{
    constructor(){
        
    }
}