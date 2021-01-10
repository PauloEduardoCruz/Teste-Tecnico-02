class CobrasEscadas {
  constructor(player1, player2) {
    this.player1 = 0;
    this.player2 = 0;
    this.playerSeletor = 1;
    this.pontosP1 = document.getElementById("pontosP1");
    this.pontosP2 = document.getElementById("pontosP2");
    this.mensagem = document.getElementById("mensagem");
    this.mostraDado1 = document.getElementById("mostraDado1");
    this.mostraDado2 = document.getElementById("mostraDado2");
  }


  jogar(dado1, dado2) {
    // trava a função caso algum dos jogadores já tenha vencido
    if (this.player1 == 100 || this.player2 == 100) {
      mensagem.innerHTML = "{ O JOGO ACABOU! }";
      return
    }

    mostraDado1.innerHTML = dado1;
    mostraDado2.innerHTML = dado2;


    // Player 1
    if (this.playerSeletor == 1) {
      this.player1 += dado1 + dado2;

      //verificando e fazendo o tratamento caso o jogador passe dos 100 pontos
      if (this.player1 > 100) {
        this.player1 += -100;
        this.player1 = 100 - this.player1;
      }

      const j = this.player1;

      //verificando se o jogador encontrou alguma cobra ou escada
      this.player1 = this._regras(this.player1)

      pontosP1.innerHTML = "casa: " + this.player1;

      //mensagem 
      if (j == 2 || j == 7 || j == 8 || j == 15 || j == 21 || j == 28 || j == 36 || j == 51 || j == 71 || j == 78 || j == 87) {
        mensagem.innerHTML = "{ PLAYER 1 ENCONTROU UMA ESCADA PARA A CASA " + this.player1 + " }";
      } else if (j == 16 || j == 46 || j == 49 || j == 62 || j == 64 || j == 74 || j == 89 || j == 92 || j == 95 || j == 95 || j == 99) {
        mensagem.innerHTML = "{ PLAYER 1 ENCONTROU UMA COBRA E ESTA NA CASA " + this.player1 + " }";
      } else if (j == 100) {
        mensagem.innerHTML = "{ PLAYER 1 VENCEU!!! }";
      } else
        mensagem.innerHTML = "{ PLAYER 1 ESTA NA CASA " + this.player1 + " }";


      //fazendo o tratamento caso os dados sejam iguais
      if (dado1 == dado2) {
        this.playerSeletor = 1;
      } else {
        this.playerSeletor = 2;
      }



      // Player 2
    } else if (this.playerSeletor == 2) {
      this.player2 += dado1 + dado2;

      //verificando e fazendo o tratamento caso o jogador passe dos 100 pontos           
      if (this.player2 > 100) {
        this.player2 += -100;
        this.player2 = 100 - this.player2;
      }

      const j = this.player2;

      //verificando se o jogador encontrou alguma cobra ou escada
      this.player2 = this._regras(this.player2)

      pontosP2.innerHTML = "casa: " + this.player2;

      //mensagem 
      if (j == 2 || j == 7 || j == 8 || j == 15 || j == 21 || j == 28 || j == 36 || j == 51 || j == 71 || j == 78 || j == 87) {
        mensagem.innerHTML = "{ PLAYER 2 ENCONTROU UMA ESCADA PARA A CASA " + this.player2 + " }";
      } else if (j == 16 || j == 46 || j == 49 || j == 62 || j == 64 || j == 74 || j == 89 || j == 92 || j == 95 || j == 95 || j == 99) {
        mensagem.innerHTML = "{ PLAYER 2 ENCONTROU UMA COBRA E ESTA NA CASA " + this.player2 + " }";
      } else if (j == 100) {
        mensagem.innerHTML = "{ PLAYER 2 VENCEU!!! }";
      } else
        mensagem.innerHTML = "{ PLAYER 2 ESTA NA CASA " + this.player2 + " }";


      //fazendo o tratamento caso os dados sejam iguais          
      if (dado1 == dado2) {
        this.playerSeletor = 2;
      } else {
        this.playerSeletor = 1;
      }
    }
  }


  _regras(casa) {
    var novaCasa = casa;

    // Caso o jogador encontrar uma escada
    switch (casa) {
      case 2:
        novaCasa = 38;
        break;
      case 7:
        novaCasa = 14;
        break;
      case 8:
        novaCasa = 31;
        break;
      case 15:
        novaCasa = 26;
        break;
      case 21:
        novaCasa = 42;
        break;
      case 28:
        novaCasa = 84;
        break;
      case 36:
        novaCasa = 44;
        break;
      case 51:
        novaCasa = 67;
        break;
      case 71:
        novaCasa = 91;
        break;
      case 78:
        novaCasa = 98;
        break;
      case 87:
        novaCasa = 94;
        break;
    }


    // Caso o jogador encontrar uma cobra
    switch (casa) {
      case 16:
        novaCasa = 6;
        break;
      case 46:
        novaCasa = 25;
        break;
      case 49:
        novaCasa = 11;
        break;
      case 62:
        novaCasa = 19;
        break;
      case 64:
        novaCasa = 60;
        break;
      case 74:
        novaCasa = 53;
        break;
      case 89:
        novaCasa = 68;
        break;
      case 92:
        novaCasa = 88;
        break;
      case 95:
        novaCasa = 75;
        break;
      case 99:
        novaCasa = 80;
        break;
    }

    return novaCasa;
  }
}

const conbrasEscadas = new CobrasEscadas();

function dado() {
  var numero = Math.floor(Math.random() * 6 + 1)
  return numero;
}