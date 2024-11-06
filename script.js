function gen_matrix()
{
    const rows=parseInt(document.getElementById("rows").value);
    const cols=parseInt(document.getElementById("cols").value);
    //to take input were using the idea similar to excel sheet i.e grid container and grid cell for inputs
    //to generate a grid container 
    if (rows>0 && cols>0){
    gridcontainer.style.gridtemplateColumns="repeat(${cols},auto";
    }
    //for generating the grid input fields i.e the cells in excel sheets 
    // since we need multiple input field depending on the order of matrix we are using loops
    for (let i=0;i<rows;i++){
        for (let j=0; j<cols; j++){
            const input =document.createElement("input");
            input.type="number";
            input.placeholder="R{i+1}C{j+1}";
            gridcontainer.appendchild(input);
            }
        }
}
