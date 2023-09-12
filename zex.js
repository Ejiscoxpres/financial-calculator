/* THIS IS A DISPLAY FUNCTION 
This performs the fuction of displaying the value output.
*/

function display(val){

    document.getElementById('result').value += val

    return val

}

/*THIS IS A SOLVE FUNCTION
This function accepts the values clicked as a parameter and returns the same to the textbox.
*/
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

/*clearScreen()
This function is called when the user clicks on the C or the clear button.
*/ 

function clearScreen(){

    document.getElementById('result').value = ''

}


