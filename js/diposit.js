document.getElementById('deposit-btn').addEventListener('click',function(){
  const newDepositValue = getInputValueById('deposit-input');
  if(isNaN(newDepositValue)){
    alert('Plese provide a valid number');
    return;
  }
  const previousDeposit = getElementValueById('previus-deposit');
  const totalDeposit = newDepositValue + previousDeposit;
  const setTotalDepositValue = setTotalValue('previus-deposit' , totalDeposit)

  const previousTotalBalance = getElementValueById('previus-balance');
  const totalBalance = previousTotalBalance + newDepositValue;
  const setTotalBalance = setTotalValue('previus-balance', totalBalance);
})