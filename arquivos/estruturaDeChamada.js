//variaveis globais

let menu  =new Menu(50,50,500, 500,"rgba(0,0,0,0.1)")
let estado = new Estado(menu);

//função inicial (chamada única)
function inicia(){

}
inicia();
//função de laço (chamada infinitas vezes)
function laco(){
    requestAnimationFrame(laco);
    ctx.clearRect(0,0,larg,alt);
    atualiza();
    desenha();
}

// laço de atualização
function atualiza(){
    estado.atualiza();
}

// laço de desenho
function desenha(){
    estado.desenha();
}

laco();