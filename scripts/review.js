document.getElementById('submit-button').addEventListener('click', function(){
  const texArea = document.getElementById('writeReview');
  const customerReview = texArea.value;

  const newComment = document.getElementById('review-section');
  const newPara = document.createElement('p');
  newPara.innerText = customerReview;

  newComment.appendChild(newPara);

  texArea.value = '';
})