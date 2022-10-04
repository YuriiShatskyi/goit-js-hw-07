import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divPhotos = document.querySelector('.gallery');

function createPhotoGallery(items) {
    return items.map(item =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
};

const addPhotoGallery = createPhotoGallery(galleryItems);

divPhotos.insertAdjacentHTML("afterbegin", addPhotoGallery);

divPhotos.addEventListener('click', onPhotoClick); 

function onPhotoClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }



    console.log('ТОЛІК');
}