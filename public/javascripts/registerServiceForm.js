const numBtn = document.getElementById("numOfSteps");
const eachStep = document.querySelector("#each_step");

function onlyPositiveNumber(event) {
  if (event.target.value < 3) {
    event.target.value = 3;
  } else if (event.target.value > 5) {
    event.target.value = 5;
  }
}

function setContent(event) {
  let rate = 100;
  let inner = `<div class="col"><input class='form-control' type='text' placeholder="90"  required='' disabled></div>`;
  for (let i = 0; i < event.target.value - 2; i++) {
    rate -= parseInt(100 / event.target.value);
    inner += `<div class="col"><input class='form-control' type='text' placeholder=${
      "예:" + rate
    }  required=''></div>`;
  }
  inner += `<div class="col"><input class='form-control' type='text' placeholder="10"  required='' disabled></div>`;
  eachStep.innerHTML = inner;
}

numBtn.addEventListener("change", onlyPositiveNumber);
numBtn.addEventListener("change", setContent);
