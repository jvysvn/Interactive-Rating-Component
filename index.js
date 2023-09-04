const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingBtns = document.querySelectorAll('.rating-btn');
const rating = document.querySelector('.rating');

submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach((btn) => {
  btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
  ratingCard.classList.add('hidden');
  thankYouCard.classList.remove('hidden');
}

function handleRatingBtnClick(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove('checked');
  });
  event.target.classList.add('checked');
  let choice = event.target.textContent;
  rating.textContent = choice;
}
