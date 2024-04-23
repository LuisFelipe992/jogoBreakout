class Obstaculo{
    constructor(x, y, larg, alt, cor){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt  = alt;
        this.cor = cor;
        // suporte de colisoes
    }
    atualiza(){
        
    }
    desenha(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
    }

}