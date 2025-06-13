//Lista de exeercicios em while e for 

function exercicio1(){

let a = 0,b = 0,c = 0,d = 0, i = 0, aux = 0,conta = 0 

while (i <= 5){
    a = Number(prompt(` Insira o Valor A :`))
    b = Number(prompt(` Insira o valor B :`))
    c = Number(prompt(` Insira o valor C :`))
    d = Number(prompt(` Insira o valor D :`))

    while( conta <=3 ){
        if( a > b){
            aux = a; a = b; b = aux
        }
        if(b > c){
            aux = b; b = c; c = aux
        }
        if(c > d){
           aux = c; c = d; d = aux
        }
        conta++
    }
    alert(`Ordem Crescente : ${a}, ${b}, ${c}, ${d} 
        \n Ordem Decrescente : ${d}, ${c}, ${b}, ${a}`)
     i++
}

function exe1for(){



    let a, b, c , d, i = 0, conta = 0, aux = 0


    for(i = 1; i <= 5 ; i++){
        a = Number(prompt(`A :`))
        b = Number(prompt(`B :`))
        c = Number(prompt(`C :`))
        d = Number(prompt(`D :`))



        for( conta = 1; conta <= 3; conta++){
            if(a > b){
                aux = a; a = b; b = aux
            }
            if(b > c){
                aux = b; b = c; c = aux
            }
            if( c > d){
                aux = c; c = d; d = aux
            }
        }

    alert(` Ordem Crescente : ${a}, ${b}, ${c}, ${d}
        \n  Ordem Decrescente : ${d}, ${c}, ${b}, ${a}`)

    }
}


}