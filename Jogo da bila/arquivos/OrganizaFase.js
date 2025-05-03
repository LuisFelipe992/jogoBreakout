// organização das fases
class Organiza{
    constructor(){
        this.inicializou ={
            f1:false,
            f2:false,
            f3:false,
            f4:false,
            f5:false
        }
        this.comecouAgora = true;
    }
    reinicia(){
        this.inicializou.f1 = false;
        this.inicializou.f2 = false;
        this.inicializou.f3 = false;
        this.inicializou.f4 = false;
        this.inicializou.f5 = false;
    }
    fase01(bloco = Array, jogador){
    
        // limpando o array
        for(var i in bloco){
            bloco.pop();
        }
        var y = 20;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",1));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",1));

        y = 80;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",1));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",1));

        y = 200
        bloco.push(new Bloco(20,y,"yellow",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"yellow",1));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"yellow",1));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"purple",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"yellow",1));

        this.inicializou.f1 = true; 
        
    }
    fase02(bloco = Array, jogador){
    
        // limpando o array
        for(var i in bloco){
            bloco.pop();
        }
        var y = 20;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",1));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",1));

        y = 80;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",2));

        y = 200
        bloco.push(new Bloco(20,y,"yellow",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"yellow",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"purple",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"yellow",2));

        
        this.inicializou.f2 = true; 
        
    }
    fase03(bloco = Array, jogador){
    
        // limpando o array
        for(var i in bloco){
            bloco.pop();
        }
        var y = 20;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",1));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",1));

        y = 80;
        bloco.push(new Bloco(20,y,"green",1));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width/3,y,"green",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",1));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",1));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",2));

        y = 200
        bloco.push(new Bloco(20,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width/3,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",2));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"yellow",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"purple",2));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"yellow",2));
        
        
        this.inicializou.f3 = true; 
        
    }
    fase04(bloco = Array, jogador){
    
        // limpando o array
        for(var i in bloco){
            bloco.pop();
        }
        var y = 20;
        bloco.push(new Bloco(20,y,"green",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width/3,y,"green",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",2));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",2));

        y = 80;
        bloco.push(new Bloco(20,y,"green",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",3));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width/3,y,"green",3));
        bloco.push(new Bloco(canvas.width/2,y,"green",2));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",3));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",3));

        y = 200
        bloco.push(new Bloco(20,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",3));
        bloco.push(new Bloco(canvas.width/3,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",3));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"yellow",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"purple",3));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"yellow",2));
        
        
        this.inicializou.f4 = true; 
        
    }
    fase05(bloco = Array, jogador){
    
        // limpando o array
        for(var i in bloco){
            bloco.pop();
        }
        var y = 20;
        bloco.push(new Bloco(20,y,"green",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width/3,y,"green",2));
        bloco.push(new Bloco(canvas.width/2,y,"green",2));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",2));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",2));

        y = 80;
        bloco.push(new Bloco(20,y,"green",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",3));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",3));
        bloco.push(new Bloco(canvas.width/3,y,"green",3));
        bloco.push(new Bloco(canvas.width/2,y,"green",3));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"green",3));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"green",3));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"green",3));

        y = 200
        bloco.push(new Bloco(20,y,"yellow",2));
        bloco.push(new Bloco(canvas.width/8,y,"green",3));
        bloco.push(new Bloco(canvas.width/4.5,y,"green",3));
        bloco.push(new Bloco(canvas.width/3,y,"yellow",3));
        bloco.push(new Bloco(canvas.width/2,y,"green",3));

        bloco.push(new Bloco(canvas.width-canvas.width/8,y,"yellow",3));
        bloco.push(new Bloco(canvas.width-canvas.width/4.5,y,"purple",3));
        bloco.push(new Bloco(canvas.width-canvas.width/3,y,"yellow",3));
        
        
        this.inicializou.f5 = true; 
        
    }
}