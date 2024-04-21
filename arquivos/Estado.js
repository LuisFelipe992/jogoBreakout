class Estado{
    constructor(menu){
        //objetos relacionados aos estados
        this.menu = menu;

        //controle de estados
        this.inicio = false;
        this.creditos = false;
        this.menuInicio = true;
        this.modos = new Array();
        this.opcoes = false;
    }

    atualiza(){
        this.verificaParaAtualizar(this.menuInicio,this.menu)
    }
    desenha(){
        this.verificaParaDesenhar(this.menuInicio,this.menu);
    }
    //desenha e verifica se pode desenhar
    verificaParaDesenhar(estado, obj){
        if(estado){
            obj.desenha();
        }
    }
    //atualiza e verifica se pode desenhar
    verificaParaAtualizar(estado, obj){
        if(estado){
            obj.atualiza();
        }
    }
}