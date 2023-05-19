// deposite handale
document.getElementById('deposite-button').addEventListener('click', function () {
    // get deposited ammount
    const depositeField = document.getElementById('deposite-field');
    const inputDepositeAmmountText = depositeField.value;
    const inputDepositeAmmount = parseFloat(inputDepositeAmmountText);

    // set deposite total
    const depositeTotal = document.getElementById('deposit-total');
    const previousDepositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalText);
    const updatedDepositeTotal = previousDepositeTotal + inputDepositeAmmount;
    depositeTotal.innerText = updatedDepositeTotal;

    // update account balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const updateBalanceTotal = previousBalanceTotal + inputDepositeAmmount;
    balanceTotal.innerText = updateBalanceTotal;

    // reset the deposite input field
    depositeField.value = '';

});

// withdraw handle
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw ammount
    const withdrawAmmount = document.getElementById('dwithdraw-field');
    const inputWithdrawText = withdrawAmmount.value;
    const inputWithdrawAmmount = parseFloat(inputWithdrawText);

    // set Withdraw ammount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    const totalWithdrawAmmount = previousWithdrawTotal + inputWithdrawAmmount;
    withdrawTotal.innerText = totalWithdrawAmmount;

    // update account balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const updateTotalBalance = previousTotalBalance - inputWithdrawAmmount;
    totalBalance.innerText = updateTotalBalance;

    // reset the withdraw input field
    withdrawAmmount.value = '';
});