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

})