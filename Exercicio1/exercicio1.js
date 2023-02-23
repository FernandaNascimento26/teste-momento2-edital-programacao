//declaração de variáveis
let vector
let max;
let min;
let maxPos;
let minPos; 

function findResults(){

    //Pegando o valores do input
    let vectora = document.getElementById("vectora").value;

    //separando os valores por vírgula
    vector = vectora.split(',').map(s=> +s);

    //Para encontrar o maior e menor valor foram utilizados métodos nativos do pacote Math
    max = Math.max.apply(null, vector);
    maxPos = vector.indexOf(Math.max(max));

    min = Math.min.apply(null, vector);
    minPos = vector.indexOf(Math.min(min));

   //Para ordenar foi utilizado o método sort
    order = vector.sort((a,b) => a - b);


    document.getElementById("screen1").innerHTML=
    `<b>Maior valor: </b> ${max} <b>posição: </b> ${maxPos}`+'<br/>'+
    `<b>Menor valor: </b> ${min} <b>posição: </b> ${minPos}`+'<br/>'+
    `<b>Valores em ordem crescente:</b> ${order}`;
 
    }