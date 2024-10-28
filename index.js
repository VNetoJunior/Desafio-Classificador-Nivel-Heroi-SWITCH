
let nomeDoHeroi = "Imperador_Junior"
let xpTotal = 100
let nivelDoHeroi = " "


switch(true) {
    
    case (xpTotal >= 0 && xpTotal <= 1000) : 
    nivelDoHeroi = "Ferro"
    break

    case (xpTotal >= 1001 && xpTotal <= 2000) : 
    nivelDoHeroi = "Bronze"
    break

    case (xpTotal >= 2001 && xpTotal <= 5000) : 
    nivelDoHeroi = "Prata"
    break

    case (xpTotal >= 5001 && xpTotal <= 7000) : 
    nivelDoHeroi = "Ouro"
    break

    case (xpTotal >= 7001 && xpTotal <= 8000) : 
    nivelDoHeroi = "Platina"
    break

    case (xpTotal >= 8001 && xpTotal <= 9000) : 
    nivelDoHeroi = "Ascendente"
    break

    case (xpTotal >= 9001 && xpTotal <= 10000) : 
    nivelDoHeroi = "Imortal"
    break

    case (xpTotal >= 10001) : 
    nivelDoHeroi = "Radiante"
    break

    default: (console.log("Erro, esse nível não é válido!"))
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`)