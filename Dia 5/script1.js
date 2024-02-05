let valor
let quantidade
let opcao = 1 //1 = gasolina, 2 = etanol, 3 = calibrar
 switch (opcao){
    case 1:
        valor = 5
        quantidade = 10
        console.log(`Voce vai abastecer ${quantidade} litros de gasolina a ${quantidade * valor} reais.`)
        break;
    case 2:
        valor = 3
        quantidade = 15
        console.log(`Voce vai abastecer ${quantidade} litros de etaol a ${quantidade * valor} reais.`)
        break;
    case 3:
        console.log("Pneus calibrados com sucesso!!!")
        break;
    default:
        console.log("Opção inválida!!!")
        break;
 }