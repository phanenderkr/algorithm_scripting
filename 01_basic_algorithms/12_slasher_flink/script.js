
function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var i=0;
    while(i<howMany){
        arr.shift();
        // console.log(arr);
        i++;
    }
    return arr;
}

console.log(slasher([1, 2, 3], 2));
