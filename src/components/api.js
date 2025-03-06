const mainHost = "https://mesto.nomoreparties.co/v1/wff-cohort-33";
const token = "6218e83b-95d0-497f-9115-5a732a7605e7";

export const getProfileData = () => {
  return fetch(`${mainHost}/users/me`, {
    headers: {
      authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const getCards = () => {
  return fetch(`${mainHost}/cards`, {
    headers: {
      authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const saveUpdateProfile = (name, description) => {
  return fetch(`${mainHost}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: description,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const addNewCard = (cardName, link) => {
  return fetch(`${mainHost}/cards`, {
    method: "POST",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: cardName,
      link: link,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const removeCard = (cardId) => {
  return fetch(`${mainHost}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: token,
      "Content-Type": "application/json"
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const putLike = (cardId) => {
  return fetch(`${mainHost}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: {
      authorization: token,
      "Content-Type": "aplication/json"
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const deleteLike = (cardId) => {
  return fetch(`${mainHost}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization : token,
      "Content-Type": "application/json"
      
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const updateAvatar = (avatar) => {
  return fetch(`${mainHost}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      avatar: avatar
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
