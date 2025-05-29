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

    }