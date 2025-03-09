const apiConfig = {
  mainHost: "https://mesto.nomoreparties.co/v1/wff-cohort-33",
  headers: {
    authorization: "6218e83b-95d0-497f-9115-5a732a7605e7",
    "Content-Type": "application/json"
  }
}

export const getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
} 

export const getProfileData = () => {
  return fetch(`${apiConfig.mainHost}/users/me`, {
    headers: apiConfig.headers,
  }).then(getResponseData)
};

export const getCards = () => {
  return fetch(`${apiConfig.mainHost}/cards`, {
    headers: apiConfig.headers,
  }).then(getResponseData)
};

export const saveUpdateProfile = (name, description) => {
  return fetch(`${apiConfig.mainHost}/users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: description,
    }),
  }).then(getResponseData)
};

export const addNewCard = (cardName, link) => {
  return fetch(`${apiConfig.mainHost}/cards`, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: cardName,
      link: link,
    }),
  }).then(getResponseData)
};

export const removeCard = (cardId) => {
  return fetch(`${apiConfig.mainHost}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(getResponseData)
}

export const putLike = (cardId) => {
  return fetch(`${apiConfig.mainHost}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: apiConfig.headers,
  }).then(getResponseData)
}

export const deleteLike = (cardId) => {
  return fetch(`${apiConfig.mainHost}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  }).then(getResponseData)
};

export const updateAvatar = (avatar) => {
  return fetch(`${apiConfig.mainHost}/users/me/avatar`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: avatar
    }),
  }).then(getResponseData)
};
