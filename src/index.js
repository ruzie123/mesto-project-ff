import "./pages/index.css";
import { initialCards } from "./scripts/cards";
import { renderCards, handleAddCardSubmit } from "./components/card";
import { openModal, eventListener, handleFormSubmit } from "./components/modal";

const cardTemplate = document.querySelector("#card-template").content;

const cardContainer = document.querySelector(".places__list");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAdd = document.querySelector(".popup_type_new-card");
const editformElement = document.querySelector(".popup__form-edit");
const nameInput = document.querySelector(".popup__input_type_name");
const descriptionInput = document.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const addFormElement = document.querySelector(".popup__form-add");
const addNameInput = document.querySelector(".popup__input_type_card-name");
const addLinkInput = document.querySelector(".popup__input_type_url");

editProfileButton.addEventListener("click", () => openModal(popupTypeEdit));
addCardButton.addEventListener("click", () => openModal(popupTypeAdd));

nameInput.value = profileName.textContent;
descriptionInput.value = profileDescription.textContent;

editformElement.addEventListener("submit", handleFormSubmit);

addFormElement.addEventListener("submit", handleAddCardSubmit);

eventListener(popupTypeEdit);
eventListener(popupTypeAdd);
eventListener(popupTypeImage);

renderCards(initialCards);

export {
  cardTemplate,
  cardContainer,
  popupTypeImage,
  popupTypeAdd,
  popupTypeEdit,
  editformElement,
  nameInput,
  descriptionInput,
  profileName,
  profileDescription,
  editProfileButton,
  addCardButton,
  addFormElement,
  addNameInput,
  addLinkInput,
};
