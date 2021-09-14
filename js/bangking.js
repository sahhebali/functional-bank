document.getElementById('diposit-button').addEventListener('click', function () {
    changBalance("deposit");
})

// onfunction rulse
document.getElementById('withdraw-button').addEventListener('click', function () {
    changBalance("withdraw");
})


function changBalance(type) {

    const previousTotal = document.getElementById(`${type}-total`);
    const previousTotalText = previousTotal.innerText;
    const previousTotalNumber = parseFloat(previousTotalText);

    const newMoney = document.getElementById(`${type}-input`);
    const newMoneyText = newMoney.value
    if (newMoneyText.length != 0) {
        const newmoneyNumber = parseFloat(newMoneyText);

        previousTotal.innerText = previousTotalNumber + newmoneyNumber;
        // console.log(depositAmount);
        const balanceTotal = document.getElementById('blance-total')
        const balanceTotalText = balanceTotal.innerText;
        const balanceTotalNumber = parseFloat(balanceTotalText);
        if (type == "withdraw") {
            balanceTotal.innerText = balanceTotalNumber - newmoneyNumber;
        }
        else {
            balanceTotal.innerText = balanceTotalNumber + newmoneyNumber;
        }
    }
    else {
        alert("please enter a number");
    }

}