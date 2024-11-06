function gen_matrix_()
{
        const rows = parseInt(document.getElementById("rows").value);
        const cols = parseInt(document.getElementById("cols").value);
        const gridContainer = document.getElementById("gridContainer");

        // Clear any previous grid
        gridContainer.innerHTML = '';

        if (rows > 0 && cols > 0) {
            // createing 
            gridContainer.style.gridTemplateColumns = `repeat(${cols}, auto)`;
            // Generate input fields in a grid pattern
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const input = document.createElement("input");
                    input.type = "number";
                    input.placeholder = `R${i+1}C${j+1}`;
                    input.classList.add("grid-input");
                    gridContainer.appendChild(input);
                }
            }
        }   
}

