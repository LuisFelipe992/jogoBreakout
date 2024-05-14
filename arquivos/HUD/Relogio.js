class Relogio{
    constructor(segundos,minutos){
        this.frames = 0;
        this.segundos = segundos;
        this.minutos = minutos;

        //quantidade de frames por segundo
        this.qtdeFrames = 60;
    }
    atualiza(){
        this.frames++;
        this.passaTempo();
    }
    desenha(){

    }

    //passa segundos
    passaTempo(){
        if(this.frames % this.qtdeFrames == 1){
            this.segundos--;
            //passa minutos
            if(this.segundos <= 0 && this.minutos > 0){
                this.segundos = 59;
                this.minutos--;
            }
        }

    }
}