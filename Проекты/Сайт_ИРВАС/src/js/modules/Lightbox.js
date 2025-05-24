export function createLightbox() { //Создаем блок содержащий выбранную картинку и крестик для закрытия этого блока.
    let div = document.createElement('div');

    div.id = 'lightbox';

    div.innerHTML = `<span class="lightbox-close">&times;</span>
            <img id = "lightboxImg">`

    div.style.display = 'none';
    div.style.position = 'fixed';
    div.style.top = '0';
    div.style.left = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';

    document.body.appendChild(div);

    const lightboxImg = document.querySelector('#lightboxImg');
    const lightboxClose = document.querySelector('.lightbox-close');

    lightboxImg.maxWidth = '90%';
    lightboxImg.maxHeight = '90%';

    lightboxClose.style.position = 'absolute';
    lightboxClose.style.top = '5%';
    lightboxClose.style.left = '90%';
    lightboxClose.style.color = 'white';
    lightboxClose.style.fontSize = '40px';
    lightboxClose.style.cursor = 'pointer';
}

export function closeLightbox(btn) { // Закрытие lightbox
    const lightboxClose = document.querySelector('.lightbox-close');

    btn.addEventListener('click', function (event) {
        if (event.target === this || event.target === lightboxClose) { // При нажатии на подложку или крестик происходит закрытие
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    })
}

export function clickImg(imgIcon) {

    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('#lightboxImg');

    imgIcon.forEach(img => { // Показываем lightbox при нажатии на картинку
        img.addEventListener('click', function (event) {

            document.body.style.overflow = 'hidden';
            lightbox.style.display = 'flex';
            lightboxImg.src = img.parentElement.href; // Получаем ссылку на большое изображение. parentElement обращение к родительскому элементу

            event.preventDefault();
        })
    })
}