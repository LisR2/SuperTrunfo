var carta01 = {
  nome: 'Runa Yomozuki',
  imagem:"https://i.pinimg.com/originals/55/58/32/555832842c67b741489b96c845458a05.jpg",
  atributos:{
  Altura:'130 cm',
  Ano:3,
  Rank:'Membro do conselho estudantil'
   }
}

var carta02 = {
  nome:'Mary Saotome',
  imagem: "https://pm1.aminoapps.com/7510/64a8aa38423bc6750cc64918c9168034b9a15997r1-736-661v2_00.jpg",
  atributos:{
  Altura:'162 cm',
  Ano:2,
  Rank: 'Estudante'
}
}

var carta03 = {
  nome:'Midari Ikishina',
  imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GVUbnbq9lbJ5jhk-tAeXLTCoP6ETllz0Sw&usqp=CAU",
  atributos:{
  Altura:'170 cm',
  Ano:2,
  Rank:'Membro do conselho estudantil'
  }
}

var carta04 ={
  nome:"Yumeko Jabami",
imagem:"http://pm1.narvii.com/7182/bd57a61c4b94d7a868cd0eaeaac44b287a6a1ef7r1-855-672v2_00.jpg",
  atributos:{
    Altura:'166 cm',
    Ano:2,
    Rank:'Estudante'
  }
}

var carta05 = {
  nome:'Kirari Momobami',
  imagem: 'https://images7.alphacoders.com/986/thumb-1920-986868.png',
  atributos:{
    Altura:'166 cm',
    Ano:3,
    Rank:'Presidente do gremio estudantil'
}
}

var carta06={
  nome:'Ririka Momobami',
  imagem:'http://pm1.narvii.com/7547/b8116db89c04d614f0e27254230094c7fa34b35br1-720-751v2_00.jpg',
  atributos:{
    Altura:'166 cm',
    Ano:3,
    Rank:'Vice-presidente do gremio estudantil'
  }
}

var carta07={
  nome:"Ryota Suzui",
  imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHgcUtIYdgkFCEWPwbk6v4QrbJR3-pnO8LA&usqp=CAU",
  atributos:{
    Altura:'173 cm',
    Ano:2,
    Rank:'Estudante'
  }
}

var carta08={
  nome:'Sayaka Igarashi',
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgCASDWRoK20Qs1lirOMXJFqgXmHZHj2zDMw&usqp=CAU',
  atributos:{
    Altura:'160 cm',
    Ano:2,
    Rank:'Membro do conselho estudantil'
  }
}

var carta09={
  nome:'Itsuki Sumeragi',
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpEGEx89ySQxK3GxqCUmkBIMq2JG0l0mArA&usqp=CAU',
  atributos:{
    Altura:'158 cm',
    Ano:1,
    Rank:'Membro do conselho estudantil'
}
}

var carta10={
  nome:'Kaede Manyuda',
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfC6qnqly2dheKPaJtEfAxcEgRBhC9F9EuEA&usqp=CAU',
  atributos:{
    Altura:'180 cm',
    Ano:2,
    Rank:'Membro do conselho estudantil'
  }
}

var carta11={
  nome:"Yumemi Yumemite",
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQPyaTKrgzKroXS8vwU1_KOQsSnCPCwA75g&usqp=CAU',
  atributos:{
    Altura:'161 cm',
    Ano:2,
    Rank:'Membro do conselho estudantil'
  }
}

var carta12={
  nome:'Yuriko Nishinotouin',
  imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRLCFr9Nb4uK3pdmrVyWlcupNdhfLOnReUQ&usqp=CAU',
  atributos:{
    Altura:'163 cm ',
    Ano:3,
    Rank:"Membro do conselho estudantil"
  }
}

'Presidente do gremio estudantil'<'Vice presidente do gremio estudantil'

var cartaMaquina
var cartaJogador
var cartas = [carta01, carta02, carta03, carta04, carta05, carta06, carta07, carta08, carta09, carta10, carta11, carta12]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

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

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

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

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}