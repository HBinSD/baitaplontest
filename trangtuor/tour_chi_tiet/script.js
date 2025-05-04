document.addEventListener('DOMContentLoaded', () => {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const overlay = document.getElementById('overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const closeBtn = document.getElementById('close-btn');

    // Khi nhấn vào ảnh
    zoomableImages.forEach(image => {
        image.addEventListener('click', () => {
            zoomedImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });

    // Khi nhấn nút đóng
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Đóng overlay khi nhấn bên ngoài ảnh
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});