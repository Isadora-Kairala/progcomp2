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
function exe03profe(){

        let vet = [],gostouMuito = [], gostou = [], naoGostou = [], porcent


        for( let i = 0; i < 10 ; i++){
            do{
            vet[i] = (Number(prompt(` ${i + 1}° Insira sua resposta: \n 1 - Gostou muito \n 2 - Gostou \n 3 - Não Gostou `)))
            }while( vet[i] != 1 && vet[i] != 2 && vet[i] != 3)
            }   

        for( i = 0; i < 10; i++){

            if(vet[i] == 1){
                gostouMuito.push(vet[i])

            }else if (vet[i] == 2){
                gostou.push(vet[i])

            }else{
                naoGostou.push(vet[i])
            }

        }
        porcent = (naoGostou.length / 10) * 100
        console.log(`Gostaram muito : ${gostouMuito.length}`)
        console.log(`Gostaram : ${gostou.length} `)
        console.log(`Não gostaram : ${naoGostou.length}`)
        console.log(`A porcentagem de quem nao gostou dessa bagaça é : ${porcent.toFixed(2)} %`)

}

function exe4(){

    let i = 0, vet8 = [], acimaMedia = [], soma = 0, media = 0

    for( i = 0; i < 8; i++){

        do{
      vet8[i] = Number(prompt(`Insira o ${i + 1}° numero :`))
        }while(vet8[i] <=0 || isNaN(vet8[i]))

      soma += vet8[i]
    }
     media = soma/8

     for(i = 0; i < 8; i++){
        if(vet8[i] > media){
            acimaMedia.push(vet8[i])
        }
            
     }

     console.log(` A média calculada é : ${ media}  `)
     console.log(` A quantidade de valores acima da média é ${acimaMedia.length } `)
     console.log(` Os valores acima da média são: ${acimaMedia}`)

}

function exe5(){

        let i = 0, vet10 = [], maiores = 0, menores = 0, iguais = 0

        for( i = 0; i < 10; i++){

            do{
            vet10[i] = Number(prompt(` Insira o ${i +1}° valor :`))
            }while(vet10[i] <= 0 || isNaN(vet10[i]))
        }
        for( i = 0; i < 10; i++){
            if( vet10[i+1] > vet10[0]){
                maiores++
            }else if( vet10[i+1] < vet10[0]){
                menores++
            }else if( vet10[i+1] == vet10[0]){
                iguais++
            }
        }
        console.log(` Os numeros maiores que o primeiro : ${maiores}  `)
        console.log(` Os numeros menores que o primeiro : ${menores} `)
        console.log(` Os numeros iguais ao primeiro : ${iguais}`)
      
}
function exe6() {

    let vet12 = [], i = 0, numBuscado = 0, posicoes = [], quant, verdade = 0, falso = 0


    for(i = 0; i < 12; i++){

        do{
        vet12[i] = Number(prompt(`Insira o ${i + 1}° numero :`))
        }while(vet12[i] <= 0 || isNaN(vet12[i]))
    }
    
    do{
    numBuscado = Number(prompt(`Indira o numero a ser buscado :`))
    }while( numBuscado <= 0 || isNaN(numBuscado))

    for(i = 0; i <12; i++){
        if(vet12[i] === numBuscado){
         verdade++
        }
    }
    if(verdade >= 1 ){
    console.log(` O número buscado existe no vetor !!`)
    }else{ console.log(`O numero procurado nao existe no vetor :(`) }



  for( i = 0; i < 12; i++){
    if( vet12[i] === numBuscado){
        posicoes.push(i);
        quant++;
    }
  }


 console.log(`O número ${ numBuscado} aparece ${posicoes.length} vezes, nas posições: ${posicoes.join(", ")}`)


}