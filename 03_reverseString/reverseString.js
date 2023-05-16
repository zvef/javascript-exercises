const reverseString = function(word) {
    let char = word.split('');
    let size = char.length;
    let output = [];
    let result;
    for (let i = 0; i < size; i ++) {
        output.unshift(char[i]);
    }
    result = output.toString();
    result = result.replaceAll(',', '');
    return result;
};







// Do not edit below this line
module.exports = reverseString;
