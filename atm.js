let validPINS = ["0000", "1111", "2222"];
let userPIN = prompt("Please enter your PIN. Use 0000 if testing!");

while (! validPINS.includes(userPIN)) {
    if (userPIN === "hax") {
        console.log("you've been hacked!");
    }
    userPIN = prompt("Not a valid user. Please re-enter your PIN. Use 0000 if testing!");
}

let checkingBalance = 100;
let savingsBalance = 200;
let name = "Aaron Gondalo";

// console.log("Welcome to Bank of Contempt. \n\n1=Check Balance\n2=Withrdaw\n3=Deposit\n4=Cancel Transaction");

let viewAccountType = prompt("Welcome to Bank of Contempt. \n\nView Checking or Savings Account?\n\n1=Checking\n2=Savings\n\n4=Cancel");

while (viewAccountType != 3) {
    if (viewAccountType == 1) {
        // checking
        let userOperationOnAccount = prompt("Inspecting checking account...\n\n1=Check Balance\n2=Withdraw\n3=Deposit\n4=Cancel");

        while (userOperationOnAccount != 4) {
            if (userOperationOnAccount == 1) {
                // check balance of checking account
                console.log("Checking Balance: $" + checkingBalance);
                alert("Checking Balance: $" + checkingBalance);

            } else if (userOperationOnAccount == 2) {
                // withdraw from checking
                let withdrawAmount = parseInt(prompt("How much would you like to withdraw?\n$20 Bills Only\n\n4=Cancel"));
                while (Number.isInteger(withdrawAmount) && withdrawAmount >= 0 && withdrawAmount <= checkingBalance && withdrawAmount != 4) {
                    checkingBalance -= withdrawAmount;
                    alert("Dispensing $" + withdrawAmount);
                    withdrawAmount = parseInt(prompt("Withdraw more from checking?\n4=Cancel"));
                } 

            } else if (userOperationOnAccount == 3) {
                // deposit checking
                let depositAmount = parseInt(prompt("How much would you like to deposit?\n\n4=Cancel"));
                while (Number.isInteger(depositAmount) && depositAmount >= 0 && depositAmount != 4) {
                    checkingBalance += depositAmount;
                    alert("Collected $" + depositAmount + " into checking.");
                    depositAmount = parseInt(prompt("Withdraw more from checking?\n4=Cancel"));
                }
            }

            userOperationOnAccount = prompt("Inspecting checking account...\n\n1=Check Balance\n2=Withdraw\n3=Deposit\n4=Close Checking View");
        }
    } else if (viewAccountType == 2) {
        // savings
        let userOperationOnAccount = prompt("Inspecting savings account...\n\n1=Check Balance\n2=Withdraw\n3=Deposit\n4=Cancel");

        while (userOperationOnAccount != 4) {
            if (userOperationOnAccount == 1) {
                // check balance of Savings account
                console.log("Savings Balance: $" + savingsBalance);
                alert("Savings Balance: $" + savingsBalance);

            } else if (userOperationOnAccount == 2) {
                // withdraw from savings
                let withdrawAmount = parseInt(prompt("How much would you like to withdraw?\n$20 Bills Only\n\n4=Cancel"));
                while (Number.isInteger(withdrawAmount) && withdrawAmount >= 0 && withdrawAmount <= checkingBalance && withdrawAmount != 4) {
                    savingsBalance -= withdrawAmount;
                    alert("Dispensing $" + withdrawAmount);
                    withdrawAmount = parseInt(prompt("Withdraw more from savings?\n4=Cancel"));
                }

            } else if (userOperationOnAccount == 3) {
                // deposit savings
                let depositAmount = parseInt(prompt("How much would you like to deposit?\n\n4=Cancel"));
                while (Number.isInteger(depositAmount) && depositAmount >= 0 && depositAmount != 4) {
                    savingsBalance += depositAmount;
                    alert("Collected $" + depositAmount + " into savings.");
                    depositAmount = parseInt(prompt("Withdraw more from checking?\n4=Cancel"));
                }
            }

            userOperationOnAccount = prompt("1=Check Balance\n2=Withdraw\n3=Deposit\n4=Cancel");
        }
    }
    
    
    viewAccountType = prompt("View Checking or Savings Account?\n\n1=Checking\n2=Savings\n3=Cancel/Finish");
}

alert("Thank you for using Bank of Comtempt. Have a nice day!");