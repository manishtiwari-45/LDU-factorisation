// java script for generating input fields based on the dimensions of the square matrix
function generateMatrixInputs() {
    const size = parseInt(document.getElementById("matrix-size").value);
    const matrixContainer = document.getElementById("matrix-inputs");

    matrixContainer.innerHTML = "";
    document.getElementById("steps-output").innerHTML = "";
// Creating a box like model fot the input matrix elements
const table = document.createElement("table");
for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = "0";
        input.className = "matrix-input";
        input.id = `a${i}${j}`;
        cell.appendChild(input);
        row.appendChild(cell);
    }
    table.appendChild(row);
}
matrixContainer.appendChild(table);
}
