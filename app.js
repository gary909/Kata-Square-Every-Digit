function squareDigits(num) {
    const arrOfDigits = Array.from(String(num), Number); // create separated array
    for (var i = 0; i < arrOfDigits.length; i++) {
        arrOfDigits[i] = arrOfDigits[i] * arrOfDigits[i]; // square each item
    }
    let myNum = arrOfDigits.join(""); // join result into combined string
    myNum = Number(myNum); // convert to number
    return myNum;
}

console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
