programa {
  funcao inicio() {
    inteiro vet[10], i = 0

    para(i = 0; i < 10 ; i++){
      escreva(" insira o ", i  + 1, "° numero :")
      leia(vet[i])
    }
     inteiro k
     para(i = 0; i < 10; i++){
      para(k = 0; k < 9; i++){
        se( v[k] > v[k+1]){

          inteiro aux = v[k] 

          v[k] = v[k + 1]
          v[k+1] = aux
        }

        
      }
     }


    escreva(" os elementos do vetor são :", vet)
  }
}
