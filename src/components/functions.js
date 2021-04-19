let parensCheck = (input) => {
  
let parens = ["(", ")"]
let parensArr = []

for (let i = 0; i < input.length; i++) {
  if (input[i] === parens[0] && input[i + 1] === parens[1]) {
    input.splice(i, 0, '*')
    input.push(parensArr)
    }
  }
  return input
}

// let parensthesis = (input) => {
//   let parens = ("(", ")")
//   for (let i = 0; i < input.length; i++) {
//     if(input.includes("(") && input.includes(")")) {
//        input.
//     }
//   }
// }
let pemdas = (str) => {
  const input = splitOperators(str);
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


let splitOperators = (input) => {
  let startIndex = 0;
  let newInput = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "-") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("-");
      startIndex = i + 1;
    } else if (input[i] === "+") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("+");
      startIndex = i + 1;
    } else if (input[i] === "*" || input[i] === "x") { 
      newInput.push(input.substring(startIndex, i));
      newInput.push("*");
      startIndex = i + 1;
    } else if (input[i] === "/" || input[i] === "÷") {
      newInput.push(input.substring(startIndex, i));
      newInput.push("/");
      startIndex = i + 1;
    }
  }
  newInput.push(input.substring(startIndex, input.length));
  return newInput;
};

let doTheMath = (str) => {
  let result = ""
  if (str.includes("(") && str.includes(")")) {
    let parensOpen = str.indexOf("(")
    let parensClose = str.indexOf(")")
    let parensValues = str.substring(parensOpen, parensClose + 1)
    let parensFunction = pemdas(str.substring(parensOpen + 1, parensClose + 1))
    result = str.replace(parensValues, parensFunction)
  }
  return result
};


// console.log(splitOperators("10+9-4*4"));
// console.log(doTheMath("4+4"));
console.log(doTheMath("4(4+5)"));
// console.log(doTheMath("12/4"));
// console.log(doTheMath("10+9-4*4"));


// export default doTheMath