class MaisBola extends Especial{
    constructor(x,y,img,bolas = Array, skates){
        super(x,y,40,40,28,414,40,40,img);
        this.bolas = bolas;
        this.skates = skates;
    }
    atualiza(){
        this.y+=this.vel;
        this.colide(this.skates,this.bolas)
    }
    addBola(bolas=Array){
        bolas.push(new Bola());
    }
}