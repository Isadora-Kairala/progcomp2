// como declarar vetor :
function exe1(){

    let vet = [], par = [], impar = []

        for(let i = 0; i < 6; i++){
            vet.push(Number(prompt(` Insira o ${i + 1}° número :`)))
        }

        for(let i = 0; i < 6 ; i++){
            
        if ( vet[i] % 2 == 0){
             par.push(vet[i])
        }else{
             impar.push(vet[i])
             }

        }
        console.log(` Pares :vetor = ${par.length} com elementos : ${par}`)
        console.log(` Impares: vetor =  ${impar.length} com elementos : ${impar} `)
   
}
