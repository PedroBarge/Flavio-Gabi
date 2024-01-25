let option = document.getElementsByClassName("option");
option = [...option];

let choose = document.getElementsByClassName("choose");
choose = [...choose];

const calc = document.getElementById("calc");

let result = document.getElementsByClassName("resultX0");
let input = document.getElementById("input");
let resultado = 0;

console.log(option);
console.log(choose);

option.forEach((num) => {
  num.addEventListener("click", () => {
    input.value += num.innerText;
  });
});

let numOfDisplay = input.value;

calc.addEventListener("click",()=>{
    console.log(numOfDisplay);
})



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
