export default function openPopupPhotos(imageLink, imageName) {
    popupPhotosImage.src = imageLink;
    popupPhotosImage.alt = imageName;
    popupPhotosDescription.textContent = imageName;
    openPopup(popupPhotos);
  }
