function calcautor() {
  function add(a, b) {
    parsedA = parseInt(a);
    parsedB = parseInt(b);
    if (isNaN(parsedA) || isNaN(parsedB)) {
      throw new Error("Cannot add non numbers");
    }
    return parsedA + parsedB;
  }

  function subtract(a, b) {
    parsedA = parseInt(a);
    parsedB = parseInt(b);
    if (isNaN(parsedA) || isNaN(parsedB)) {
      throw new Error("Cannot subtract non numbers");
    }
    return parsedA - parsedB;
  }
  function multiply(a, b) {
    parsedA = parseInt(a);
    parsedB = parseInt(b);

    if (isNaN(parsedA) || isNaN(parsedB)) {
      throw new Error("Cannot multiply non numbers");
    }

    return parsedA * parsedB;
  }
  function divide(a, b) {
    parsedA = parseInt(a);
    parsedB = parseInt(b);

    if (parsedB == 0) {
      throw new Error("Cannot divide by zero");
    } else if (isNaN(parsedA) || isNaN(parsedB)) {
      throw new Error("Cannot divide non numbers");
    }

    return parsedA / parsedB;
  }

  return { add, subtract, multiply, divide };
}

module.exports = calcautor;
