let option = document.getElementsByClassName("option");
option = [...option];

let choose = document.getElementsByClassName("choose");
choose = [...choose];

let calc = document.getElementById("calc");

let clean = document.getElementById("clean");

let result = document.getElementsByClassName("resultX0");
let input = document.getElementById("input");
let resultado = 0;
let numOfDisplay;

clean.addEventListener("click", () => {
  input.value = "";
  for (let i = 0; i < choose.length; i++) {
    choose[i].innerText = "";
  }
  for (let i = 0; i < 11; i++) {
    result[i].innerText = "";
  }
});

option.forEach((num) => {
  num.addEventListener("click", () => {
    numOfDisplay = input.value += num.innerText;
  });
});

calc.addEventListener("click", () => {
  console.log(numOfDisplay);
  for (let i = 0; i < choose.length; i++) {
    choose[i].innerText = numOfDisplay;
  }
  for (let i = 0; i < 11; i++) {
    resultado = numOfDisplay * i;
    result[i].innerText = resultado;
  }
});

/*
option.forEach((num) => {
  num.addEventListener("click", () => {
    for (let i = 0; i < choose.length; i++) {
      choose[i].innerText = num.innerText;
    }
    for (let i = 0; i < 11; i++) {
      resultado = parseInt(num.innerText) * i;
      result[i].innerText = resultado;
    }
  });
});
*/
