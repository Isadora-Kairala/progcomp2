programa {
  funcao inicio() {

    inteiro  vet[20], soma = 0, porcentagem, pares = 0, i = 0

    para( i = 0; i < 20; i++){
        escreva(" Insira o ", i +1, "° valor :")
        leia(vet[i])

        soma += vet[i]

        se(vet[i] % 2 == 0){
          pares++
        }
    }

    inteiro menor = vet[0]// aqui eu assumo que o usuario já digitou os valores entao agora posso declarar menor = v[0]

    para(i = 0; i < 20; i++){
        se(vet[i] < menor){
          menor = vet[i]
        }
    }
    
    porcentagem = (pares / 20) * 100

    escreva("  a soma é :  ", soma, "\n")
    escreva("  a porcentagem de numeros pares é : ", porcentagem, "% \n")
    escreva("  o menor valor é : ", menor, "\n")

  
    
     
    
  }
}
