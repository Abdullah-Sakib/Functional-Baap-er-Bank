function getInputValueById(inputId){
  const inputFeild = document.getElementById(inputId);
  const inputFeildString = inputFeild.value ;
  const inputValue = parseFloat(inputFeildString);
  inputFeild.value = '';
  return inputValue;
}


function getElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

function setTotalValue(element , value){
  const getElement = document.getElementById(element);
  getElement.innerText = value;
}
