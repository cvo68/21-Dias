let n1 = 4
let n2 = 5

let opcao = 1 //opção a ser escolhida!!

switch(opcao){
    case 1:
        console.log(n1 + n2)
        break;
    case 2:
        console.log(n1 - n2)
        break;
    case 3:
        console.log(n1 * n2)
        break;
    case 4:
        console.log(n1 / n2)
        break;
    default:
        console.log("Operação inválida!!")
        break;
}