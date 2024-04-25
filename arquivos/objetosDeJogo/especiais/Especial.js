class Especial{
    constructor(x,y,larg,alt,imgx,imgy,imglarg,imgalt,img){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;

        this.vel = 2;//velocidade de queda
        this.img = img;
        this.imgx = imgx;
        this.imgy = imgy;
        this.imglarg = imglarg;
        this.imgalt = imgalt;
    }
    atualiza(){
        
    }
    desenha(){
        ctx.drawImage(this.img,this.imgx,this.imgy,this.imglarg,this.imgalt,this.x,this.y,this.larg,this.alt);
    }
}