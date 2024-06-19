function calculatediscountprice (op ,dp){
let  discountamaunt = op*dp/100
let discountPrice  = op - discountamaunt;

return discountPrice;

}

const result = calculatediscountprice(100,);
console.log(`The final price is ${result}`);
