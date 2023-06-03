/*CAUCULAR PREÇO DE UM PRODUTO PELO PRÇO DE ETIQUETA E A ESCOLHA DE CONDIÇÃO DE PAGAMENTO;
CONDIÇÕES;
1: DEBITO 10% DE DESCONTO;
2: DINHEIRO OU PIX 15% DE DESCONTO;
3: DUAS VEZES PREÇO NORMAL;
4: TRÊS VEZES 10% DE JUROS;
*/
const precoEtiqueta = 150;
const formaDePagamento = 4;

if(formaDePagamento ===1){
console.log(precoEtiqueta - (precoEtiqueta*0.1));
}else if(formaDePagamento ===2){
console.log(precoEtiqueta - (precoEtiqueta*0.15));
}else if(formaDePagamento ===3){
console.log(precoEtiqueta);
}else{
console.log(precoEtiqueta + (precoEtiqueta*0.1));
}
