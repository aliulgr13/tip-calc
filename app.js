'use strict';

const form = document.customForm;
const billCost = document.querySelector("#bill-cost");
const billShare = document.querySelector('#bill-share');
const select = document.querySelector('#service-options');
let calcTip = document.querySelector('.result h1')

form.addEventListener('submit', e => {
  e.preventDefault();
  let costValue = billCost.value;
  let peopleValue = billShare.value;
  let serviceValue = select.value;

  //to round the number to the 2nd digit after the decimal..
  let tip = Math.round((costValue / 100 * serviceValue) / peopleValue * 100) / 100;
  console.log(costValue, peopleValue, serviceValue, tip);

  if (costValue <= '0' || peopleValue <= '0' || serviceValue <= '0') {
    alert("You need to fill in all the fields!");
  } else {
    if (peopleValue === '1') {
      calcTip.innerText = `TIP AMOUNT $${tip}`;
    } else {
      calcTip.innerText = `TIP AMOUNT $${tip} each`;
    }
  }

});