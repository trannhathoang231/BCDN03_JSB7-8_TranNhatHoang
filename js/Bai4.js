function findMinPos() {
    arrayPositive = [];
    for (let i = 0; i < numArray.length; i++) {
        numArray[i]>0 && arrayPositive.push(numArray[i]);
        
    }
    if(arrayPositive>0){
    for (var x=arrayPositive[0], i = 0; i < arrayPositive.length; i++) {
        if (x>arrayPositive[i]) {
           x = arrayPositive[i];
        }
    }
    document.getElementById("txtMinPos").innerHTML ="Số dương nhỏ nhất: "+ x;    
    }else
    document.getElementById("txtMinPos").innerHTML ="Không có số dương trong mảng";
}

    
