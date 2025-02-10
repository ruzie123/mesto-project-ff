import {
  cardTemplate,
  cardContainer,
  popupTypeAdd,
  addNameInput,
  addLinkInput,
} from "../index";
import { closeModal, openImagePopup } from "./modal";
export const createCard = (Data, cardDelete, cardLike, openImagePopup) => {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__image").src = Data.link;
  cardElement.querySelector(".card__image").alt = Data.name;
  cardElement.querySelector(".card__title").textContent = Data.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    cardDelete(cardElement);
  });

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", function () {
    cardLike(likeButton);
  });
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", function () {
    openImagePopup(Data.link, Data.name);
  });

  return cardElement;
};

export const deleteCard = (item) => {
  item.remove();
};

export const handleLike = (item) => {
  item.classList.toggle("card__like-button_is-active");
};

export const renderCards = (Cards) => {
  Cards.forEach((Data) => {
    const renderCard = createCard(Data, deleteCard, handleLike, openImagePopup);
    cardContainer.append(renderCard);
  });
};

export const handleAddCardSubmit = (evt) => {
  evt.preventDefault();

  const newCardData = {
    name: addNameInput.value,
    link: addLinkInput.value,
  };

  const newCardElement = createCard(newCardData, deleteCard, handleLike, openImagePopup);
  cardContainer.prepend(newCardElement);

  closeModal(popupTypeAdd);

  addNameInput.value = "";
  addLinkInput.value = "";
};
