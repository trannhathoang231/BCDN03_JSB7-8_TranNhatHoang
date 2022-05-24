function checkPrime(n){
    if(n<2)return!1;
    for(var r=2;r<=Math.sqrt(n);r++)
    if(n%r==0)
    return!1;
    return!0
}

function findPrime(){
    for(var n=-1,r=0;r<numArray.length;r++){
        if(checkPrime(numArray[r])){
            n=numArray[r];
            break
        }
    }
document.getElementById("txtPrime").innerHTML="Số nguyên đầu tiên: "+n
}