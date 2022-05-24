arrayBai9 = [];

function getFloat() {
    var x = Number(document.getElementById("inputFloat").value);
    arrayBai9.push(x);
    
    document.getElementById("txtArrayFloat").innerHTML = arrayBai9;
    
}

function findInt() {
    var count = 0;
    for (let i = 0; i < arrayBai9.length; i++) {
        if(Number.isInteger(arrayBai9[i]) == true){
            count++;
        }
    }
    document.getElementById("txtInt").innerHTML ="Số lượng số nguyên: "+ count;
}