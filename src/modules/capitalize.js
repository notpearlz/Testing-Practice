function capitalize (word){
    return word[0].toUpperCase() + word.slice(1, word.length);
}

module.exports = capitalize;