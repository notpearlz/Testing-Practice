function reverseString(word){
    var temp = '';

    for(let i = 0; i < word.length; i++){
        temp += word[word.length-1-i];
    }
    return temp;
}

module.exports = reverseString;