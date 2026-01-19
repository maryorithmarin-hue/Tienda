const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.getAttribute('data-img');
    const price = button.getAttribute('data-price');

    modalImg.src = img;
    modalPrice.textContent = price;

    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
