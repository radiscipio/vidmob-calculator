let syntaxError = (str) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";

  let edgeCases = [
    "++", "+/", "/+", "+*", "*+",
    "-*", "-/", "**", "*/", "/*", 
    "//", "-+", "..", "()", "(+)",
    "(/", "(+", "(*", "+)", "-)",
    "/)", "*)"
  ];
  for (let i = 0; i < str.length; i++) {
    if (str.includes(letters[i])) {
      return true;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str.includes(edgeCases[i])) {
      return true;
    }
  }
};

////////////////////////
////Operators Check////
//////////////////////
let splitOperators = (input) => {
  if (syntaxError(input) === true) {
    return "Syntax Error";
  }
  let startIndex = 0;
  let newInput = [];

  // Iterate through the input to check if it includes an operator
  // Push the operator into newInput if there's a match
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "*" || input[i] === "x") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("*");
      startIndex = i + 1;
    } else if (input[i] === "/" || input[i] === "÷") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("/");
      startIndex = i + 1;
    } else if (input[i] === "+") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("+");
      startIndex = i + 1;
    } else if (input[i] === "-") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("-");
      startIndex = i + 1;
    }
  }
  newInput.push(input.substring(startIndex, input.length));
  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] === "") {
      newInput.splice(i, 1);
    }
  }
  return newInput;
};

///////////////////////////
////Order of Oprations////
/////////////////////////
let pemdas = (str) => {
  let input = splitOperators(str);
  input = negativeNums(input);

  // Check for mult and divide first, then add and subtract
  // Convert the string input into a number
  // Splice the new number into the desired position
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "*") {
      let calc = parseFloat(input[i - 1]) * parseFloat(input[i + 1]);
      input.splice(i - 1, 3, calc);
      i = 0;
    } else if (input[i] === "/") {
      let calc = parseFloat(input[i - 1]) / parseFloat(input[i + 1]);
      input.splice(i - 1, 3, calc);
      i = 0;
    }
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "+") {
      let calc = parseFloat(input[i - 1]) + parseFloat(input[i + 1]);
      input.splice(i - 1, 3, calc);
      i = 0;
    } else if (input[i] === "-") {
      let calc = parseFloat(input[i - 1]) - parseFloat(input[i + 1]);
      input.splice(i - 1, 3, calc);
      i = 0;
    }
  }
  if (input.length > 0) {
    return input[0].toString();
  }
};

///////////////////////////////
////Negative Numbers Check////
/////////////////////////////
let negativeNums = (arr) => {
  // Take out the negatives and prepend them with the following number
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" && !isNaN(parseFloat(arr[i + 1]))) {
      arr.splice(i, 2, `-${arr[i + 1]}`);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      !isNaN(parseFloat(arr[i])) &&
      Math.sign(parseFloat(arr[i + 1])) === -1
    ) {
      arr.splice(i + 1, 0, "+");
      i++;
    }
  }
  return arr;
};

//////////////////////////
////Parentheses Check////
////////////////////////

// Parens next to each other currently throwing NaN. 
// Need to iteerate through again for the check, while maintaining the number of the first parens check
let parensCheck = (str) => {
  // If syntax check returns false, return syntax error
  for (let i = 0; i < str.length; i++) {
    if (
      (!isNaN(parseFloat(str[i])) && str[i + 1] === "(") ||
      (!isNaN(parseFloat(str[i + 1])) && str[i] === ")") ||
      (str[i] === ")" && str[i + 1] === "(")
    ) {
      str = str.split("");
      str.splice(i + 1, 0, "*");
      str = str.join("");
      i++;
    }
  }

  // If the string includes parens, replace the value what's inside the parens into the string
  if (str.includes("(") && str.includes(")")) {
    let parensOpen = str.indexOf("(");
    let parensClose = str.indexOf(")");

    let parensValues = str.substring(parensOpen, parensClose + 1);
    let parensFunction = pemdas(str.substring(parensOpen + 1, parensClose));

    str = str.replace(parensValues, parensFunction);
  }
  str = pemdas(str);
  return str.toString();
};

////////////////////////
///Testing equations///
//////////////////////

// console.log(parensCheck("(4*8)5")); // A: 160
// console.log(parensCheck("5*6")); // A: 30
// console.log(parensCheck("1+2(5)")); // A: 11
// console.log(parensCheck("-3-6")); // A: -9
// console.log(parensCheck("4.5*2.3")); // A: 10.35
// console.log(parensCheck("4.5+ apple")); // A: Syntax Error
// console.log(parensCheck("7+/16")); // A: Syntax Error
// console.log(parensCheck("32..10 apple")); // A: Syntax Error

export default parensCheck;
