function calcular(){
    //recupera o valor da acão social digitado 
    //declarar variável sem tipo
    let resultado = 0
    let acaoSocial = document.getElementById("acaoSocial").value
    resultado = resultado + Number(acaoSocial)
    
    let leite = document.getElementById("leite").value
    resultado = resultado + (2 * Number(leite ))
    
    //recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    // vamos somar os valores
    resultado = resultado + Number(homenagem)
    
    document.getElementById("resposta").innerHTML = resultado.toFixed(2)
    
    }