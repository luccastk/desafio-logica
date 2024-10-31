const nomeHeroi = "nomeAqui" /* digite o nome do herói */
const xpDoHeroi = 0; /* digite o XP do herói */

var nivel = ""

if (xpDoHeroi < 0) {
    console.log("Xp informada incorreta.")
} else {
    if (xpDoHeroi >= 0 && xpDoHeroi <= 1000) {
        nivel = "Ferro"
    } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
        nivel = "Bronze"
    } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
        nivel = "Prata"
    } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
        nivel = "Ouro"
    } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
        nivel = "Platina"
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        nivel = "Ascendente"
    } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
        nivel = "Imortal"
    } else if (xpDoHeroi >= 10001) {
        nivel = "Radiante"
    }

    console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivel}`)
}
