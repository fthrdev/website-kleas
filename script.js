document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in');
        sectionObserver.observe(section);
    });

    // Fungsi untuk menandai link navigasi yang aktif (tetap sama)
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
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

    // Fungsi untuk modal gambar (tetap sama)
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
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
    }
});
