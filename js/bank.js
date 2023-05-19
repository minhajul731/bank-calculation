// deposite handale
document.getElementById('deposite-button').addEventListener('click', function () {
    // get deposited ammount
    const depositeField = document.getElementById('deposite-field');
    const depositeAmmount = depositeField.value;

    // set deposite ammount
    const depositeTotal = document.getElementById('deposit-total');
    depositeTotal.innerText = depositeAmmount;

    // reset the deposite input field
    depositeField.value = '';

})