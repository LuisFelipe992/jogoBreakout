class Poder{
    constructor(x,y,vel,tipo = string){
        this.x = x;
        this.y = y;
        this.vel = vel;
        this.tipo = tipo;
    }
    update(){
        this.y += this.vel;
    }
}