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
};

///////////////////////////////
////Negative Numbers Check////
/////////////////////////////

let negativeNums = (arr) => {
  for (let i = 0; i < arr.length; i++) {

  }
}


//////////////////////////
////Parentheses Check////
////////////////////////
let parensCheck = (str) => {
  
  for (let i = 0; i < str.length; i++) {
    if ((!isNaN(parseFloat(str[i])) && str[i + 1] === "(") || 
        (!isNaN(parseFloat(str[i + 1])) && str[i] === ")") || 
        (str[i] === ")" && str[i + 1] === "(")) {
      str = str.split("");
      str.splice(i + 1, 0, "*");
      str = str.join("");
      i++
    }
  }
  for (let i = 0; i < str.length; i++) {
    let parensOpen = str.indexOf("(");
    let parensClose = str.indexOf(")");

    let parensValues = str.substring(parensOpen, parensClose + 1);
    let parensFunction = pemdas(str.substring(parensOpen + 1, parensClose + 1));

    // If the string includes parens, replace the value what's inside the parens into the string
    if (str.includes("(") && str.includes(")")) {
      str = str.replace(parensValues, parensFunction);
    }
  }
  str = pemdas(str);
  return str;
};

// console.log(parensCheck("(4*8)+5"));
console.log(parensCheck("1+2(5)"));
console.log(parensCheck("(1+2)5"));
console.log(parensCheck("(1+2)(5+2)"));

// export default parensCheck
