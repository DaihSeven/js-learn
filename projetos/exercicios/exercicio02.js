/*EXERCÍCIO: CAUCULAR UM IMC DE UMA PESSOA, E COLOCAR 5 CONDIÇÕES PARA CADA INTERVALO DE TEMPO E IMPRIMIR UMA MENSAGEM;
- MONTAR IMC 
- CONDIÇÕES:
1: <18.5 ABAIXO DO PESSOA
2: >=18.5 && <=25 PESO NORMAL
3: >=25 && <=30 ACIMA DO PESO
4: >=30 && <=40 OBESO
5: OBESIDADE GRAVE
IMPRIMIR RESULTADOS;*/
const peso = 68;
const altura = 1.75;
const imc = peso/Math.pow(altura,2);//formula para elevar ao quadrado;
console.log(imc);

if(imc <18.5){
    console.log('ABAIXO DO PESO');
} else if( imc>=18.5 && imc<=25){
    console.log('PESO NORMAL');
}else if(imc>=25 && imc<=30){
    console.log('ACIMA DO PESO');
}else if(imc>=30 && imc<=40){
    console.log('Obeso(a)');
}else{
    console.log('Obesidade grave');
}