const myName = 'Kshitiz';
document.querySelector('#name_display').innerText = myName;
console.log(myName);
const GSTpercentage = 18;
let cartValue = Math.round(((15599 - (10/100 * 15599)) - 272 + (2499 - (41/100*2499)) -29 +25 +20) * (100 + GSTpercentage) /100);
console.log(cartValue);

console.log(eval('2+8-9*4/2'));
