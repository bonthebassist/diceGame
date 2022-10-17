//let numOfSides = document.forms.numOfSides.value

//let numOfSides = document.getElementById("numOfSides").value


function getResult() {
    let numOfSides = document.myForm.numOfSides.value;
    let result= (Math.floor(Math.random()*numOfSides)+1);
    document.getElementById("result").innerHTML = result;
}






/*function getResult() {
    let numOfSides = document.forms("numOfSides").value;
    x=(Math.floor(Math.random()*numOfSides)+1);
    document.getElementById("resultBox").innerHTML = x
}
*/