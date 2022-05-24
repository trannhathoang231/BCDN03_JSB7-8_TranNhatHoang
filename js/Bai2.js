function countPositive() {
    var count = 0;
    for ( i = 0; i < numArray.length; i++) {
        numArray[i]>0 && count++;
        
    }

    document.getElementById("txtCount").innerHTML ="Số dương: "+ count;
}