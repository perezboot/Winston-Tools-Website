// 打开详情模态框
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.card .detail-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    const title = card.dataset.title || card.querySelector('h3').innerText;
    const desc = card.dataset.desc || card.querySelector('p').innerText;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}
