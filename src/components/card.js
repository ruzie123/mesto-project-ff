import { removeCard, deleteLike, putLike } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

export const createCard = (data, cardDelete, cardLike, openImagePopup, currentUserId) => {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__image").alt = data.name;
  cardElement.querySelector(".card__title").textContent = data.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  
  if (data.owner._id === currentUserId) {
    deleteButton.addEventListener("click", () => {
      cardDelete(cardElement, data._id);
    }); 
  } else {
    deleteButton.remove();
  }
  
  const likeButton = cardElement.querySelector(".card__like-button");
  const likesCount = cardElement.querySelector(".card__like-counter");

  if (data.likes.some(like => like._id === currentUserId)) {
    likeButton.classList.add("card__like-button_is-active");
  }
  likesCount.textContent = data.likes.length;

  likeButton.addEventListener("click", () => {
    cardLike(likeButton, likesCount, data._id);
  });
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", () => {
    openImagePopup(data.link, data.name);
  });

  return cardElement;
};

export const deleteCard = (item, cardId) => {
  removeCard(cardId)
  .then(() => {
    item.remove();
  })
  .catch((err) => {
    console.log(err);
  }); 
};

export const handleLike = (buttonItem, countItem, cardId) => {

const isLiked = buttonItem.classList.contains("card__like-button_is-active");

  if (isLiked) {
    deleteLike(cardId)
      .then(data => {
        buttonItem.classList.remove("card__like-button_is-active");
        countItem.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      }); 
  } else {
    putLike(cardId)
      .then(data => {
        buttonItem.classList.add("card__like-button_is-active");
        countItem.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
};
}
