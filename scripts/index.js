// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(Data, cardDelete) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    
    cardElement.querySelector('.card__image').src = Data.link;
    cardElement.querySelector('.card__image').alt = Data.name;
    cardElement.querySelector('.card__title').textContent = Data.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', function() {
        cardDelete(cardElement);
    });

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу
function renderCards(Cards) {
    Cards.forEach(function (Data) {
        const renderCard = createCard(Data, deleteCard);
        cardContainer.append(renderCard);
    });
}

renderCards(initialCards)
