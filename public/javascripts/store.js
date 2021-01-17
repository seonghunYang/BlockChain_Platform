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

  let word;
  if (value < 0) {
    word = "출금";
    let deposit = document.querySelector(".deposit");
    let withdraw = document.querySelector(".withdraw");
    let do = document.querySelector("span#card-header");
  }
}
