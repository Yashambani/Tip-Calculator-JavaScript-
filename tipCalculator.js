var btn = document.querySelector("#calButton");
btn.addEventListener("click", () => {
  var billAmount = document.querySelector("#billAmount").value;
  var tipOptions = document.querySelectorAll("#tip option");
  var tipPerc, totalPeople, totalTipAmountEach;
  tipOptions.forEach((item) => {
    if (item.selected) {
      tipPerc = item.value;
    }
  });
  totalPeople = document.querySelector("#totalPeople").value;
  totalTipAmountEach = (billAmount * (tipPerc / 100)) / totalPeople;
  document.querySelector(
    "#answer"
  ).innerHTML = `<strong>Tip Amount:=</strong> $${totalTipAmountEach} Each`;
});
