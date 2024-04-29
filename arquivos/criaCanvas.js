//canvas e contexto
let canvas = document.querySelector("canvas");
let ctx =canvas.getContext("2d");

//window.document.body.appendChild(canvas);

//tamanho e proporção
let larg = 1920;
let alt = 1080;

canvas.width = larg;
canvas.height = alt;

function ajustarZoom(){
    canvas.style.transform = "scale(1)";
    canvas.style.transformOrigin = "0,0";
}
//window.addEventListener("resize",ajustarZoom);
ajustarZoom();
ctx.textAlign = "center";
ctx.font = "50px Arial"
ctx.fillText("clique para iniciar!",canvas.width/2,canvas.height/2);


