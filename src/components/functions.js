// let getPriority = (input) => {
//   if (input === "+" || input === "-") return 1;
//   else if (input === "*" || input === "/") return 2;
//   return 0;
// }

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
};

// console.log(splitOperators("10+9-4*4"));
// console.log(doTheMath("4+4"));
// console.log(doTheMath("4*4"));
// console.log(doTheMath("12/4"));
console.log(doTheMath("10+9-4*4"));


export default doTheMath