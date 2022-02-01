const firstInput = document.querySelector(".amount-one");
const secondInput = document.querySelector(".amount-two");
const valueFirst = document.querySelector("#currency-one");
const valueSecond = document.querySelector("#currency-two");
const swapBtn = document.querySelector(".swap");
const currentRate = document.querySelector(".rate-info");

const LINK = "https://v6.exchangerate-api.com/v6/";
const API_KEY = "759ae4546ae34fde4c4b86ab";


const checkRate = () => {
const currency1 = valueFirst.value;
const currency2 = valueSecond.value;
  fetch(`${LINK}${API_KEY}/latest/${currency1}`)
  .then(res => res.json())
  .then(data => {
   const rate = data.conversion_rates[currency2];
   currentRate.textContent = `1 ${currency1} = ${rate} ${currency2}`;
   const totalAmount = (firstInput.value * rate);
   secondInput.value = totalAmount.toFixed(2)
  })
}

const switchRates = () => {
 const swap = valueFirst.value
valueFirst.value = valueSecond.value;
valueSecond.value = swap
checkRate()
}

swapBtn.addEventListener("click", switchRates)
valueFirst.addEventListener("change", checkRate)
valueSecond.addEventListener("change", checkRate)
firstInput.addEventListener("change", checkRate)