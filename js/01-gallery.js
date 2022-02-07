import { galleryItems } from "./gallery-items.js";
// Change code below this line
const bodyEl = document.querySelector("body");
bodyEl.style.backgroundColor = "grey";

const galleryEl = document.querySelector(".gallery");

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join(" ");

galleryEl.insertAdjacentHTML("beforeend", markUp);

galleryEl.addEventListener("click", choseImage);

function choseImage(e) {
  e.preventDefault();
  if (e.target.dataset.source) {
    const image = e.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${image}" width="800" height="600">
      `);

    instance.show();
    // console.log(e.target);
  }
}
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (e.key === "Escape") {
    instance.close();
  }
});
