
function repeatStringNumTimes(str, num) {
    // repeat after me
    var i =0;
    var newStr="";
    while(i<num){
        newStr+=str;
        i++;
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));
