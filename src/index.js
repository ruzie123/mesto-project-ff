import "./pages/index.css";
import { initialCards } from "./scripts/cards";
import { createCard, deleteCard, handleLike } from "./components/card";
import { openModal, eventListener, closeModal } from "./components/modal";

const cardContainer = document.querySelector(".places__list");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAdd = document.querySelector(".popup_type_new-card");

const descriptionInput = document.querySelector(".popup__input_type_description");
const nameInput = document.querySelector(".popup__input_type_name");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const addFormElement = document.querySelector(".popup__form-add");
const editformElement = document.querySelector(".popup__form-edit");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const addNameInput = document.querySelector(".popup__input_type_card-name");
const addLinkInput = document.querySelector(".popup__input_type_url");

const openImagePopup = (imageSrc, imageAlt) => {
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImage.src = imageSrc;
  popupImage.alt = imageAlt;
  popupCaption.textContent = imageAlt;

  openModal(popupTypeImage);
};

const handleAddCardSubmit = (evt) => {
  evt.preventDefault();

  const newCardData = {
    name: addNameInput.value,
    link: addLinkInput.value,
  };

  const newCardElement = createCard(
    newCardData,
    deleteCard,
    handleLike,
    openImagePopup
  );
  cardContainer.prepend(newCardElement);

  closeModal(popupTypeAdd);

  addNameInput.value = "";
  addLinkInput.value = "";
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(popupTypeEdit);
};

initialCards.forEach((data) => {
  const renderCard = createCard(data, deleteCard, handleLike, openImagePopup);
  cardContainer.append(renderCard);
});

editProfileButton.addEventListener("click", () => {
  openModal(popupTypeEdit);

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});
addCardButton.addEventListener("click", () => openModal(popupTypeAdd));

editformElement.addEventListener("submit", handleProfileFormSubmit);

addFormElement.addEventListener("submit", handleAddCardSubmit);

eventListener(popupTypeEdit);
eventListener(popupTypeAdd);
eventListener(popupTypeImage);
