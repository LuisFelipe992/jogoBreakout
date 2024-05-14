//filho de obstaculos...
class Bloco extends Obstaculo{
    constructor(x,y,larg,alt,cor,img,qualsprt,rect){
        super(x,y,larg,alt,cor);
        this.img = img;
        this.sprt = qualsprt; //identifica a posição da sprite;
        this.larg = 76;
        this.alt = 38;

        this.vidas = qualsprt;//se zero (0), colidiu sumiu
        this.tag = "bloco"; //identifica objeto
        //para as sprites
        //caso rect true
        if(rect){
            this.imgx = 912;
            this.imgy = 304;
        }else{
            this.imgx = 912;
            this.imgy = 227;
            this.larg = 38;
        }
        
        if(this.sprt == 1){
            this.imgx =1254 ;
        }else if(this.sprt == 2){
            this.imgx = 646;
        }

    }
    desenha(){
        ctx.drawImage(this.img,this.imgx,this.imgy,this.larg,this.alt,this.x,this.y,this.larg,this.alt);
    }
    destroi(){
        if(this.vidas == 0){
            delete this;
        }else{
            this.vidas--;
        }
            
    }
}