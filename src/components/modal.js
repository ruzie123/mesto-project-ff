import {
  popupTypeImage,
  popupTypeEdit,
  nameInput,
  descriptionInput,
  profileName,
  profileDescription,
} from "../index";

export const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    if (popup) {
      closeModal(popup);
    }
  }
};

export const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKeyUp);
};

export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKeyUp);
};

export const eventListener = (popupElement) => {
  const closeButton = popupElement.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closeModal(popupElement);
  });

  popupElement.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("popup")) {
      closeModal(popupElement);
    }
  });
};

export const openImagePopup = (imageSrc, imageAlt) => {
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImage.src = imageSrc;
  popupImage.alt = imageAlt;
  popupCaption.textContent = imageAlt;

  openModal(popupTypeImage);
};

export const handleFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(popupTypeEdit);
};
