numArray = [];
function getNumber(){
    var x = Number(document.getElementById("inputNum").value);

    numArray.push(x);

    document.getElementById("txtArray").innerHTML = numArray;
}
function sumPositive() {
    
    for (var S=0, i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            S += numArray[i];
        }
    }
    document.getElementById("txtSum").innerHTML = "Tổng số dương: "+ S;
    
}