// Código especial dos carros

// Listas
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.9];
let comprimentoCarros = 50;
let larguraCarros = 40;

function mostraCarro(){
  for (let i = 0; i < imagemDosCarros.length; i++){
  image(imagemDosCarros[i], xCarros[i], yCarros[i], comprimentoCarros, larguraCarros);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemDosCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function retornaCarro(){
  for (let i = 0; i < imagemDosCarros.length; i++)
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}
