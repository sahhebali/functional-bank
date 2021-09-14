// function dubblest(num) {
//     const result = num * 2;
//     return result;

// }
// const firstFive = dubblest(5);
// const secondFive = dubblest(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input flead
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId, amount);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBalanceTotal = parseFloat(blanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, issAdd) {
    const blanceTotal = document.getElementById('blance-total');
    /*  const blanceTotalText = blanceTotal.innerText;
     const previousBalanceTotal = parseFloat(blanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (issAdd == true) {
        blanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        blanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('diposit-button').addEventListener('click', function () {

    // const depositInput = document.getElementById('diposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    // get and update  deposit total
    /*  const depositTotal = document.getElementById('diposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
     depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    // const blanceTotal = document.getElementById('blance-total');
    // const blanceTotalText = blanceTotal.innerText;
    // const previousTotalText = parseFloat(blanceTotalText);
    // blanceTotal.innerText = previousTotalText + depositAmount;
    const depositAmount = getInputValue('diposit-input');
    if (depositAmount > 0) {
        updateTotalField('diposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
})




// handle withdraw  button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     const withdrawAmount = parseFloat(withdrawAmountText); */


    // get and update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    const previousWithdrawTotalText = previousWithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = previousWithdrawTotalText; */




    // updait available blance
    /*    const blanceTotal = document.getElementById('blance-total');
       const blanceTotalText = blanceTotal.innerText;
       const previousBalanceTotal = parseFloat(blanceTotalText);
       blanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('yoy have not specific balance');
    }
})



// programming hero github code


function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);

function getInputValue(inputId) {
    debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*
     const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */


    // get and update deposit total
    /*  
    const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
 
     depositTotal.innerText = previousDepositTotal + depositAmount; */


    // update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     
    const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */


    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */


    // update balance after withdraw
    /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
});