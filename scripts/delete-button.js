
document.getElementById('input-field').addEventListener('keyup', function (event) {
  const inputText = event.target.value;
  const deleteBtn = document.getElementById('delete-btn');
  if (inputText.toLowerCase() === 'delete') {
    deleteBtn.removeAttribute('disabled');
  } else {
    deleteBtn.setAttribute('disabled', true);
  }
})

document.getElementById('delete-btn').addEventListener('click', function () {
  const secrectInfo = document.getElementById('secret-info');
  secrectInfo.style.display = 'none';
})