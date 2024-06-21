function calculatediscountprice (op ,dp){
let  discountamaunt = op*dp/100
let discountPrice  = op - discountamaunt;

if(isNaN(op)|| isNaN(dp) || op <= 0 || dp < 0){
    return "invalid price";

}

return discountPrice;

}

const result = calculatediscountprice(100, 10);
console.log(`The final price is ${result}`);

/////////////////////Anonymous Function /////////////

function callbackFunction(discountPrice){
    return discountPrice;
}

const calculateDiscount = (op,dp,callbackFunction) => {
if(isNaN(op)|| isNaN(dp) || op <= 0 || dp < 0){
    return "invalid price";

}

let  discountamaunt = op*dp/100
let discountPrice  = op - discountamaunt;
return callbackFunction(discountPrice);

}

const finalPrice = calculateDiscount(100,10, callbackFunction);
console.log(`The final price by anonymous function is ${finalPrice}`);

