////////////////////////
////Operators Check////
//////////////////////
let splitOperators = (input) => {
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
  return newInput;
};

///////////////////////////
////Order of Oprations////
/////////////////////////
let pemdas = (str) => {
  const input = splitOperators(str);
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
  return input[0].toString();
}

//////////////////////////
////Parentheses Check////
////////////////////////
let doTheMath = (str) => {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    
    let parensOpen = str.indexOf("(")
    let parensClose = str.indexOf(")")
    
    let parensValues = str.substring(parensOpen, parensClose + 1)
    let parensFunction = pemdas(str.substring(parensOpen + 1, parensClose + 1))

    // Replace the value what's inside the parens into the string
    if (str.includes("(") && str.includes(")")) {
      result = str.replace(parensValues, parensFunction)
    }
  }
  result = pemdas(result)
  return result
};

console.log(doTheMath("(4*8)+5"));
console.log(doTheMath("(5.5+4.21)"));
console.log(doTheMath("(4/8)"));
console.log(doTheMath("(8-10)+5"));

export default doTheMath