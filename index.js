const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img'); 
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.getElementById('close');

// 이미지 클릭하면 모달 열기
document.querySelectorAll('ul li img').forEach(img => {
    img.addEventListener('click', (event) => {
        // data-description이 없는 이미지에는 반응하지 않음
        const description = img.getAttribute('data-description');
        if (!description) return;

        // 기본 동작(예: 링크 클릭) 방지
        event.preventDefault();

        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalDesc.textContent = description;
        modalImg.classList.remove('zoomed'); 
    });
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 모달 이미지 클릭 시 확대/축소
modalImg.addEventListener('click', () => {
    modalImg.classList.toggle('zoomed'); 
});
