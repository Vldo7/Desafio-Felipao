// Função para calcular saldo e determinar o nível
function calcularSaldoERank(vitorias, derrotas) {
    // Calculando o saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Desconhecido"; // Caso o valor seja inválido
    }

    // Retorna o resultado como um objeto
    return { saldoVitorias, nivel };
}

// Entrada de dados pelo usuário
const prompt = require("prompt-sync")();
let vitorias = parseInt(prompt("Digite o número de vitórias: "));
let derrotas = parseInt(prompt("Digite o número de derrotas: "));

// Chamando a função e obtendo os resultados
const resultado = calcularSaldoERank(vitorias, derrotas);

// Exibindo a saída
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`);
