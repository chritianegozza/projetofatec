const buttonColors = ["red", "blue", "green", "yellow"];
let gamePatternEl = [];
let userPattern = [];
let score = 0;

//cria ordem aleatoria 
let shuffleOrder = () => {
    userPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor  = buttonColors[randomNumber];
    gamePatternEl.push(randomColor);

    let i = 0
    lightColor(gamePatternEl[i], i);
}

//acende a proxima cor
let lightColor = (element, i) => {
    document.querySelector(`#${element}`).classList.add('selected');
      
    setTimeout(() => {
        document.querySelector(`#${element}`).classList.remove('selected');

        if (gamePatternEl.length-1 != i) {
            setTimeout(function() { lightColor(gamePatternEl[i+1], i+1) }, 200);
        }
    }, 400);
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in userPattern) {
        if(userPattern[i] != gamePatternEl[i]) {
            gameOver();
            break;
        }
    }
    if(userPattern.length == gamePatternEl.length) {
        score++;
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = e => {
    userPattern.push(e.target.id);

    document.querySelector(`#${e.target.id}`).classList.add('selected');
      
    setTimeout(() => {
        document.querySelector(`#${e.target.id}`).classList.remove('selected');
    }, 400);

    setTimeout(checkOrder, 500);
}

////funcao para proximo nivel do jogo
let nextLevel = () => {
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    gamePatternEl = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    shuffleOrder();
}

const buttonsEl = document.querySelectorAll(".genius-click");
for(var i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", click);
}

//inicio do jogo
playGame();