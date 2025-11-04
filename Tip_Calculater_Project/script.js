let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let total = document.getElementById("total");
let cal_btn = document.getElementById("cal_btn");

function calculateTotal() {
  let billValue = bill.value;
  let tipValue = tip.value;
  let totalValue = billValue * (1 + tipValue / 100);
  total.innerHTML = totalValue.toFixed(2);
}

cal_btn.addEventListener("click", calculateTotal);
