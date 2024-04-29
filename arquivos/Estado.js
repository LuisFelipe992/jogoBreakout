class Estado{
    constructor(menu){
        //objetos relacionados aos estados
        this.menu = menu;

        this.objs = new Array(null,null,this.menu,null,null);
        this.objs[3] = new ModoTeste();
        /*controle de estados
            this.inicio = false;     0
            this.creditos = false;   1
            this.menuInicio = true;  2
            this.modo1  teste        3
            this.opcoes = false;*/
        this.estados = new Array(false,false,true,false,false);
    }

    atualiza(){
        this.verificaParaAtualizar(this.estados,this.objs)
    }
    desenha(){
        this.verificaParaDesenhar(this.estados,this.objs);
    }
    //desenha e verifica se pode desenhar
    verificaParaDesenhar(estado, obj){
        for(let i = 0; i < estado.length; i++){
            if(estado[i]){
                obj[i].desenha();
            }
        }
            
    }
    //atualiza e verifica se pode desenhar
    verificaParaAtualizar(estado, obj){
        for(let i = 0; i < estado.length; i++){
            if(estado[i]){
                obj[i].atualiza();
            }
        }
    }
}