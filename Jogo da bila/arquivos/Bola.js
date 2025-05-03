class Bola{
    constructor(x, y, raio, cor){
        this.x = x;
        this.y = y;
        this.r = raio;
        this.cor = cor;

        this.velx = 5;
        this.vely = 5;

        //pontuação
        this.pontos = 0;
        this.multiplicador = 1;
        this.ultimoColide = "";

        this.e = false;
        this.d = false;
        this.c = false;
        this.b = false;
        this.saiu = false;
        //trigonometrics
        this.angulo;
        this.distx;
        this.disty;
        this.modulo;

        this.somBloco = document.getElementsByTagName("audio")[0];
    }
    update(canvas, jogador){
        this.move();
        this.colideParede(canvas);

        if(!this.e && !this.d && !this.c && !this.b){
            if(jogador.e || jogador.d){
                this.e = jogador.e;
                this.d = jogador.d;
                this.c = true;
            }
        }
        
    }
    draw(ctx){
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fill();
    }

    //funções especificas
    move(){
        if(this.e){
            this.x -= this.velx;
        }else if( this.d){
            this.x += this.velx;
        }
        if(this.c){
            this.y -= this.vely;
        }else if(this.b){
            this.y += this.vely;
        }
    }

    colideParede(canvas){
        if(this.x - this.r <= 0){
            this.e = false;
            this.d = true;
            this.ultimoColide = "parede";
            this.som();
        }else if( this.x >= canvas.width){
            this.d = false;
            this.e = true;
            this.ultimoColide = "parede";
            this.som();
        }
        if(this.y - this.r <= 0){
            this.c = false;
            this.b = true;
            this.ultimoColide = "parede";
            this.som();
        }else if(this.y + this.r >= canvas.height){
            this.b = false;
            this.c = false;
            this.d = false;
            this.e = false;
            this.ultimoColide = "fora";
            this.saiu = true;
        }
    }
    colisao(colisor){
        if((this.x + this.r >= colisor.x) && (this.x - this.r <= colisor.x + colisor.larg) && (this.y + this.r >= colisor.y) && (this.y - this.r <= colisor.y + colisor.alt)){
            // pela esqueda
            if(this.x <= colisor.x){
                this.d = false;
                this.e = true;
            }else if(this.x >= colisor.x + colisor.larg){
                this.e = false;
                this.d = true;
            }
            if(this.y <= colisor.y){
                this.b = false;
                this.c = true;
                this.y = colisor.y-this.r;
                if(colisor.eOPlayer != null){
                    this.reboteTrigonometrico(colisor);
                    this.ultimoColide = "jogador"
                }
                
            }else if(this.y >= colisor.y + colisor.alt){
                this.c = false;
                this.b = true;
            }
            this.som();
            if(colisor.eOPlayer == null){
                
                if(this.ultimoColide=="bloco"){
                    this.multiplicador+=1;
                }else{
                    this.multiplicador =1;
                }
                this.pontos = this.pontos+20*this.multiplicador;
                this.ultimoColide ="bloco";
            }
        }
    }
    posiciona(jogador){
        this.x = jogador.x + (jogador.larg/2);
        this.y = jogador.y - (this.r+19);
        this.e =false;
        this.d = false;
        this.c = false;
        this.b = false;
        if(!this.e && !this.d && !this.c && !this.b){
            if(jogador.e || jogador.d){
                this.e = jogador.e;
                this.d = jogador.d;
                this.c = true;
            }
        }
    }
    som(){
        this.somBloco.currentTime = 0;
        this.somBloco.play();
    }
    somSaiu(){
        
    }
    reboteTrigonometrico(colisor){
        var secao = colisor.larg/5;
        if(this.x<=colisor.x+secao){
            this.velx = 6;
            this.vely = 3.5;
            this.e = true;
            this.d = false;
        }else if(this.x <= colisor.x+secao*2){
            this.velx = 3.5;
            this.vely = 6;
            this.e = true;
            this.d = false;
        }else if(this.x < colisor.x+secao*3){
            this.velx =0;
            this.vely = 7
            this.e = false;
            this.d = false;
        }else if(this.x <= colisor.x+secao*4){
            this.velx =3.5;
            this.vely = 6;
            this.d = true;
            this.e = false;
        }else if(this.x >= colisor.x+secao*4){
            this.velx =6;
            this.vely = 3.5
            this.d = true;
            this.e = false;
        }
    }
}