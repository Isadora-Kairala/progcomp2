function calcular(){
    //recupera o valor da acão social digitado 
    //declarar variável sem tipo
    let soma = 0
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    
    let leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)


    let kitavulso = document.getElementById("kitavulso").value
    soma = soma + (30 * Number(kitavulso))


    let suplementoavulso = document.getElementById("suplementoavulso").value
    soma = soma + (15 * Number(suplementoavulso))

    
    let arroz5 = document.getElementById("arroz5").value
    soma = soma + (5 * Number(arroz5))


    let arroz1 = document.getElementById("arroz1").value
    soma = soma +  Number(arroz1)



    let feijao2 = document.getElementById("feijao2").value
    soma = soma + (2 * Number(feijao2))


    let feijao1 = document.getElementById("feijao1").value
    soma = soma + Number(feijao1)


    let macarrao = document.getElementById("macarrao").value
    soma = soma + (0.5 * Number(macarrao))


    let oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    








    
    document.getElementById("resposta").innerHTML = soma.toFixed(2)
    
    }