    function exe4() {

            let numero  = Number(prompt(`insira o numero para a tabuada :`))
            for(let a = 1; a <= 10; a++ ){
            
            console.log(`\n  ${numero}  x  ${a}  =  ${numero * a } `)
                
            }
    }
 
    function exe5() {
        for(let a = 1; a <= 10; a++){
            for( let b = 1; b <=10; b++){
                console.log( ` ${a} x ${b} == ${a * b} ` )
            }
        }
    }
  function exe06(){

  let valor, codigo, totalvista = 0, totalprazo = 0
  for( let conta = 1; conta <=5 ; conta++){
    do{
        codigo = prompt(` informe o codigo v ( a vista) ou p ( a prazo )`).toUpperCase()
    }
    while( codigo != 'v' && codigo != 'P')
    do{
     valor = Number(prompt(`informe  o valor positivo`))  
    }
    while (valor < 0)
    if (codigo == 'v'){
        totalvista += valor
    }
    else {
        totalprazo +=  valor 
    }


}
   alert(` total a vista : ${totalvista} prazo :  ${totalprazo} `)
   alert(`  total geral : ${totalprazo + totalvista}  e 1a parcela  ${totalprazo/3} `)
  }
    function exe6(){
        
  let V = 0 
  let P = 0
  let val, a, opcao, total

  for(a = 1; a <= 15; a++){
    opcao = prompt(` V - à vista e P - à prazo`)
    if(opcao != "V" && opcao != "v" && opcao != "P" && opcao != "p"){
      console.log(` informe uma opcao valida`)
      a--
      continue
    }

  val = Number(prompt(` Insira o valor da compra :`))
   if (val <= 0){
    console.log(`insira um valor valido`)
    a--
    continue
   }


   if(opcao == "V" || opcao == "v"){
    V += val
   } else{
    P += val
   }
  }
  total = V + P
  console.log(` Valor total á vista : R$ ${V} \n
                valor total á prazo : R$ ${P} \n
                valor total das compras : R$ ${total} \n
                valor da primeira parcela a prazo : R$ ${ (P / 3).toFixed(2)}`

  )

    }

    function exe7() {
        let idade = 0, sup = 0, somaalturas = 0, qnt1020 = 0
        let altura = 0
        let  peso = 0, porc = 0
        let conta = 0
        let media = 0

        for(conta = 1; conta <= 5 ; conta++){
            idade = Number(prompt(` Insira sua idade :`))
            altura = Number(prompt(` insira sua altura`))
            peso = Number(prompt(`Insira seu peso`))

            if(idade > 50){
                sup++
            }

            if(idade >= 10 && idade <= 20){
                somaalturas += altura
                qnt1020++
           
            }


            if(peso < 40 ){
            porc++
            }
        }   
         media = alturas / mediaalturas

        console.log(` pessoas maiores de 50 anos : ${sup}\n
                    media das alturas entre 10 e 20 anos : ${media} \n
                    porcentagem de pessoas inferior a 40: ${porc}`)

    }

    function exe8(){

        let idade = 0, altura = 0, peso = 0, corOlho, corCabelo, conta = 0, somaIdadeALt50 = 0, somaidade50 = 0, somaidade150 = 0, porcentA = 0, quantRuivoAzul = 0 , media150, porcentagemA

        for(conta = 1; conta <= 6; conta++){

            idade = Number(prompt(` Insira a sua idade :` ))
            altura = Number(prompt(` Insira sua altura`))
            peso = Number(prompt(` Insira seu peso `))
            corOlho = prompt(` Insira a cor do seu olho, sendo: \n A - azul \n P - preto \n V - verde \n C- castanho `)
            corCabelo = prompt(` Insira a cor do seu cabelo, sendo : \n P - preto \n C - castanho \n L - louro \n R - ruivo`)
            

            if( idade > 50 && peso < 60){
                somaidade50++
            }
            if(altura < 1.50){
                somaidade150++ //depois a média será feita fora do for
                somaIdadeALt50 += idade
            }
            
            if(corOlho == "A" || corOlho == "a"){
                porcentA++
            }
            if( corCabelo == "R" || corCabelo == "r" && corOlho != "A" || corOlho != "a"){
                quantRuivoAzul++
            }

        media150  =  somaIdadeALt50 / somaidade150
        porcentagemA = (porcentA / 6) * 100

        console.log(` A quantidade de pessoas com idade superior a 50  e  peso inferior a 60 kg é  ${ somaidade50} \n
                     A média das idades das pessoas com altura inferior a 1,50 m é : ${media150} \n
                     A porcentagem de pessoas com olhos azuis entre todas as pessoas é :  ${ porcentagemA.toFixed(2)} % \n
                     A quantidade de pessoas ruivas que não possuem olho azul é : ${ quantRuivoAzul} `)

        }
        }

    function exe9(){
        let idade = 0, peso = 0, altura = 0, media, conta, somaIdade = 0, pesoAltura90 = 0, Idade103090 = 0, porcentagem
 
        for(conta = 1; conta <= 10; conta++){
                idade = prompt(` Insira sua idade :`)
                peso = prompt(`Insira seu peso em kg `)
                altura = prompt(`Insira sua altura em metros : `)

                if(peso > 90 && altura < 1.50){
                pesoAltura90++
                }
                if(idade >= 10 && idade <= 30 && altura == 90){
                Idade103090++
                }

                somaIdade += idade
            }

            media = somaIdade / 10
            porcentagem = (Idade103090 / 10 ) * 100

            console.log(`A média das idades entre as 10 pessoas é  : ${media} \n
                  A quantidade das pessoas com peso superior a 90 kg e altura inferior a 1,50 é : ${pesoAltura90}    \n
                  A porcentagem de pessoas com idade entre 10 e 30 anos entre os que medem 1,90 é: ${porcentagem.toFixed(1)}% `)
        
    }

    function exe10() {

     let numero = 0, soma = 0, conta = 0, pares = 0, primos = 0


      for(conta = 1; conta <= 10; conta++){
        numero = Number(prompt(`Insira um número qualquer :`))
       
        
        if( numero % 2 == 0){
            pares += numero 
        }
        

      }



    }