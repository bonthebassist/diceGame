//let numOfSides = document.forms.numOfSides.value

//let numOfSides = document.getElementById("numOfSides").value


function getResult() {
    let numOfSides = document.myForm.numOfSides.value;
    if (numOfSides > 0) {
    let result= (Math.floor(Math.random()*numOfSides)+1);
    document.myForm.result.value = result;
    } else {
        alert("Input sides of dice")
    }
}






/*function getResult() {
    let numOfSides = document.forms("numOfSides").value;
    x=(Math.floor(Math.random()*numOfSides)+1);
    document.getElementById("resultBox").innerHTML = x
}
*/