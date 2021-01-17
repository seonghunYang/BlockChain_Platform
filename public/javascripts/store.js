let money = document.querySelector(".money");
money.addEventListener("input", displayMoney);
function displayMoney(event) {
  let balance = document.querySelector(".balance");
  balance = balance.innerText.substring(0, balance.innerText.length - 3);
  let add_money = document.querySelector(".add_money");
  let total = document.querySelector(".total");
  let value = Number(event.target.value);
  add_money.innerHTML = value + " MJC";
  total.innerHTML = Number(balance) + value + " MJC";

  let deposit = document.querySelector(".deposit");
  let withdraw = document.querySelector(".withdraw");
  let changeWord = document.querySelectorAll(".change_word");
  let word;
  if (value < 0) {
    word = "출금";
    deposit.classList.remove("active");
    withdraw.classList.add("active");
    for (let i = 0; i < changeWord.length; i++) {
      changeWord[i].innerHTML = word;
    }
  } else {
    word = "입금";
    deposit.classList.add("active");
    withdraw.classList.remove("active");
    for (let i = 0; i < changeWord.length; i++) {
      changeWord[i].innerHTML = word;
    }
  }
}
