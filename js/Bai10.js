function compareNum() {
    countPos = 0, countNeg = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i]>0) {
            countPos++;
        }else{
            countNeg++;
        }
        
    }
    countPos>countNeg?document.getElementById("txtCompare").innerHTML="số dương nhiều hơn":document.getElementById("txtCompare").innerHTML="số âm nhiều hơn";
    
}