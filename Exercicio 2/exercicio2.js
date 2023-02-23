function printMatrix() {
    document.open();

    //Define a matriz como um array de arrays
    let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

    // Percorre todos os elementos da matriz
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            // Soma os índices linha e coluna da sua respectiva posição.
            matrix[i][j] = i + j + ' ';
        }
    }

   document.write(`<h1>Matriz resultante: </h1><br />`);

    // Printa a matriz na tela
    for (let row of matrix) {
        document.write(`<b>${row} </b><br />`);
    }

    document.close();
}