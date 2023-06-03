/*CAUCULAR A MÉDIA DDE 3 NOTAS DE UM ALUNO E COLOCAR CONDIÇÕES:
1: >5 REPROVADO
2: >=5 && <=7 RECUPERAÇÃO
3: >7PASSOU DE SEMESTRE
*/
const nota1 = 10;
const nota2 = 3;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);
 
if(media <5){
    console.log("Reprovado");
} else if (media >= 5 && media <= 7){
    console.log("Recuperação");
}else{
    console.log("Passou de semestre")
}