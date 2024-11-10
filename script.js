// Function to generate input fields based on the square matrix dimensions
function generateMatrixInputs() {
    // Get the matrix size from the input field and parse it to an integer
    const size = parseInt(document.getElementById("matrix-size").value);

    // Select the container where the matrix inputs will be displayed
    const matrixContainer = document.getElementById("matrix-inputs");

    // Clear any existing input fields or previous results from the container
    matrixContainer.innerHTML = "";
    document.getElementById("steps-output").innerHTML = "";

    // Create a table to structure the matrix input fields in a grid layout
    const table = document.createElement("table");

    // Loop through each row (i) and column (j) of the matrix
    for (let i = 0; i < size; i++) {
        // Create a new row element for the current row of the matrix
        const row = document.createElement("tr");

        for (let j = 0; j < size; j++) {
            // Create a cell element for the current matrix position
            const cell = document.createElement("td");

            // Create an input element for each matrix entry
            const input = document.createElement("input");
            input.type = "number";         // Set input type to number
            input.placeholder = "0";       // Set default placeholder to 0
            input.className = "matrix-input";  // Add class for styling the input
            input.id = `a${i}${j}`;        // Set unique id for each input based on its position

            // Append the input element to the current cell
            cell.appendChild(input);

            // Append the cell to the current row
            row.appendChild(cell);
        }
        
        // Append the completed row to the table
        table.appendChild(row);
    }

    // Append the fully constructed table to the matrix container
    matrixContainer.appendChild(table);
}
