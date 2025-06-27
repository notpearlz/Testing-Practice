// s = shift
function caesarCipher(word, s) {
  var temp = "";

  for (let i = 0; i < word.length; i++) {
    let code = word.charCodeAt(i);

    if (isLetter(code)) {
        const shifted = wrapLetters(code, s)
      temp += String.fromCharCode(shifted);
    } else {
      temp += String.fromCharCode(code);
    }
  }
  return temp;
}
function wrapLetters(code, s) {
  if (code >= 65 && code <= 90) {
    // uppercase
    return ((code - 65 + s) % 26 + 26) % 26 + 65;
  } else if (code >= 97 && code <= 122) {
    // lowercase
    return ((code - 97 + s) % 26 + 26) % 26 + 97;
  } else {
    return code;
  }
}
function isLetter(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

module.exports = caesarCipher;
