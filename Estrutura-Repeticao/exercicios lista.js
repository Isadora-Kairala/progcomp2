    
    function exe1(){ //quick sort, algortimo de ordenação
        let w, x, y, z, aux
        let contagem = 1
        let grupo = 1
        
        while (grupo <=5){
        w = Number(prompt(`Informe o 1° valor `))
        x = Number(prompt(`Informe o 2° valor `))
        y = Number(prompt(`Informe o 3° valor `))
        z = Number(prompt(`Informe o 4° valor `))
        
        while(contagem <=3){
            if(w > x){
                aux = w; w = x, x = aux // aux = a; a = b; b = aux
            }
            if(x > y){
                aux = x; x = y; y = aux // aux = b; b = c; c = aux
            }
            if(y > z) {
                aux = y; y = z; z = aux
            }
            contagem++
        
            }
        
            alert(`Ordem Crescente : ${w}, ${x}, ${y}, ${z} 
                \n Ordem Decrescente : ${z}, ${y}, ${x}, ${w}`)
                grupo++
            }
        
        }

        function exe1() {
            let grupo = 1;  // Conta os grupos, de 1 até 5
            let mensagem = "Resultado por ordem lida:\n"; // Para armazenar os resultados na ordem lida
            
            // Coleta os valores de cada grupo
            while (grupo <= 5) { 
                // Coleta 4 valores para cada grupo
                let valor1 = Number(prompt(`Grupo ${grupo} - Valor 1:`));
                let valor2 = Number(prompt(`Grupo ${grupo} - Valor 2:`));
                let valor3 = Number(prompt(`Grupo ${grupo} - Valor 3:`));
                let valor4 = Number(prompt(`Grupo ${grupo} - Valor 4:`));
        
                // Exibe os valores na ordem lida
                mensagem += `Grupo ${grupo}: ${valor1}, ${valor2}, ${valor3}, ${valor4}\n`;
        
                // Ordenar os valores em ordem crescente e decrescente
                let crescente = [valor1, valor2, valor3, valor4].sort((a, b) => a - b);
                let decrescente = [valor1, valor2, valor3, valor4].sort((a, b) => b - a);
        
                // Exibe os valores ordenados
                mensagem += `Grupo ${grupo} - Crescente: ${crescente.join(", ")}\n`;
                mensagem += `Grupo ${grupo} - Decrescente: ${decrescente.join(", ")}\n`;
        
                grupo++;
            }
        
            // Exibir tudo no alert
            alert(mensagem);
        }


        function exe2(){


            let preco = 5.0
            let qtde = 120
            let lucro
            const despesa = 200
            let aux = ""
            let maiolucro = 0
            let precomaiorlucro = 0
            let qtdemaiorlucro = 0
            
            while(preco >= 1.0){
                lucro = (preco * qtde) - despesa
                if (lucro > maiorlucro){
                    maiorlucro = lucro
                    precomaiorlucro = preco
                    qtdemaiorlucro = qtde
                }
                aux = aux + "\n" + (`Preço: ${preco} - Qtde: ${qtde} - despesas: ${despesa} - lucro: ${lucro}`)
                
                preco -= 0.50
                qtde += 26
            
                }
             alert(aux)
            }

            
        function exe3(){
            let idade;
            let contagem = 1;  // conta do 1 até o 8, qu eé a quant. de participantes
            let primeiro = 0;
            let segundo = 0; //    
            let terceiro = 0;
            let quarto = 0; 
            let quinto = 0;//  
            
        
        
            
            while (contagem <= 8)
                { // conta seria o participante, que vai do 1 até o 10 
                idade = Number(prompt(` Participante ${contagem}: Digite sua idade : `));
        
            
                soma += idade 
                if (idade <= 15){
                    primeiro++;
                } else if (idade >= 16 && idade <= 30){
                    segundo++;
                } else if ( idade >= 31 && idade <= 45){
                    terceiro ++;
                } else if ( idade >= 46 && idade <= 60 ){
                    quarto++
                } else if (idade >= 60 && idade <= 120){
                    quinto++;
                } else {
                    alert(`Idade inválida!!`)
                    continue
                }
        
                    contagem++;// igual a conta = conta + 1, adiciona mais um a conta e passa pro prox prompt
            
            }
        
        
        
            let porcentPri = (primeiro / 8) * 100;
            let porcentUlt = (quinto / 8) * 100;
            
            
        
            alert( `Resultado da Pesquisa:
            \nPessoas por faixa etária : \n 1° Faixa (até 15 anos ) = ${primeiro} \n 2° Faixa (de 16 a 30 anos) = ${segundo} \n 3° Faixa (de 31 a 45 anos) = ${terceiro} \n4° Faixa (de 46 a 60 anos) = ${quarto} \n5° Faixa (acima de 60 anos) = ${quinto}
            \n% de pessoas na primeira faixa etária : ${porcentPri.toFixed(2)}
            \n% de pessoas na ultimaa faixa etária : ${porcentUlt.toFixed(2)}`)
        }
        function exe3(){
            let idade;
            let contagem = 1;  // conta do 1 até o 8, qu eé a quant. de participantes
            let primeiro = 0;
            let segundo = 0; //    
            let terceiro = 0;
            let quarto = 0; 
            let quinto = 0;//  
            
        
        
            
            while (contagem <= 8)
                { // conta seria o participante, que vai do 1 até o 10 
                idade = Number(prompt(` Participante ${contagem}: Digite sua idade : `));
        
                
                    soma += idade 
                    if (idade <= 15){
                        primeiro++;
                    } else if (idade >= 16 && idade <= 30) {
                        segundo++;
                    } else if ( idade >= 31 && idade <= 45){
                        terceiro ++;
                    } else if ( idade >= 46 && idade <= 60 ) {
                        quarto++
                    } else {
                        quinto++;
                    }
        
                    contagem++;// igual a conta = conta + 1, adiciona mais um a conta e passa pro prox prompt
               }
            let porcentPri = (primeiro / 8) * 100;
            let porcentUlt = (quinto / 8) * 100;
            
            
        
            alert( `Resultado da Pesquisa:
            \nPessoas por faixa etária : \n 1° Faixa (até 15 anos ) = ${primeiro} \n 2° Faixa (de 16 a 30 anos) = ${segundo} \n 3° Faixa (de 31 a 45 anos) = ${terceiro} \n4° Faixa (de 46 a 60 anos) = ${quarto} \n5° Faixa (acima de 60 anos) = ${quinto}
            \n% de pessoas na primeira faixa etária : ${porcentPri.toFixed(2)}
            \n% de pessoas na ultimaa faixa etária : ${porcentUlt.toFixed(2)}`)
        }
        
        
    
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
        let media
        let porcentagem40

        for(conta = 1; conta <= 5 ; conta++){

            do{
            idade = Number(prompt(` Insira sua idade :`))
              }while(idade <= 0)


            do{
            altura = Number(prompt(` insira sua altura`))
              }while(altura <= 0)


            do{  
            peso = Number(prompt(`Insira seu peso`))
              }while(peso <= 0)


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
         porcentagem40 = (porc /  5) * 100

         console.log(` pessoas maiores de 50 anos : ${sup}\n
                    media das alturas entre 10 e 20 anos : ${media} \n
                    porcentagem de pessoas inferior a 40: ${porcentagem40.toFixed(2)}`)

    }

    function exe8(){

        let idade = 0, altura = 0, peso = 0, corOlho, corCabelo, conta = 0, somaIdadeALt50 = 0, somaidade50 = 0, somaidade150 = 0, porcentA = 0, quantRuivoAzul = 0 , media150, porcentagemA

        for(conta = 1; conta <= 6; conta++){

            do{
            idade = Number(prompt(` participante ${conta} - Insira a sua idade :` ))
              }while( idade <= 0)


            do{  
            altura = Number(prompt(`participante ${conta} - Insira sua altura`))
              }while(altura <= 0 )

            do{
            peso = Number(prompt(` participante ${conta} -Insira seu peso `))
              }while(peso <= 0)

            do {
            corOlho = prompt(` participante ${conta} - Insira a cor do seu olho, sendo: \n A - azul \n P - preto \n V - verde \n C- castanho `).toUpperCase()
            }while( corOlho != `A` && corOlho != `P` && corOlho != `V` && corOlho != `C`)


            do{
            corCabelo = prompt(` participante ${conta} -  Insira a cor do seu cabelo, sendo : \n P - preto \n C - castanho \n L - louro \n R - ruivo`).toUpperCase()
            }while(corCabelo != "P" && corCabelo != "C" && corCabelo != "L" && corCabelo != "R")


            if( idade > 50 && peso < 60){
                somaidade50++
            }
            if(altura < 1.50){
                somaidade150++ //depois a média será feita fora do for
                somaIdadeALt50 += idade
            }
            
            if(corOlho == "A"){
                porcentA++
            }
            if( corCabelo == "R" && corOlho != "A" ){
                quantRuivoAzul++
            }

        
            }
            media150  =  somaIdadeALt50 / somaidade150
            porcentagemA = (porcentA / 6) * 100

            console.log(` A quantidade de pessoas com idade superior a 50  e  peso inferior a 60 kg é  ${ somaidade50}`)
            console.log(` A média das idades das pessoas com altura inferior a 1,50 m é : ${media150 }`) 
            console.log(` A porcentagem de pessoas com olhos azuis entre todas as pessoas é :  ${ porcentagemA.toFixed(2)} % `)
            console.log(` A quantidade de pessoas ruivas que não possuem olho azul é : ${ quantRuivoAzul} `)
        }

    function exe9(){
        let idade = 0, peso = 0, altura = 0, media, conta, somaIdade = 0, pesoAltura90 = 0, Idade103090 = 0, porcentagem
 
        for(conta = 1; conta <= 10; conta++){

               do{
                idade = prompt(` Insira sua idade :`)
                 }while( idade <= 0)


                 do{
                peso = prompt(`Insira seu peso em kg `)
                   }while(peso <= 0)


                do{   
                altura = prompt(`Insira sua altura em metros : `)
                  }while(altura <=0)


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

        let numero = 0, soma = 0, conta = 0, pares = 0, primos = 0, aux = 0


        for(conta = 1; conta <= 10; conta++){
            numero = Number(prompt(`Insira o ${conta}° número :`))
        
            
            if( numero % 2 == 0){
                pares += numero 
            }
                let div = 0
                for(let aux = numero; aux > 0; aux--){
                    if(numero % aux == 0){
                        div++
                    }
                }


                if(div == 2){
                    primos += numero
                }
            }
            console.log(`A soma dos numeros pares é  : ${pares}`)
            console.log(`A soma dos numeros primos é : ${primos}`)
    }