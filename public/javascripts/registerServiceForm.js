const numBtn = document.getElementById("numOfSteps");

function onlyPositiveNumber(event) {
  if (event.target.value < 1) {
    event.target.value = 1;
  }
}

numBtn.addEventListener("change", onlyPositiveNumber);
