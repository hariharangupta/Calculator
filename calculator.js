// Declaring all the elements 

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operators");
const equalBtn = document.getElementById("equal-btn");
const allClearBtn = document.getElementById("ac-btn");
const firstOutput = document.getElementById("output-1");
const secondOutput = document.getElementById("output-2");
const dotEl = document.getElementById("dot");

let firstEl;
let secondEl = "0";
let output  =null; 
let lastOperation = ""

// AC clearBtn ----

allClearBtn.addEventListener("click", () => {
  firstEl = "";
secondEl = "";
firstOutput.innerText = "";
secondOutput.innerText = "";
output = "";
});

// for numbers --------

numberBtns.forEach((number) => {
  number.addEventListener("click", (operation) => {
    let displayNumber = operation.target.innerText;
    secondOutput.innerText += displayNumber;

    //    checking the input is 0 ------

    if (secondEl === "0") {
      secondEl = " ";
    }

    secondEl += displayNumber;
    secondOutput.innerText = secondEl;
  });
});

dotEl.addEventListener("click",  () => {
  //   ------- checking for dot ------
  if (!secondEl.includes(".")) secondEl += ".";
  secondOutput.innerText = secondEl;
});

// for operators -----------


operatorBtns.forEach( (operator) =>{
    operator.addEventListener('click', (operation) =>{
      if (!secondEl) return;
      const displayOperation = operation.target.innerText;
      if (firstEl && secondEl && lastOperation) {
         operationDispaly()
      } else {
        output = parseFloat(secondEl);
      }
      clearSecondEl(displayOperation);
      lastOperation = displayOperation;
      console.log(output);
    })
})

function clearSecondEl(currentoperation = "") {
    firstEl =  secondEl + " " + currentoperation + " ";
    firstOutput.innerText = firstEl;
    secondOutput.innerText = "";
    secondEl = "";
    // secondOutput.innerText = output;
  }

  // ----- performing operation ------
 
  function operationDispaly() {
    if (lastOperation === "x") {
      output  = parseFloat(output) * parseFloat(secondEl);
    } else if (lastOperation === "+") {
      output = parseFloat(output) + parseFloat(secondEl);
    } else if (lastOperation === "-") {
      output = parseFloat(output) - parseFloat(secondEl);
    } else if (lastOperation === "/") {
      output = parseFloat(output) / parseFloat(secondEl);
    } else if (lastOperation === "%") {
      output = parseFloat(output) % parseFloat(secondEl);
    }
  }




//  -- evaluate ---

equalBtn.addEventListener("click", () => {
    if (!secondEl || !firstEl) return;
    operationDispaly();
    clearSecondEl();
    secondOutput.innerText = output;
    firstOutput.innerText = "";
    secondEl = output;
    firstEl = "";
  });


