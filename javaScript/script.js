/*
function somatorio() {
    valor = document.getElementById("valorRecebido").value;
    if (valor < 4) {
        return
    }

    var valoresDivisiveis = []

    const reducer = (acumulador, valorAtual) => acumulador + valorAtual
    for (let i = 1; i < valor; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log("O número " + i + " é Divisivel por 3 ou 5")
            valoresDivisiveis.push(i)
        }
    }

    var x = valoresDivisiveis.reduce(reducer)
    console.log("Resultado: ", x)

    document.getElementById("primeiraTela").innerHTML = "{ " + x + " }";
    document.getElementById("segundaTela").innerHTML = "{ " + valoresDivisiveis + " }";
}
*/



class CobrasEscadas {
    constructor(player1, player2) {
        this.player1 = 1;
        this.player2 = 1;
        this.playerSeletor = 1;
        this.pontosP1 = document.getElementById("pontosP1");
        this.pontosP2 = document.getElementById("pontosP2");
        this.mensagem = document.getElementById("mensagem");
        this.mostraDado1 = document.getElementById("mostraDado1");
        this.mostraDado2 = document.getElementById("mostraDado2");

      }
      


      jogar(dado1, dado2) {
        

        console.log("Dado 1:", dado1);
        console.log("Dado 2:", dado2);
        mostraDado1.innerHTML = dado1;
        mostraDado2.innerHTML = dado2;

        if(this.playerSeletor == 1){
            this.player1 += dado1 + dado2;
            this.playerSeletor = 2;
            console.log("Player 1 esta na casa: " + this.player1);
            pontosP1.innerHTML = "casa: " + this.player1;
            mensagem.innerHTML = "{ PLAYER 1 ESTA NA CASA " + this.player1 + " }";
        } else if(this.playerSeletor == 2){
            this.player2 += dado1 + dado2;
            this.playerSeletor = 1;
            console.log("Player 2 esta na casa: " + this.player2);
            pontosP2.innerHTML = "casa: " + this.player2; 
            mensagem.innerHTML = "{ PLAYER 2 ESTA NA CASA " + this.player2 + " }";
        } 
    
      }
}

const conbrasEscadas = new CobrasEscadas();

function dado() {
    var numero = Math.floor(Math.random() * 6 + 1)
    return numero;
}

//console.log("Player 1: ", conbrasEscadas.player1)
//console.log("Player 2: ", conbrasEscadas.player2)  

