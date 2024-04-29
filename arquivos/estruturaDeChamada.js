//variaveis globais

let menu  =new Menu(0,canvas.height-100,canvas.width, canvas.height,"rgba(0,0,0,0.1)")
let estado ;
let iniciou = false;

let cliqueInicio = document.addEventListener("click",()=>{      
    if(!iniciou){
        if(document.body.requestFullscreen)
            document.body.requestFullscreen();
        else if(document.body.mozRequestFullScreen)
            document.body.mozRequestFullScreen();
        else if(document.body.webkitRequestFullScreen)
            document.body.webkitRequestFullScreen();
        else if(document.body.msRequestFullScreen)
            document.body.msRequestFullScreen();
        estado = new Estado(menu);
        //inicia
    
        inicia();
    }
        
    
})

//função inicial (chamada única)
function inicia(){
        laco();
        iniciou = true;
}

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

