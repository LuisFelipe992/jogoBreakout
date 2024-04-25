//organiza elementos visuais
class Grade{
    constructor(iniciox, inicioy, celulalarg,celulaalt,obj=Array,posi = Array){
        this.x = iniciox;
        this.y = inicioy;
        this.larg = celulalarg;
        this.alt  = celulaalt;

        this.obj = obj;
        this.posi = posi;//deve ser um array de obj com tupla(x,y)
    }
    atualiza(){
        for(var i = 0; i<this.obj.length; i++){
            this.obj[i].x = this.x+this.posi[i].x*this.larg;
            this.obj[i].y = this.y+this.posi[i].y*this.alt;
        }
    }
}