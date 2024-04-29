class Menu{
    constructor(x, y, larg, alt, cor){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = cor;
        //botoes
        

        // logico
        this.clique = this.click();

        this.btns = new Array();
        this.btns.push(new Botao(10, this.y, this.larg/4, 20,"green","jogar",""));
        this.btns.push(new Botao(this.larg/4+15, this.y, this.larg/4, 20,"green","opções",""));
        this.btns.push(new Botao(this.larg-this.larg/4*2+20, this.y, this.larg/4, 20,"red","sair",""));
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