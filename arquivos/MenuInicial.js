class Menu{
    constructor(x, y, larg, alt, cor){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = cor;
        //botoes
        this.xBtn = this.x+this.larg/3

        // logico
        this.clique = null;

        this.btns = new Array();
        this.btns.push(new Botao(this.xBtn, this.y+10, this.larg/3, 20,"green","jogar",""));
        this.btns.push(new Botao(this.xBtn, this.y+60, this.larg/3, 20,"green","opções",""));
        this.btns.push(new Botao(this.xBtn, this.y+110, this.larg/3, 20,"red","sair",""));
    }
    atualiza(){
        // adiciona a função de clique
        if(this.clique === null){
            this.clique = this.click();
        }

        //atualiza os botões
        for(let i = 0; i < this.btns.length; i++){
            this.btns[i].atualiza();
        }
            
    }
    desenha(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
       for(var i = 0; i< this.btns.length; i++){
            this.btns[i].desenha(ctx);
        }
    }

    click(){
        let canvas = window.document.querySelector("canvas");
        return canvas.addEventListener("click", (e)=>{
            for(let i = 0; i < this.btns.length; i++){
                this.verificaClique(e.clientX,e.clientY, this.btns[i])
            }
        })
        
    }
    //usado dentro do evento de clique
    verificaClique(x,y,btn = Botao){
        if(x >= btn.x && x<=btn.x+btn.larg){
            if(y >= btn.y && y <= btn.y+btn.alt)
                btn.clique = true;
        }
    }
}