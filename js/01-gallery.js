import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
// Change code below this line

const imgContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', itemsMarkup);
imgContainer.addEventListener('click', onImgClick);

function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
</div>`;
    })
    .join('');
}


function onImgClick(event) {
  
  event.preventDefault();

  const isItemImage = event.target.classList.contains('gallery__image');

  console.log(isItemImage);
  
  if (!isItemImage) return;

  const currentImgUrl = event.target.dataset.source;

  console.log(currentImgUrl);

  const instance = basicLightbox.create(`<img src="${currentImgUrl}" width="1280" height="auto"/>`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (!isEscKey) return;
    
    instance.close();
  }
}
