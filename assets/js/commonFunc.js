function findElementByID(id) {
  const element = document.getElementById(id);
  return element;
}

function getInputFieldValue(element) {
  const value = element.value;
  element.value = "";
  return value;
}
