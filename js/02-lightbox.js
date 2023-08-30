import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');

const itemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
</li>`;
    }).join('');
}

imgContainer.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});