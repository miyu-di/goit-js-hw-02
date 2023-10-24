'use strict';

function getShippingCost(country) {
  let price;
  let totalAnswer;
  

  switch (country) {
    case "China":
      price = 100;
      totalAnswer= `"Shipping to ${country} will cost ${price} credits"`;
      break;
    case "Chile":
      price = 250;
      totalAnswer= `"Shipping to ${country} will cost ${price} credits"`;
      break;
    case "Australia":
      price = 170;
      totalAnswer= `"Shipping to ${country} will cost ${price} credits"`;
      break;
    case "Jamaica":
      price = 120;
      totalAnswer= `"Shipping to ${country} will cost ${price} credits"`;
      break;
    default:
      totalAnswer = `"Sorry, there is no delivery to your country"`;
  }
  return totalAnswer;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));