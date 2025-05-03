// criando o canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

document.getElementsByTagName("h1")[0].innerHTML="";

canvas.width = window.innerWidth;  
canvas.height = window.innerHeight ;
canvas.style.margin = "0";
canvas.style.padding = "0";

window.document.body.appendChild(canvas);

var estado = "menu";
// variaveis de teste

//CRIA E DESENHA O MENU
var menu = new Menu();
//cria objeto jogador
var jogador = new Player(canvas.width/2-20, canvas.height - 50, "blue");
//cria objeto bola
var bola = new Bola(200,canvas.height - 100,7,"red");
bola.posiciona(jogador);
var bloco = new Array();
//objeto de organização das fases do jogo
var organiza = new Organiza();
var msgFase = new Mensagem(canvas.width/2 - canvas.width/5, canvas.height/2,"fase01","",50);

// laço e fuções principais
function loop(){
    requestAnimationFrame(loop);
    update();
    draw();
}
loop();
//
function update(){
    // verifica o estado do jogo para a função UPDATE
    if(estado == "menu"){
        
    }else if(estado == "fase01"){
        updateFase01();
        msgFase.update();
    }else if (estado == "fase02"){
        updateFase02();
        msgFase.update();
    }else if (estado == "fase03"){
        updateFase03();

        msgFase.update();
    }else if (estado == "fase04"){
        updateFase04();

        msgFase.update();
    }
    else if (estado == "fase05"){
        updateFase05();

        msgFase.update();
    }else if(estado == "venceu"){
        venceu();
    }
    if(estado == "fase01" || estado == "fase02" || estado == "fase03" || estado == "fase04" || estado =="fase05"){
        jogador.update(canvas);
        bola.update(canvas, jogador);
        bola.colisao(jogador);
        
        if(bola.saiu){
            bola.posiciona(jogador);
            bola.saiu = false;
            jogador.vidas--;
            if(jogador.vidas <= 0){
                estado = "menu";
                organiza.comecouAgora = true;
                organiza.reinicia();
                jogador.vidas = 3;
                jogador.posiciona();
                bola.posiciona(jogador);
                if(jogador.record < bola.pontos)
                    jogador.record = bola.pontos;
                bola.pontos=0;
                organiza.fase01(bloco);
                msgFase.reinicia("fase 1");
            }      
        }

        for(var i in bloco){
            bola.colisao(bloco[i]);
        }
    
        for(var i in bloco){
            bloco[i].colisao(bola);//diminui as vidas
            if(bloco[i].vidas <=0){
                bloco.splice(i,1)
            }
        }
    }
}
function draw(){

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height) // pinta o fundo
    if(estado == "menu"){
        drawMenu();
        msgFase.drawPontos("SEU RECORD: "+jogador.record,0,30);
    }else if(estado == "fase01"){
        
    }else if(estado == "fase02"){
        
    }
    if(estado == "fase01" || estado == "fase02" || estado == "fase03" || estado == "fase04" || estado=="fase05"){
        jogador.draw(ctx); //desenha o jogador
        bola.draw(ctx); // desenha a bola
        
        //desenha os blocos
        for(var i in bloco){
            bloco[i].draw(ctx);
        }
        msgFase.drawPontos("pts: "+bola.pontos,canvas.width-canvas.width/3,20);
        msgFase.draw(ctx);
        if(bola.multiplicador !=1){
            msgFase.drawPontos("x"+bola.multiplicador,canvas.width/2,canvas.height/2)
        }
    }

}

// Menu
function drawMenu(){
    menu.draw();
}



// FASE 01
function updateFase01(){
    if(!organiza.inicializou.f1){
        organiza.fase01(bloco, jogador);

        msgFase.reinicia("fase 1");
    }
        
    if(bloco.length ==0){
        estado = "fase02";
        jogador.posiciona();
        bola.posiciona(jogador);
    }  
}


function updateFase02(){
    if(!organiza.inicializou.f2){
        organiza.fase02(bloco, jogador);

        msgFase.reinicia("fase 2");
    }
    if(bloco.length ==0){
        estado = "fase03";
        jogador.posiciona();
        bola.posiciona(jogador);
    }  
}


function updateFase03(){
    if(!organiza.inicializou.f3){
        organiza.fase03(bloco, jogador);

        msgFase.reinicia("fase 3");
    }
    if(bloco.length == 0){
        estado = "fase04";
        jogador.posiciona();
        bola.posiciona(jogador);
    }  
}

function updateFase04(){
    if(!organiza.inicializou.f4){
        organiza.fase04(bloco, jogador);

        msgFase.reinicia("fase 4");
    }
    if(bloco.length == 0){
        estado = "fase05";
        jogador.posiciona();
        bola.posiciona(jogador);
    }  
}

function updateFase05(){
    if(!organiza.inicializou.f5){
        organiza.fase05(bloco, jogador);

        msgFase.reinicia("FINAL");
    }
    if(bloco.length == 0){
        estado = "venceu";
        jogador.posiciona();
        bola.posiciona(jogador);
    }  
}

function venceu(){
    msgFase.reinicia("Parabéns!!!");
    alert("este jogo ainda está em desenvolvimento, reinicie a página para testar novamente!");
}
// eventos

window.addEventListener("keydown",(event)=>{
    if(event.keyCode == jogador.teclas.esquerda)
        jogador.e = true;
    if(event.keyCode == jogador.teclas.direita)
        jogador.d = true;
})

window.addEventListener("keyup",(event)=>{
    if(event.keyCode == jogador.teclas.esquerda)
        jogador.e = false;
    if(event.keyCode == jogador.teclas.direita)
        jogador.d = false;
});



canvas.addEventListener("click", (e)=>{
    if(estado == "menu"){
        var canvasRect = canvas.getBoundingClientRect();
        var x = e.clientX-canvasRect.left;
        var y = e.clientY - canvasRect.top;
        // se jogar
        menu.clique(x,y);
        if(menu.clickB1){
            estado = "fase01";
            menu.clickB1 = false;
        }else if(menu.clickB2){
            estado = "menu";
            menu.clickB2 = false;
        }else if(menu.clickB3){
            estado = "menu";
            menu.clickB3 = false;
            var sair = confirm("deseja sair?")
            if(sair){
                window.location.href="https://google.com";
            }
            
        }
    }
    
})

//celular

canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    // Obter as coordenadas do primeiro ponto de toque
    var toqueX = e.touches[0].clientX;
    var toqueY = e.touches[0].clientY;
    if(estado != "menu"){
        if(toqueX <= canvas.width/2){
            jogador.e = true;
            jogador.d = false;
        }if(toqueX >= canvas.width/2){
            jogador.d = true;
            jogador.e = false;
        }
    }else{
        var canvasRect = canvas.getBoundingClientRect();
        var x = toqueX-canvasRect.left;
        var y = toqueY - canvasRect.top;
        // se jogar
        menu.clique(x,y);
        if(menu.clickB1){
            estado = "fase01";
            menu.clickB1 = false;
        }else if(menu.clickB2){
            estado = "menu";
            menu.clickB2 = false;
        }else if(menu.clickB3){
            estado = "menu";
            menu.clickB3 = false;
            var sair = confirm("deseja sair?")
            if(sair){
                window.location.href="https://google.com";
            }
            
        }
    }
});
canvas.addEventListener("touchend",(e)=>{
    jogador.e = false;
    jogador.d = false;
})