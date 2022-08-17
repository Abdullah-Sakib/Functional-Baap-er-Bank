function getInputValue(inputId){
  const inputFeild = document.getElementById(inputId);
  const inputValueString = inputFeild.value ;
  inputFeild.value = '';
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

function setValue(elementId , value){
  const getElement = document.getElementById(elementId);
  const setValue = getElement.innerText = value;
  return setValue;
}



document.getElementById('double').addEventListener('click', function(){
  const doubleValue = getInputValue('input-feild');
  const double = doubleValue * 2;
  if(isNaN(doubleValue)){
    alert('Plese enter a Number');
    return;
  }
  const setDoubleValue = setValue('final-value', double);
})