function findEven() {
    for (var x = 0, i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 ==0) {
            x = numArray[i];
        }else {
            x = -1;
        }
        
    }
    document.getElementById("txtEven").innerHTML = "Số chẵn cuối cùng: "+x;
}