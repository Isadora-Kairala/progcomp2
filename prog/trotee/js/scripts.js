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

    // recupera a  qtd de kits
    let kit = Number(document.getElementById("kit").value)
    let equipe = document.getElementById("equipe").value
    let pontoskit = 0 
    if (equipe == "Laranja") {
        if (kit >= 97) {
            pontoskit = 5000 + ((kit - 97) * 30)
        }
        else if (kit >= 78){
            pontoskit = 4000 + ((kit - 78) * 30)
        }
        else if (kit >= 49) {
            pontoskit = 2500  + ((kit - 49) *30) 
        }
        else if ( kit >= 19) {
            pontoskit = 1000 + ((kit - 19) * 30)
        }   
        
    }
    alert(pontoskit)
    soma = soma + (pontoskit);(kit)
    let suplemento = document.getElementById("suplemento").value
    soma = soma + (15 * Number(suplemento))

    
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