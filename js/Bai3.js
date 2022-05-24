function findMin() {
    for (let i = 0; i < numArray.length; i++) {  
    var x = numArray[0];
    if (x>numArray[i]) {
        x = numArray[i];
    }

}

document.getElementById("txtMin").innerHTML ="Số nhỏ nhất: "+ x;
}
