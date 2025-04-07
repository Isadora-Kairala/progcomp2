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
    let equipe = document.getElementById("equipe").value
    // recupera a  qtd de kits
    let kit = Number(document.getElementById("kit").value)
    
    let suplemento = Number(document.getElementById("suplemento").value)
    
    let pontosKitSup = 0 
    if (equipe == "Laranja") {
        if (kit >= 97 && suplemento >= 49) {
            pontosKitSup = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)

        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKitSup = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            pontosKitSup = 2500  + ((kit - 49) *30) + ((suplemento - 25) * 15)
        }
        else if ( kit >= 19 && suplemento >= 10) {
            pontosKitSup = 1000 + ((kit - 19) * 30) + ((suplemento - 10 ) * 15)
        }   
    }

    if (equipe == "Preta") {
        if (kit >= 103 && suplemento >= 52) {
            pontosKitSup = 5000 + ((kit - 103 ) * 30) + ((suplemento - 52 ) * 15)
        }
        else if (kit >= 82 && suplemento >= 42 ){
            pontosKitSup = 4000 + ((kit - 82 ) * 30) + ((suplemento - 42 ) * 15)
        }
        else if (kit >= 52 && suplemento >= 26 ) {
            pontosKitSup = 2500  + ((kit - 52 ) *30) + ((suplemento - 26 ) * 15)
        }
        else if ( kit >= 21 && suplemento >= 10 ) {
            pontosKitSup = 1000 + ((kit - 21 ) * 30) + ((suplemento - 10 ) * 15)
        }   
    }

    if (equipe == "Roxa") {
        if (kit >= 102 && suplemento >= 51 ) {
            pontosKitSup = 5000 + ((kit -102 ) * 30) + ((suplemento - 51 ) * 15)
        }
        else if (kit >= 82 && suplemento >= 41 ){
            pontosKitSup = 4000 + ((kit - 82 ) * 30) + ((suplemento - 41 ) * 15)
        }
        else if (kit >= 51 && suplemento >= 26 ) {
            pontosKitSup = 2500  + ((kit - 51 ) *30) + ((suplemento - 26 ) * 15)
        }
        else if ( kit >= 20 && suplemento >= 10) {
            pontosKitSup = 1000 + ((kit - 20) * 30) + ((suplemento - 10 ) * 15)
        }   
    }
            




    soma =  soma + (pontosKitSup)
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

    function toggleDropdown() {
        document.querySelector('.select-options').classList.toggle('active');
      }
      
      function selectOption(cor, nome) {
        const select = document.querySelector('.select-selected');
        select.innerHTML = `<span class="color-box" style="background: ${cor}"></span> ${nome}`;
        document.getElementById('equipe').value = nome;
        document.querySelector('.select-options').classList.remove('active');
      }
    

