var nick = prompt("Insira seu nick: ")

// let nick = username

// localStorage.setItem(username)

var pontoAtual = 1

function verificar1() {
    
    let resposta1 = document.getElementById("certa1").checked

    if (resposta1 == true) {
        document.getElementById("acertou1").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou1").textContent = `Errou`
    }
}

function verificar2() {
    let resposta2 = document.getElementById("certa2").checked
    
    if (resposta2 == true) {
        document.getElementById("acertou2").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou2").textContent = `Errou`
    }
}

function verificar3() {
    let resposta3 = document.getElementById("certa3").checked
    
    if (resposta3 == true) {
        document.getElementById("acertou3").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou3").textContent = `Errou`
    }
}

function verificar4() {   
    let resposta4 = document.getElementById("certa4").checked
    
    if (resposta4 == true) {
        document.getElementById("acertou4").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou4").textContent = `Errou`
    }
}

function verificar5() {   
    let resposta5 = document.getElementById("certa5").checked
    
    if (resposta5 == true) {
        document.getElementById("acertou5").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou5").textContent = `Errou`
    }
}

function verificar6() {   
    let resposta6 = document.getElementById("certa6").checked
    
    if (resposta6 == true) {
        document.getElementById("acertou6").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou6").textContent = `Errou`
    }
}

function verificar7() {   
    let resposta7 = document.getElementById("certa7").checked
    
    if (resposta7 == true) {
        document.getElementById("acertou7").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou7").textContent = `Errou`
    }
}

function verificar8() {   
    let resposta8 = document.getElementById("certa8").checked
    
    if (resposta8 == true) {
        document.getElementById("acertou8").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou8").textContent = `Errou`
    }
}

function verificar9() {   
    let resposta9 = document.getElementById("certa9").checked
    
    if (resposta9 == true) {
        document.getElementById("acertou9").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou9").textContent = `Errou`
    }
}

function verificar10() {   
    let resposta10 = document.getElementById("certa10").checked
    
    if (resposta10 == true) {
        document.getElementById("acertou10").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou10").textContent = `Errou`
    }
}

function verificar11() {   
    let resposta11 = document.getElementById("certa11").checked
    
    if (resposta11 == true) {
        document.getElementById("acertou11").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou11").textContent = `Errou`
    }
}

function verificar12() {   
    let resposta12 = document.getElementById("certa12").checked
    
    if (resposta12 == true) {
        document.getElementById("acertou12").textContent = `Acertou`
        document.getElementById("spanAtual").textContent = pontoAtual + "/12"
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou12").textContent = `Errou`
    }
}

function refresh() {
    window.location.reload()
    window.scrollTo(0,0)
}

function scrolltop() {
    window.scrollTo(0,0)
}

var rankingNickJSON = {
    primeiro: "AAA",
    segundo: "BBB",
    terceiro: "CCC"
}

var rankingPontoJSON = {
    ponto1: 11,
    ponto2: 6,
    ponto3: 0
}

function gravarRanking() {
    if (pontoAtual >= rankingPontoJSON.ponto1) {
        rankingNickJSON.primeiro = nick
        rankingPontoJSON.ponto1 = pontoAtual
    } else if (pontoAtual < rankingPontoJSON.ponto1) {
        rankingNickJSON.segundo = nick
        rankingPontoJSON.ponto2 = pontoAtual
    } else if (pontoAtual < rankingPontoJSON.ponto2) {
        rankingNickJSON.terceiro = nick
        rankingPontoJSON.ponto3 = pontoAtual
    }

    document.getElementById("ranking").innerHTML = `
    <tbody>
        <tr>
            <th>Chave</th><th>Nick</th><th>Score</th>
        </tr>
        <tr>
            <td>Primeiro</td><td>${rankingNickJSON.primeiro}</td><td>${rankingPontoJSON.ponto1}</td>
        </tr>
        <tr>
            <td>Segundo</td><td>${rankingNickJSON.segundo}</td><td>${rankingPontoJSON.ponto2}</td>
        </tr>
        <tr>
            <td>Terceiro</td><td>${rankingNickJSON.terceiro}</td><td>${rankingPontoJSON.ponto3}</td>
        </tr>
    </tbody>
    `
}
