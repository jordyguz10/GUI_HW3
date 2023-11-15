/*File: script.js
    GUI Assignment: Interactive Dynamic Table
    Jordy Guzman, UMass Lowell Computer Science, Jordy_guzmanalcaraz@student.uml.edu (c) 2023 
    by Guzman. All rights reserved. May be freely copied or excerpted for educational 
    purposes with credit to the author.
*/

var submit = document.getElementById("submit");

//Event starts when submit button is clicked
submit.onclick = function(){
    document.getElementById("Error").innerText = "";

    //Get the four values entered in form
    var MinCol = document.getElementById('MinCol').value;
    var MaxCol = document.getElementById('MaxCol').value;
    var MinRow = document.getElementById('MinRow').value;
    var MaxRow = document.getElementById('MaxRow').value;

    //Checking for invalid user input
    if((parseInt(MinCol) > parseInt(MaxCol)) || (parseInt(MinRow) > parseInt(MaxRow))){
        document.getElementById("Error").innerText = "Error! Maximum Greater than Minimum!";
        return;
    }else if (parseInt(MinCol) < -50 || parseInt(MaxCol) < -50 || parseInt(MinRow) < -50 || parseInt(MaxRow) < -50){
        document.getElementById("Error").innerText = "Invalid Number Input!"
        return;
    }
    else if (parseInt(MinCol) > 50 || parseInt(MaxCol) > 50 || parseInt(MinRow) > 50 || parseInt(MaxRow) > 50){
        document.getElementById("Error").innerText = "Invalid Number Input!"
        return;
    } 

    //Create variable that stores table
    const tableContainer = document.getElementById('MultTable');
    //Dynamically Create table based on user input values
    let table = '<table>';
      for (let i = MinRow - 1; i <= MaxRow; i++) {
        table += '<tr>';
        for (let j = MinCol - 1; j <= MaxCol; j++) {
            if (i === MinRow - 1 && j === MinCol - 1) {
                table += `<th></th>`;
            } else if (i === MinRow - 1) {
                table += `<th>${j}</th>`;
            } else if (j === MinCol - 1) {
                table += `<th>${i}</th>`;
            } else {
                table += `<td>${(i * j)}</td>`;
          }
        }
        table += '</tr>';
      }
      table += '</table>';
      tableContainer.innerHTML = table;
}
