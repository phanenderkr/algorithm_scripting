
function largestOfFour(arr) {
    // You can do this!
    var newArr= [];
    var highNum=undefined;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if(!highNum){
                highNum= arr[i][j];
            }else{
                if(highNum<arr[i][j]){
                    highNum= arr[i][j];
                }
            }
        }
        newArr.push(highNum);
        highNum = undefined;
    }
    return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
