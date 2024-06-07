let totalBilAmount = 100;
let numberOfPeople = 4;
let tipPercentage = 5;
let tipAmount = (totalBilAmount * tipPercentage) / 100;
let taxAmount = totalBilAmount * 15/100;
let totalPayment = totalBilAmount + tipAmount + taxAmount;
let individualPayment = totalPayment / numberOfPeople;

console.log(`The orginal bill amount is ${totalBilAmount}`);
console.log (`The total tip is ${tipAmount} birr`);
console.log(`The tax amount is ${taxAmount} birr`);
console.log(`The total payment is ${totalPayment} birr`);
console.log(`Each individual will pay ${individualPayment} birr`);
