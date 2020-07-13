let rs = require('readline-sync');

let rodadas = rs.questionInt('O jogo tera quantas rodadas? (0 para indefinido) ');

if (rodadas == 0) {
    rodadas = 100;
}

let jogadores = rs.questionInt('Quantos jogadores vao jogar? (maximo 6; minimo 2) ');

while (jogadores > 6 || jogadores < 2) {
    jogadores = rs.questionInt('Valor invalido! (E necessario que seja mais que 2 jogadores e menos que 6). Digite o numero de jogadores: ');
}

let contador = 0;
let nomesJogadores = [];
let jogadoresArray = [];
for (contador; contador < jogadores; contador++) {
    let perguntaNomes = rs.question(`Qual eh o nome do jogador ${contador+1}: `);
    nomesJogadores.push(perguntaNomes);
    jogadoresArray[contador] = [];
}

contador = 0;
for (contador; contador < rodadas; contador++) {
    for (let i = 0; i < jogadores; i++) {
        let perguntaPontos = rs.questionInt(`${nomesJogadores[i]} fez quantos pontos? `);
        jogadoresArray[i].push(perguntaPontos);
    }
}
console.log(jogadoresArray);

contador = 0;
for (contador; contador < jogadores; contador++) {
    let total = jogadoresArray[contador].reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0)

    jogadoresArray[contador] = total;
    // console.log(total);
}

contador = 0;
for (contador; contador < jogadores; contador++) {
    console.log(`O ${nomesJogadores[contador]} fez ${jogadoresArray[contador]} pontos`);
}