
function changePosition() {
    var index1 = document.getElementById("inputIndex1").value;
    var index2 = document.getElementById("inputIndex2").value;

    var x = numArray[index1];
    numArray[index1] = numArray[index2];
    numArray[index2] = x;

    document.getElementById("txtChangePos").innerHTML ="Mảng sau khi đổi: "+ numArray;
}