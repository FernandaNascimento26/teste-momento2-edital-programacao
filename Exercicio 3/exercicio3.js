//O DOMContentLoaded é um evento que dispara quando o conteúdo DOM é carregado,
//sem esperar que as imagens e folhas de estilo terminem de carregar.
document.addEventListener("DOMContentLoaded", function () {

//botão 
let pop = document.getElementById ("a");

//evento de clique para iniciar a inserção nas matrizes
pop.addEventListener('click', function() {
var i, term, matrix1 = [ ];
var i, term, matrix2 = [ ];
let m1 = document.getElementById ("m1");
let m2 = document.getElementById ("m2");

//recebendo os valores e populando as matrizes
for (i = 0; i < 6; i++) {
term = prompt ("Informe os 6 números da PRIMEIRA matriz: ");
matrix1.push(term);
console.log(matrix1[i]);
m1.innerHTML += "<li>" + matrix1[i] + "</li>";
}

for (i = 0; i < 6; i++) {
term = prompt ("Agora os 6 números da SEGUNDA matriz: ");
matrix2.push(term);
console.log(matrix2[i]);
m2.innerHTML += "<li>" + matrix2[i] + "</li>";
}

//somando as matrizes
let sum = [ ];
for (i=0; i < 6; i++ ) {
	let res = parseFloat( matrix1[i] ) + parseFloat( matrix2[i] );
	sum.push(res);
	s.innerHTML +=  "<li>" +  sum[i] + "</li>";
};
  
}, false)

});