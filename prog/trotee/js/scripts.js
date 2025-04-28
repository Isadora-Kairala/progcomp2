function calcular(){
    //recupera o valor da acão social digitado 
    //declarar variável sem tipo
    let soma = 0, acaoSocial, homenagem, kit, suplemento, leite, arroz1, arroz5, feijao1, feijao2, oleo;
    
     acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    
     leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    
    //recupera o valor da homenagem digitado
     homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    let equipe = document.getElementById("equipe").value
    // recupera a  qtd de kits
     kit = Number(document.getElementById("kit").value)
    
     suplemento = Number(document.getElementById("suplemento").value)
    
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

    else if (equipe == "Preta") {
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

   else if (equipe == "Roxa") {
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
    else if (equipe == "Verde") {
        if (kit >= 88 && suplemento >= 44 ) {
            pontosKitSup = 5000 + ((kit - 88 ) * 30) + ((suplemento - 44 ) * 15)
        }
        else if (kit >= 70 && suplemento >= 35 ){
            pontosKitSup = 4000 + ((kit - 70 ) * 30) + ((suplemento - 35 ) * 15)
        }
        else if (kit >= 44 && suplemento >= 22 ) {
            pontosKitSup = 2500  + ((kit - 44 ) *30) + ((suplemento - 22 ) * 15)
        }
        else if ( kit >= 18 && suplemento >= 9) {
            pontosKitSup = 1000 + ((kit - 18) * 30) + ((suplemento - 9 ) * 15)
        }   
        
    } else  {
        if (kit >= 93 && suplemento >= 47 ) {
            pontosKitSup = 5000 + ((kit - 93 ) * 30) + ((suplemento - 47 ) * 15)
        }
        else if (kit >= 74 && suplemento >= 38 ){
            pontosKitSup = 4000 + ((kit - 74 ) * 30) + ((suplemento - 38 ) * 15)
        }
        else if (kit >= 47  && suplemento >= 24 ) {
            pontosKitSup = 2500  + ((kit - 47 ) *30) + ((suplemento - 24  ) * 15)
        }
        else if ( kit >= 19 && suplemento >= 9 ) {
            pontosKitSup = 1000 + ((kit - 19 ) * 30) + ((suplemento - 9 ) * 15)
        }   
    }



    soma =  soma + (pontosKitSup)
    arroz5 = document.getElementById("arroz5").value
    soma = soma + (5 * Number(arroz5))


    arroz1 = document.getElementById("arroz1").value
    soma = soma +  Number(arroz1)



    feijao2 = document.getElementById("feijao2").value
    soma = soma + (2 * Number(feijao2))


    feijao1 = document.getElementById("feijao1").value
    soma = soma + Number(feijao1)


   macarrao = document.getElementById("macarrao").value
    soma = soma + (0.5 * Number(macarrao))


    oleo = document.getElementById("oleo").value
    soma = soma + Number(oleo)

    sangue = Number(document.getElementById("sangue").value)

    if (equipe == "Laranja"){
        if (sangue >= 49){
            pontosSangue = 2500 + (sangue - 49) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Preta"){
        if (sangue >= 52){
            pontosSangue = 2500 + (sangue - 52) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Roxa"){
        if (sangue >= 51){
            pontosSangue = 2500 + (sangue - 51) * 20
        }
        else {
            pontosSangue = sangue * 20
        }
    }
    else if (equipe == "Verde"){
        if (sangue >= 44){
            pontosSangue = 2500 + (sangue - 44) * 200
        }
        else {
            pontosSangue = sangue * 20
        }
    } else {
        if (sangue >= 47){
            pontosSangue = 2500 + (sangue - 47) * 200
        }
    }
    // soma o sangue
    soma = soma + pontosSangue

    document.getElementById("resposta").innerHTML = soma.toFixed(2)
    
    }

   