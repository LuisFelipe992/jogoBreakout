class Parede extends Obstaculo{
    constructor(x,y,larg,alt,imgx,imgy,imglarg,imgalt,sprt){
        super(x,y,larg,alt,"");

        this.img = sprt;
        this.imgx = imgx;
        this.imgy = imgy;
        this.imglarg = imglarg;
        this.imgalt  = imgalt;
    }
    desenha(){
        ctx.drawImage(this.img,this.imgx,this.imgy,this.imglarg,this.imgalt,this.x,this.y,this.larg,this.alt);
    }
}