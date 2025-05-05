function exe0(){
    let nota 
    let conta = 1  // conta do 1 até o 6
    let soma = 0 
   // enquanto conta é menor ou igual a 6 
    while (conta <= 6){
        nota = Number(prompt(` Informe a nota ${conta}`)) //conta seria o numero "informe a nota 1" 
        soma = soma + nota 
        conta++
    }

    let media = soma / 6 
    alert(` A média das notas é  ${ media.toFixed(1)}`)
}

/* estrutura de repetição :
 
exemplo : 

let conta = 1
let soma = 0
 while (conta <= 5 ) {
    alert('oi')
    soma = soma + conta
    conta++
 }

 nesse caso a soma armazena o resultado de soma += conta
 sendo soma = 0 entao  no inicio sendo conta = 1 :
 soma + conta =  0 + 1
 conta++ : conta = conta + 1 
 e aassim por diante
 soma + conta = 1 + 2
 soma + conta = 3 + 3
 soma + conta = 6 + 4
 soma + conta = 10 + 5
 soma + conta = 15 + 6
 porém quando conta for 6 da falso, pois nao é menor ou igual a 5.


*/



/*
let conta = 1
while (conta <= 6) {
    alert ("oi")
    conta += 1        == conta = conta + 1  e tem o incrememnto tmb = conta++
} eventualmente a conta vai ser 7 <= 6 entao :
se depois do while eu ter um alert em conta quanto vai estar avaliado conta? 7


oque preconiza uma estutura d repeticao = condicao de parada ; incremento ou decrememnto



na verdade na estutura original era algo como:
let nota 1 = Number(prompt` Informe a nota 1`)
let nota 2 = Number(prompt` Informe a nota 2`)
let nota 3 = Number(prompt` Informe a nota 3`)
let nota 4 = Number(prompt` Informe a nota 4`)
let nota 5 = Number(prompt` Informe a nota 5`)
let nota 6 = Number(prompt` Informe a nota 6`)
portanto simplificou tudo com o while, mas tem como faze também com powerlooping
ou seja o code academy é muito bom pra aprender
*/