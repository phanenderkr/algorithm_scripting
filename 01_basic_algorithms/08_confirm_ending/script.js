
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var subString = str.substring(str.length-target.length,str.length);
    return subString===target;
}

console.log(confirmEnding("Bastian", "n"));