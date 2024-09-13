"use stirct";
const billInput = document.getElementById("billInput");
const tipBtns = document.querySelectorAll(".tipBtn");
const resetBtn = document.getElementById("resetBtn");
const tipButtons = document.querySelectorAll(".tipPercentage");
const numberOfPeopleInput = document.querySelector('input[placeholder="0"]');
const tipAmountDisplay = document.querySelector(".tipAmount");
const totalDisplay = document.querySelector(".total");

function calculateTip(tipPercentage) {
  const billAmount = parseFloat(billInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  if (!billAmount || !numberOfPeople || numberOfPeople === 0) return;

  const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  const totalAmount = (billAmount + tipAmount) / numberOfPeople;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tipPercentage = parseFloat(e.target.textContent);
    calculateTip(tipPercentage);
  });
});

// function calcualteTip(tipPercentage) {
//   const billAmount = billInput.value;
//   const numberOfPeople = numberOfPeople.value;
//   if (!billAmount || !numberOfPeople) return;

//   const tipAmount = (billAmount * tipPercentage) / 100;
//   const totalAmount = (billAmount + tipAmount) / numberOfPeople;

//   tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
//   totalDisplay.textContent = `$${totalAmount.toFixed(2)}`;
// }

// // Add event listeners to each tip button
// tipButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const tipPercentage = parseInt(e.target.textContent);
//     calculateTip(tipPercentage);
//   });
// });

// Reset function
https: resetBtn.addEventListener("click", () => {
  location.reload();
});

// tipAmount = Number(billValue) * (percent / 100);
// totalAmount = billValue + tipAmount;
