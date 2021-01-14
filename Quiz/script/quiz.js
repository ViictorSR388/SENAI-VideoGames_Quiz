var pontoAtual = 0

function verificar1() {
    
    let resposta1 = document.getElementById("certa1").checked

    if (resposta1 == true) {
        document.getElementById("acertou1").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou1").textContent = `Errou`
    }
}

function verificar2() {
    let resposta2 = document.getElementById("certa2").checked
    
    if (resposta2 == true) {
        document.getElementById("acertou2").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou2").textContent = `Errou`
    }
}

function verificar3() {
    let resposta3 = document.getElementById("certa3").checked
    
    if (resposta3 == true) {
        document.getElementById("acertou3").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou3").textContent = `Errou`
    }
}

function verificar4() {   
    let resposta4 = document.getElementById("certa4").checked
    
    if (resposta4 == true) {
        document.getElementById("acertou4").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou4").textContent = `Errou`
    }
}

function verificar5() {   
    let resposta5 = document.getElementById("certa5").checked
    
    if (resposta5 == true) {
        document.getElementById("acertou5").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou5").textContent = `Errou`
    }
}

function verificar6() {   
    let resposta6 = document.getElementById("certa6").checked
    
    if (resposta6 == true) {
        document.getElementById("acertou6").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou6").textContent = `Errou`
    }
}

function verificar7() {   
    let resposta7 = document.getElementById("certa7").checked
    
    if (resposta7 == true) {
        document.getElementById("acertou7").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou7").textContent = `Errou`
    }
}

function verificar8() {   
    let resposta8 = document.getElementById("certa8").checked
    
    if (resposta8 == true) {
        document.getElementById("acertou8").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou8").textContent = `Errou`
    }
}

function verificar9() {   
    let resposta9 = document.getElementById("certa9").checked
    
    if (resposta9 == true) {
        document.getElementById("acertou9").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou9").textContent = `Errou`
    }
}

function verificar10() {   
    let resposta10 = document.getElementById("certa10").checked
    
    if (resposta10 == true) {
        document.getElementById("acertou10").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou10").textContent = `Errou`
    }
}

function verificar11() {   
    let resposta11 = document.getElementById("certa11").checked
    
    if (resposta11 == true) {
        document.getElementById("acertou11").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou11").textContent = `Errou`
    }
}

function verificar12() {   
    let resposta12 = document.getElementById("certa12").checked
    
    if (resposta12 == true) {
        document.getElementById("acertou12").textContent = `Acertou`
        pontoAtual = pontoAtual + 1
    } else {
        document.getElementById("acertou12").textContent = `Errou`
    }
}

function atual() {
    alert("Você acertou " + pontoAtual + "/12 perguntas")
}