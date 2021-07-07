var btn = document.querySelector("#calButton");

btn.addEventListener("click", () => {
  let billAmount = document.querySelector("#billAmount").value;
  let tipOptions = document.querySelectorAll("#tip option");
  let tipPerc, totalPeople, totalTipAmountEach;
  tipOptions.forEach((item) => {
    if (item.selected) {
      tipPerc = item.value;
    }
  });
  totalPeople = document.querySelector("#totalPeople").value;
  totalTipAmountEach = (billAmount * (tipPerc / 100)) / totalPeople;
  document.querySelector(
    "#answer"
  ).innerHTML = `<strong>Tip Amount:=</strong> $${totalTipAmountEach} Per Person`;
});
