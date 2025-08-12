document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menandai link navigasi yang aktif
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Fungsi untuk modal gambar
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    modal.appendChild(closeBtn);

    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    modal.appendChild(modalImg);

    const captionText = document.createElement('div');
    captionText.className = 'caption-modal';
    modal.appendChild(captionText);

    document.body.appendChild(modal);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = item.querySelector('img').src;
            captionText.innerHTML = item.querySelector('.gallery-item-caption').textContent;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
