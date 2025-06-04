// como declarar vetor :
function exe1(){
    //preencher um vetor com 6 numneros
    //mostrar os numeros pares
    // os impares
    //quant de par e impar

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

function exe2(){
    let vet = [], mult2 = [], mult3 = [], mult2e3 = [], i = 0
 
    for(i = 0; i < 7; i++){

        vet.push(Number(prompt(` Insira o ${i + 1}° número :`)))

    }
    for(i = 0; i < 7 ; i++){


        if(vet[i] % 2 == 0 & vet[i] % 3 == 0){

            mult2e3.push(vet[i])

        }else if(vet[i] % 2 == 0){

            mult2.push(vet[i])

        }else{

            mult3.push(vet[i])
        
            }
    }
    console.log(` Os números multiplos de 2 são : ${mult2} `)
    console.log(` Os números multiplos de 3 são : ${mult3}`)
    console.log(` Os números mult de 2 e 3 são : ${mult2e3}`)
}

function exe3(){
    let codCliente = [], codProduto = [], quant = [],i = 0

     for(i = 0; i < 10; i++){
         codCliente.push(Number(prompt(` Insira o ${i + 1}° código do cliente :`)))
         codProduto.push(Number(prompt(` Insira o ${i + 1}° código do produto :`)))
         quant.push(Number(prompt(` Insira a quantidade :`)))
                           }


    console.log(`  cod cliente   \t   Cod produto   \t     quantidade `)


     for(i = 0; i < 10; i++){
        console.log(`  ${codCliente[i]}   \t   ${codProduto[i]}   \t    ${quant[i]}`)
                            }
                        

}