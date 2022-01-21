function binaryToString(binaryBlob) {

    // let str = String.fromCharCode(num)
    let toASCII = ""
    let eightBin = binaryBlob.split('');
    while (eightBin.length) {
    let subStr = eightBin.splice(0, 8).join('') // will return a 8bit string
    let num = parseInt(subStr, 2); // should give a decimal num of the 8bit string subStr
    toASCII += String.fromCharCode(num);
}

    return toASCII;
}

// Uncomment to run local tests
                    // 01000001   01000010    01000011
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;
