//fase inicial do jogo/prova2: https://youtu.be/kcOKra3zd2c
//video explicativo do jogo:https://youtu.be/-fbsmKIs9RE
//video da gameplay:https://youtu.be/UmF9d2hft1s

var x=80//xRetangulo
var y=140//yRetangulo

var img7=[];//Personagem
var tempo2=0;
var contador2=0;
var z=150;//xJogador
var w=335;//yJogador
var h=75;//rJogador

var pontos=0//pontos
var vidas=3//vida

var aleatorio=Math.floor(Math.random()*(9-0)+0);
var img6=[];//Números
var tempo=0;
var contador=0;
var a=100;//xObstaculo
var b=100;//yObstaculo
var c=25;//rObstaculo

var opcao=1
var tela=0

let img;

function preload(){
 img=loadImage('quadro.png')
 img2=loadImage('liv.jpg')
 img3=loadImage('apr.jpg')
 img4=loadImage('disc.png')
 img5=loadImage('quadro.jpg')
 img6[0]=loadImage('0.png');
 img6[1]=loadImage('1.png');
 img6[2]=loadImage('2.png');
 img6[3]=loadImage('3.png');
 img6[4]=loadImage('4.png');
 img6[5]=loadImage('5.png');
 img6[6]=loadImage('6.png');
 img6[7]=loadImage('7.png');
 img6[8]=loadImage('8.png');
 img6[9]=loadImage('9.png');
 img7[0]=loadImage('Walk.1.png');
 img7[1]=loadImage('Walk.2.png');
 img7[2]=loadImage('Walk.3.png');
 img7[3]=loadImage('Walk.4.png');
 img7[4]=loadImage('Walk.5.png');
 img7[5]=loadImage('Walk.6.png');
 img7[6]=loadImage('Walk.7.png');
 img7[7]=loadImage('Walk.8.png');
 img7[8]=loadImage('Walk.9.png');
 img7[9]=loadImage('Walk.10.png');
 img7[10]=loadImage('Walk.11.png');
 img7[11]=loadImage('Walk.12.png');
 img7[12]=loadImage('Walk.13.png');
 img7[13]=loadImage('Walk.14.png');
 img7[14]=loadImage('Walk.15.png');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200, 255, 255);
 
  if(tela==0)
   menu();
  if(tela==1)
    fase1();
  if(tela==2)
    instrucoes();
  if(tela==3)
    creditos();
  if(tela==4)
    fase2();
  if(tela==5)
    fase3();
  if(tela==6)
    fase4();
  if(tela==7)
    fase5();
  if(tela==8)
    fase6();
  if(tela==9)
    fase7();
  if(tela==10)
    fase8();
  if(tela==11)
    fase9();
  if(tela==12)
    vitoria();
}

function menu() {
  
  image(img, 0, 0, 500, 500)
  
  noFill(100)
  rect(x, y, 170, 45);
  
  fill(255,255,0)
  stroke(0)
  textSize(36);
  text('Math Game', 150, 80);
  
  textSize(28);
  text('Jogar', 90, 170);
  text('Instruções', 90, 270);
  text('Créditos', 90, 370); 
}

function fase1(){
  
  tempo++;
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  fill(255,255,0)
  stroke(0)
  textSize(32);
  
  if(tempo<100){
  text('Fase 1',190,70);
  }

    textSize(40)
   text('3+2=?',190,140);
  
  textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  if(dist(a,b,z,w)<c+h&&aleatorio==5){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==5){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=1){
    tela=4
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function instrucoes(){
  
  fill(0,0,0)
  noStroke(0)
  image(img2, 0, 0, 500, 500)
  
  textSize(32);
  text('Instruções', 180, 80);
  
  textSize(18)
  text('O jogo consiste em'+"\n"+'coletar os valores'+"\n"+'da equação dada na'+"\n"+'tela, caso colete o'+"\n"+'número errado,'+"\n"+'perderá 1 vida.'+"\n"+'Se coletar o correto,'+"\n"+'ganhará 1 ponto.', 50, 130);
  
  text('Vida inicial: 3', 300,250);
  
  text('Realize 3 operações'+"\n"+'para passar de fase.',280,170);
  
  text('Boa sorte e bom jogo',280,300);
  
  text('Ano:3 ano fundamental',50,350);
  
  text('Matéria: Matemática',50,370);
  
  text('Habilidade: Operações'+"\n"+'básicas',50,390);
}

function creditos(){
  
  fill(0,0,0)
  noStroke(0)
  image(img3, 0, 0, 500, 500)
  image(img4, 90, 85, 200, 200)
  textSize(32);
  text('Créditos', 120, 80);
  textSize(25);
  text('Programador: Giovanni', 60, 308)
}

function fase2(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('3+2=5',190,140);
  
    textSize(40)
   text('4+4=?',190,180) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==8){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==8){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=2){
    tela=5
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase3(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('3+2=5',190,140);
  
    textSize(40)
   text('4+4=8',190,180) 
  
  textSize(40)
   text('1+1=?',190,220) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==2){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==2){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=3){
    tela=6
    tempo=0
    pontos=0
    vidas=3
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase4(){

  tempo++;
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  fill(255,255,0)
  stroke(0)
  textSize(32);
  
  if(tempo<100){
  text('Fase 2',190,70);
  }

    textSize(40)
   text('3*2=?',190,140);
  
  textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  if(dist(a,b,z,w)<c+h&&aleatorio==6){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==6){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=1){
    tela=7
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase5(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('3*2=6',190,140);
  
    textSize(40)
   text('5*0=?',190,180) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==0){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==0){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=2){
    tela=8
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase6(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('3*2=6',190,140);
  
    textSize(40)
   text('5*0=0',190,180) 
  
  textSize(40)
   text('8*1=?',190,220) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==8){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==8){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=3){
    tela=9
    tempo=0
    pontos=0
    vidas=3
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase7(){
  
 tempo++;
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  fill(255,255,0)
  stroke(0)
  textSize(32);
  
  if(tempo<100){
  text('Fase 3',190,70);
  }

    textSize(40)
   text('9/3=?',190,140);
  
  textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  if(dist(a,b,z,w)<c+h&&aleatorio==3){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==3){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=1){
    tela=10
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  } 
  
}

function fase8(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('9/3=3',190,140);
  
    textSize(40)
   text('4/2=?',190,180) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==2){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==2){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=2){
    tela=11
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function fase9(){
  
  image(img5, 0, 0, 500, 500);
  image(img6[aleatorio],a,b,c*2,c*2);
  image(img7[contador2%10],z,w,h*2,h*2);
  
  textSize(40)
  text('9/3=3',190,140);
  
    textSize(40)
   text('4/2=2',190,180) 
  
  textSize(40)
   text('2/2=?',190,220) 
  
   textSize(28)
  text('Pontos: '+pontos,345,100)
  text('Vidas: '+vidas,330,130)
  
  b=b+4
  if(b>500){
    a=random(450);
    b=0;
    contador++
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  
  if(contador%10==0){
   contador=0
  }
  
  if(tempo2>5){
   contador2++;
    tempo2=0;
    tempo2++;
  }
  
  if(keyIsDown(LEFT_ARROW)&&z>-50){
     z=z-4
    tempo2++
  }
  if(keyIsDown(RIGHT_ARROW)&&z<320){
     z+=4
    tempo2++;
  }
  if(keyIsDown(UP_ARROW)&&w>335){
     w=w-4
    tempo2++
  }
  if(keyIsDown(DOWN_ARROW)&&w<335){
     w=w+4
    tempo2++
  }
  
  if(dist(a,b,z,w)<c+h&&aleatorio==1){
    pontos=pontos+1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
  }
  else if(dist(a,b,z,w)<c+h&&aleatorio!==1){
    vidas=vidas-1
    a=random(450);
    b=0
    aleatorio=Math.floor(Math.random()*(9-0)+0);
    }
  if(pontos>=3){
    tela=12
    tempo=0
    pontos=0
    vidas=3
  }
  if(vidas<0){
    tela=0
    vidas=3
    pontos=0
  }
  
}

function vitoria(){
  
  image(img, 0, 0, 500, 500)
  
  fill(255,255,0)
  stroke(0)
  textSize(26);
  text('Parabéns, você concluiu'+"\n"+'o Math Game, espero'+"\n"+'que tenha se divertido.'+"\n"+'Até a próxima.'+"\n"+':D', 30, 150);
  
}

function keyPressed() {
  if(key=="ArrowUp" && y>140){
    y=y-100
    opcao=opcao-1;
  }
  if(key=="ArrowDown" && y<300){ 
    y=y+100;
   opcao=opcao+1; 
  }
  if(key=="Enter"){
     tela=opcao
     }
  if(key=="Backspace"){
    tela=0
  }
}