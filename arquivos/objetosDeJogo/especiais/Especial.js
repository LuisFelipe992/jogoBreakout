class Especial{
    constructor(x,y,larg,alt,imgx,imgy,imglarg,imgalt,img){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.pode = true;

        this.vel = 2;//velocidade de queda
        this.img = img;
        this.imgx = imgx;
        this.imgy = imgy;
        this.imglarg = imglarg;
        this.imgalt = imgalt;
    }

    desenha(){
        ctx.drawImage(this.img,this.imgx,this.imgy,this.imglarg,this.imgalt,this.x,this.y,this.larg,this.alt);
    }
    colide(corp=Array,bolas = Array){
        for(let i = 0; i < corp.length; i++){
            //colisao em x
            if(this.x+this.larg > corp[i].x && this.x < corp[i].x+corp[i].larg){
                //colisao em y
                if(this.y+this.alt > corp[i].y && this.y < corp[i].y+corp[i].alt && this.pode){
                    //...
                    bolas.push(new Bola(bolas[0].x+20,bolas[0].y,15,this.img));
                    this.pode = false;
                }
            }
        }
    }
}