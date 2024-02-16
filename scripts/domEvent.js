// function fullname(){
//   const inputSection = document.getElementById('fname');
//   const inputText = inputSection.value;

//   const showText = document.getElementById('yourName');
//   showText.innerText = inputText;
// }

document.getElementById('submit').addEventListener('click', function(){
  const inputText = document.getElementById('fname');
  const inputValue = inputText.value;

  const yourName = document.getElementById('yourName');
  yourName.innerText = inputValue;
  inputText.value = '';
})