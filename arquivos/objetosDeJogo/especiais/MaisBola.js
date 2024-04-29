class MaisBola extends Especial{
    constructor(x,y,img,bolas = Array){
        super(x,y,40,40,28,414,40,40,img);
        
    }
    atualiza(){
        this.y+=this.vel;
    }
    addBola(bolas=Array){
        bolas.push(new Bola())
    }
}