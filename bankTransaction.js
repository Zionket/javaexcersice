let  accountBalance = 1000;
function deposite(dipositeAmount){
accountBalance += dipositeAmount;

console.log (`The diposite amount is ${dipositeAmount}.The newbalance is: ${accountBalance}`)

}


function withdrawbalance(withdrawamount){
    if(withdrawamount <= accountBalance){
        accountBalance -= withdrawamount;
        console.log(`withdraw amount is ${withdrawamount},new balance is ${accountBalance}`)
        
    }
    else{
        console.log(`insufficiant amount`)
    }
    

}

function viewbalance(){

    console.log(`the account balance is:${accountBalance}`)
}
deposite(100);
withdrawbalance(500);
viewbalance();