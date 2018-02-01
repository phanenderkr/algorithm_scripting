
function truncateString(str, num) {
    // Clear out that junk in your trunk
    var newStr="";
    if(str.length>num){
        if(num<=3){
            newStr = str.substr(0,num)+"...";
        }else{
            newStr = str.substr(0,num-3)+"...";
        }
        return newStr;
    }
    return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
