
function palindrome(str) {
    // Good luck!
    var newStr = str.toLowerCase().split('').filter((value)=>value!==" ");
    newStr = newStr.reverse().join("");
    console.log(newStr);
    return newStr===str;
}



console.log(palindrome("not a palindrome"));