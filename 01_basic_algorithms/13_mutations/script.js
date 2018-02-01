
function mutation(arr) {
    var first = arr[0].toLowerCase();
    var second = arr[1].toLowerCase();
    for(var i=0; i<second.length; i++){
        // console.log(first.indexOf(second[i]));
        if(first.indexOf(second[i])<0){
            return false;
        }
    }
    return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "he"]));
