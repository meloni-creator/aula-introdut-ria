//seleção de elementos
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startButton = document.querySelector('.startButton');
const restarButton = document.querySelector('.restarButton');
const gameOver = document.querySelector('.gameOver');

//definição de áudios

const audioStart = new Audio('./soung/audio_theme.mp3');
const audioGameOver = new Audio('./sound/audio_gameover.mp3');

//variáveis de controle de jogo
let gameInterval = null;

//função para iniciar o jogo
const startGame = () => {


pipe.classList.add('pipe-animation');
startButton.style.display = 'nome';
gameOver.style.display = 'nome';
audioStart.currentTime = 0;
audioStart.play();
     if(gameInterval){
    gameInterval = setInterval(gameLoop, 10);
}
};