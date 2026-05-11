let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let circulo = {
    x: 200,
    y: 200,
    raio: 50,
    cor: "orange",
    desenha_c: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}

let retangulo = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 0,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha_b: function(){
        this.img.src = 'harden.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x-50, this.y-50, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


let direction =1
function animacao(){
    ctx.clearRect(0,0,400,400)
    if(retangulo.x == 350){
        direction = -1
    }
    if(retangulo.x == 0){
        direction = 1
    }
    retangulo.x = retangulo.x + direction*10;
    retangulo.desenha();
    if(retangulo2.y == 0){
        direction = 1
    }
    if(retangulo2.y == 350){
        direction = -1
    }
    retangulo2.y = retangulo2.y + direction*10;
    retangulo2.desenha();
    requestAnimationFrame(animacao)
}
animacao();

let ganho = 10
function animacao_c(){
    //ctx.clearRect(0,0,400,400)
    circulo.desenha_c();
    requestAnimationFrame(animacao_c)
}
animacao_c();
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-ganho}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+ganho}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-ganho}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+ganho}  
})

function animacao_b(){
    //ctx.clearRect(0,0,400,400)
    bola.desenha_b();
    requestAnimationFrame(animacao_b)
}
animacao_b();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    if(x_mouse>50 && x_mouse<350 && y_mouse>50 && y_mouse<350){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
        bola.x = bola.x;
        bola.y = bola.y;
    }
})