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