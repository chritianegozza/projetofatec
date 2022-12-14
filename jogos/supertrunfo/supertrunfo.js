// criado os atributos das carta 
var cartaJogadorUm = {
    nome: "Thor",
    imagem:"https://cdn.ome.lt/pfIcbIk870YITAzNsEQ2Tx8kdlA=/1200x630/smart/extras/conteudos/thor-love-5.jpg",
    atributos:{ 
      ataque:80,
      defesa:60,
      magia:90
    }
}
  
var cartaJogadorDois = {
    nome: "Homem Aranha",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPOZ3Jd6cPfwq-kv9jnB8LEg95WhRHDVtcgg&usqp=CAU",
    atributos: {
      ataque:80, 
      defesa:65,
      magia:60
    }
}
  
var cartaJogadorTres = {
    nome: "Homem de Ferro",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGKJaG94gKfqvjaeYebES0loDS_uImMaru1Q&usqp=CAU",
     atributos: {
       ataque:90, 
       defesa:65,
       magia:68
    }
}
  
var cartaJogadorQuarto = {
    nome: "Viuva negra",
    imagem:"https://files.nsctotal.com.br/s3fs-public/styles/itapema_blog_post_header/public/2019-07/VN003.jpg?2u4baFQ6jFSzBsibg3hCB5Ce3us8vNbK&itok=8Ie-DBXO",
    atributos:{ 
      ataque:88,
      defesa:70,
      magia:90
    }
}
  
var cartaJogadorQuinto = {
    nome: "capitã Marvel",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGO-NcF2g0EKppmElNs4Exrsg4JOLmmxKTdw&usqp=CAU",
    atributos: {
      ataque:88, 
      defesa:75,
      magia:80
    }
}
  
var cartaJogadorSexto = {
    nome: "Feiticeira Escarlate",
    imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3cPMwzgeB3j_66vFOcf4BWKQxV6YWIW2cg&usqp=CAU",
    atributos: {
       ataque:90, 
       defesa:80,
       magia:90
    }
}
  
var cartaJogadorSete = {
    nome: "Hulk",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcvu6kdrV-Pp81CZ_113v2J83RjiPDmHVXg&usqp=CAU",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}
  
var cartaJogadorOitavo = {
    nome: "Dr EStranho",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jnWN7BtCYecm2HjtgIsCMbcI4jkg5xhHVw&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 100
    }
}
  
var cartaMaquina 
var cartaJogador 
var cartas = [cartaJogadorUm, cartaJogadorDois, cartaJogadorTres, cartaJogadorQuarto, cartaJogadorQuinto, cartaJogadorSexto, cartaJogadorSete, cartaJogadorOitavo]
                // 0              1             2            3             4               5           6           7            
  
var pontosJogador = 0
var pontosMaquina = 0
  
atualizaPlacar()
atualizaQuantidadeDeCartas()
  
// função atulizar a quantidades de cartas
function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
  
    divQuantidadeCartas.innerHTML = html
}
  
// função que atualiza o placar do jogo
function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
    divPlacar.innerHTML = html
}
//  função sortar as cartas  
function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)
  
    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
  
    exibeCartaJogador()
}
  
// funçao exibe a carta do jogador
function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
       divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status'>"
  
       divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
//  o que foi selecionado nas carta como magia, ataque, defesa 
function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}
 
// funçao jogar  mostra se venceu ou perdeu ou empatou
function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    if (cartas.length == 0) {
        alert("Fim de jogo")
          if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
          document.getElementById('btnProximaRodada').disabled = false
    }
  
      divResultado.innerHTML = htmlResultado
      document.getElementById('btnJogar').disabled = true
  
      atualizaPlacar()
      exibeCartaMaquina()
      atualizaQuantidadeDeCartas()
}
  
// função para exibi as cartas
function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
  
    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }
  
    var html = "<div id='opcoes' class='carta-status --spacing'>"
  
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
  
// função para começa a proxima roda
function proximaRodada() {
    var divCartas = document.getElementById('cartas')
  
      divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
  
    var divResultado = document.getElementById('resultado')
      divResultado.innerHTML = ""
}