import "./pages/index.css";
import { createCard, deleteCard, handleLike } from "./components/card";
import { openModal, setCloseModalWindowEventListeners, closeModal } from "./components/modal";
import {enableValidation, validationConfig, clearValidation} from "./components/validation";
import {getProfileData, getCards, saveUpdateProfile, addNewCard, updateAvatar} from "./components/api";

const cardContainer = document.querySelector(".places__list");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeAdd = document.querySelector(".popup_type_new-card");

const descriptionInput = document.querySelector(".popup__input_type_description");
const nameInput = document.querySelector(".popup__input_type_name");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");

const addFormElement = document.querySelector(".popup__form-add");
const editFormElement = document.querySelector(".popup__form-edit");

const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const addNameInput = document.querySelector(".popup__input_type_card-name");
const addLinkInput = document.querySelector(".popup__input_type_url");

const avatarButton = document.querySelector(".profile__image")
const popupTypeAvatar = document.querySelector('.popup_type_avatar')
const avatarInput = document.querySelector('.popup__input_type_avatar')
const avatarFormElement = document.querySelector('.popup__form-avatar')

const popupButtonTypeEdit = document.querySelector('.popup__button_edit')
const popupButtonTypeAdd = document.querySelector('.popup__button_add')
const popupButtonTypeAvatar = document.querySelector('.popup__button_avatar')

const updateProfile = (data) => {
  profileName.textContent = data.name;
  profileDescription.textContent = data.about;
  profileAvatar.style.backgroundImage = `url(${data.avatar})`;
}

const renderLoading = (isLoading, submitButton) => {
  submitButton.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
}

const handleChangeAvatarSubmit = (evt) => {
  evt.preventDefault();
  
  renderLoading(true, popupButtonTypeAvatar);

  updateAvatar(avatarInput.value)
    .then((data) => {
      avatarButton.style.backgroundImage = `url(${data.avatar})`;
      closeModal(popupTypeAvatar);
    })
    .catch((err) => {
      console.error('Ошибка:', err);
    })
    .finally(() => {
      renderLoading(false, popupButtonTypeAvatar)
    });
};

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

  renderLoading(true, popupButtonTypeAdd)

  addNewCard(addNameInput.value, addLinkInput.value)
  .then((data) => {
      addNameInput.value = data.name;
      addLinkInput.value = data.link;
      
      const newCardElement = createCard(
        data,
        deleteCard,
        handleLike,
        openImagePopup,
        userId
      );
      cardContainer.prepend(newCardElement);

      closeModal(popupTypeAdd);

      addFormElement.reset()

      clearValidation(addFormElement, validationConfig);
      console.log(data)
    }
  ).catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popupButtonTypeAdd)
  })
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  renderLoading(true, popupButtonTypeEdit)

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  saveUpdateProfile(nameInput.value, descriptionInput.value)
  .then((data) => {
    nameInput.textContent = data.name;
    descriptionInput.textContent = data.about;

    closeModal(popupTypeEdit);
  }).catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popupButtonTypeEdit)
  })
};

editProfileButton.addEventListener("click", () => {
  openModal(popupTypeEdit);

  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  clearValidation(editFormElement, validationConfig);
});
addCardButton.addEventListener("click", () => openModal(popupTypeAdd));

avatarButton.addEventListener("click", () => openModal(popupTypeAvatar))

editFormElement.addEventListener("submit", handleProfileFormSubmit);

addFormElement.addEventListener("submit", handleAddCardSubmit);

avatarFormElement.addEventListener("submit", handleChangeAvatarSubmit)

setCloseModalWindowEventListeners(popupTypeEdit);
setCloseModalWindowEventListeners(popupTypeAdd);
setCloseModalWindowEventListeners(popupTypeImage);
setCloseModalWindowEventListeners(popupTypeAvatar)

enableValidation(validationConfig);

let userId

Promise.all([getProfileData(), getCards()])
.then(([userData, cardsData]) => {
  updateProfile(userData);
userId = userData._id;
  cardsData.forEach((card) => {
    const renderCard = createCard(
      card,
      deleteCard,
      handleLike,
      openImagePopup,
      userId
    );
    cardContainer.append(renderCard);
  });
}).catch((err) => {
  console.log(err);
});
