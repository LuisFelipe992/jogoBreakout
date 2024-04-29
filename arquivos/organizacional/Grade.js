//organiza elementos visuais
class Grade{
    constructor(iniciox, inicioy, celulalarg,celulaalt){
        this.x = iniciox;
        this.y = inicioy;
        this.larg = celulalarg;
        this.alt  = celulaalt;

        
    }
    posiciona(obj,posi){
        for(var i = 0; i<obj.length; i++){
            obj[i].x = this.x+posi[i].x*this.larg;
            obj[i].y = this.y+posi[i].y*this.alt;
        }
    }
    posicionaAuto(obj,line){
        for(var i = 0; i<obj.length; i++){
            obj[i].x = this.x+i*this.larg;
            obj[i].y = this.y+line*this.alt;
        }
    }
    
}