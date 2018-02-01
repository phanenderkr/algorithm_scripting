
function findLongestWord(str) {
    var array = str.split(" ");
    var length=0;
    for(var i=0; i<array.length;i++){
        if(length<array[i].length){
            length= array[i].length;
        }
    }
    return length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
