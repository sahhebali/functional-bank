document.getElementById('diposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('diposit-input');
    const depositAmountText = depositInput.value
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);
    const dipositTotal = document.getElementById('diposit-total');
    const depositTotalText = dipositTotal.innerText;
    const depositAmountTotal = parseFloat(depositTotalText);
    dipositTotal.innerText = depositAmount + depositAmountTotal;

    const balanceTotal = document.getElementById('blance-total')
    const balanceTotalText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalText);
    // console.log(balanceAmount);
    balanceTotal.innerText = balanceAmount + depositAmount;


})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withDrawButton = document.getElementById('withdraw-input');
    const withDrawButtonText = withDrawButton.value;
    const withdrawAmount = parseFloat(withDrawButtonText);
    // console.log(withdrawAmount);
    // console.log('check withdraw button');

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawText);
    console.log(withdrawTotalAmount);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    const balanceTotal = document.getElementById('blance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

})