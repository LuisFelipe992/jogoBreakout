//variaveis globais

let menu  =new Menu(50,50,500, 500,"rgba(0,0,0,0.1)")

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

function atualiza(){
    menu.atualiza();
}

function desenha(){
    menu.desenha(ctx);
}

laco();