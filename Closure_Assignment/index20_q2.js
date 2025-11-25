function createBankAccount()
{let balance=0;
let transactionHistory=[];
    function deposit(amount)
    {
        balance=balance+amount;
        transactionHistory.push(`Deposited: ${amount}`)
        console.log(`Deposited: ${amount}`);
    }
    function checkbalance()
    {
        console.log("Current balance=",balance);
    }
    function withdraw(amount)
    {
        
        if(balance<amount)
        { transactionHistory.push(`Failed Withdrawl`)
            console.log(`Insufficient balance`)
        }
        else{
            balance=balance-amount;
             transactionHistory.push(`Withdrawn: ${amount}`)
            console.log(`Withdrawn: ${amount}`);
        }
    }
    function getTransactionHistory()
    {
        console.log(transactionHistory);
    }
    return{deposit,checkbalance,withdraw,getTransactionHistory};
}


const account = createBankAccount();//has deposit,checkbalance,withdraw,getTransactionHistory functions


account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined


//balance has not been returned by the function so it remains private 
//hence cannot be accessed by outer world


account.checkbalance();//output: Current balance=300
account.getTransactionHistory();// Output :['Deposited: 500', 'Withdrawn: 200', 'Failed Withdrawl']