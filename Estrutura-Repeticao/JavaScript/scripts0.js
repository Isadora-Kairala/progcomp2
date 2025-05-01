function exe0(){
    let nota 
    let conta = 1  // conta do 1 até o 6
    let soma = 0 

    while (conta <= 6){
        nota = Number(prompt(` Informe a nota ${conta}`)) //conta seria o numero "informe a nota 1" 
        soma = soma + nota 
        conta++
    }

    let media = soma / 6 
    alert(` A média das notas é  ${ media.toFixed(1)}`)
}

/*
let conta = 1
while (conta <= 6) {
    alert ("oi")
    conta += 1        == conta = conta + 1  e tem o incrememnto tmb = conta++
} eventualmente a conta vai ser 7 <= 6 entao :
se depois do while eu ter um alert em conta quanto vai estar avaliado conta? 7


oque preconiza uma estutura d repeticao = condicao de parada ; incremento ou decrememnto
*/