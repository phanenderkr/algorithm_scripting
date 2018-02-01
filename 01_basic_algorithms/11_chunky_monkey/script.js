
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var index =0;
    var subArr=[];
    var mainArr=[];
    for(var i=0; i<arr.length; i++){
        index++;
        subArr.push(arr[i]);
        if(index===size){
            mainArr.push(subArr);
            subArr=[];
            index=0;
        }
    }
    if(subArr.length>0){
        mainArr.push(subArr);
    }
    return mainArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
