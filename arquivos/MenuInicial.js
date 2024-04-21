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
        this.clique = this.click();

        this.btns = new Array();
        this.btns.push(new Botao(this.xBtn, this.y+10, this.larg/3, 20,"green","jogar",""));
        this.btns.push(new Botao(this.xBtn, this.y+60, this.larg/3, 20,"green","opções",""));
        this.btns.push(new Botao(this.xBtn, this.y+110, this.larg/3, 20,"red","sair",""));
    }
    atualiza(){
    
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

    //adiciona o evento de cliques 
    click(){
        let canvas = window.document.querySelector("canvas");
        return canvas.addEventListener("click", (e)=>{
            for(let i = 0; i < this.btns.length; i++){
                this.btns[i].click(e.clientX,e.clientY);
            }
        });
    }
    
}