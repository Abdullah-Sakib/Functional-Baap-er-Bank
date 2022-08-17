document.getElementById('triple').addEventListener('click', function(){
  const tripleValue = getInputValue('input-feild');
  if(isNaN(tripleValue)){
    alert('Plese enter a Number');
    return;
  }
  const totalValue = tripleValue * 3;
  console.log(totalValue);
  const setTripleValue = setValue('final-value', totalValue);
})