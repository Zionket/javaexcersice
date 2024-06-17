

function add(a,b){
    if(isNaN(a) || isNaN(b))
    {
        return "invalid input"
       
    }
        return a + b;
    
   
   
}

function subtraction(a,b){
    if(isNaN(a)||isNaN(b)){
        return "invalid input";
    }
    return a-b;
}
function multiplication(a,b){
    if(isNaN(a) || isNaN(b)){
        return "invalid input";
    }
    return a*b;

}
function division(a,b){
    if(isNaN(a)|| isNaN(b)|| b==0){
        return "invalid input";
    }
    return a/b;

}

const addresult = add(2,'x');
const subtractionresult = subtraction("a",4);
const divisionResult = division(8,4);
const multiplicationresult = multiplication(5,5)

console.log (`its ${addresult}`);
console.log (`its ${subtractionresult}`);
console.log (`its  ${multiplicationresult}`);
console.log (`its  ${divisionResult}`)