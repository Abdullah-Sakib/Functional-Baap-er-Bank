document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawAmount = getInputValueById('withdraw-input');
  if(isNaN(withdrawAmount)){
    alert('Plese provide a valid number');
    return;
  }
  const previousTotalBalance = getElementValueById('previus-balance');
  if(withdrawAmount > previousTotalBalance){
    alert("You don't have enough money on your account.");
    return;
  }
  const previousWithdraw = getElementValueById('previus-withdraw');
  const totalWithdrawValue = previousWithdraw + withdrawAmount;
  setTotalValue('previus-withdraw' , totalWithdrawValue);
  const totalBalance = previousTotalBalance - withdrawAmount;
  setTotalValue('previus-balance', totalBalance);
})