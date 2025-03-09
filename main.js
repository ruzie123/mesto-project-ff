(()=>{"use strict";var t="https://mesto.nomoreparties.co/v1/wff-cohort-33",e="6218e83b-95d0-497f-9115-5a732a7605e7",n="application/json",o=function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))},r=document.querySelector("#card-template").content,c=function(t,e,n,o,c){var a=r.querySelector(".places__item").cloneNode(!0);a.querySelector(".card__image").src=t.link,a.querySelector(".card__image").alt=t.name,a.querySelector(".card__title").textContent=t.name;var u=a.querySelector(".card__delete-button");t.owner._id===c?u.addEventListener("click",(function(){e(a,t._id)})):u.remove();var i=a.querySelector(".card__like-button"),l=a.querySelector(".card__like-counter");return t.likes.some((function(t){return t._id===c}))&&i.classList.add("card__like-button_is-active"),l.textContent=t.likes.length,i.addEventListener("click",(function(){n(i,l,t._id)})),a.querySelector(".card__image").addEventListener("click",(function(){o(t.link,t.name)})),a},a=function(r,c){(function(r){return fetch("".concat(t,"/cards/").concat(r),{method:"DELETE",headers:{authorization:e,"Content-Type":n}}).then(o)})(c).then((function(){r.remove()})).catch((function(t){console.log(t)}))},u=function(r,c,a){r.classList.contains("card__like-button_is-active")?function(r){return fetch("".concat(t,"/cards/likes/").concat(r),{method:"DELETE",headers:{authorization:e,"Content-Type":n}}).then(o)}(a).then((function(t){r.classList.remove("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(t){console.log(t)})):function(r){return fetch("".concat(t,"/cards/likes/").concat(r),{method:"PUT",headers:{authorization:e,"Content-Type":n}}).then(o)}(a).then((function(t){r.classList.add("card__like-button_is-active"),c.textContent=t.likes.length})).catch((function(t){console.log(t)}))},i=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");e&&s(e)}},l=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",i)},s=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)},d=function(t){t.querySelector(".popup__close").addEventListener("click",(function(){s(t)})),t.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&s(t)}))},p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type-error",errorClass:"form__input-error_active"},f=function(t,e,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""},_=function(t,e,n){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(n.inactiveButtonClass)):(e.disabled=!0,e.classList.add(n.inactiveButtonClass))},m=function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);n.forEach((function(n){f(t,n,e)})),_(n,o,e)};function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var v,h,S=document.querySelector(".places__list"),q=document.querySelector(".popup_type_image"),b=document.querySelector(".popup_type_edit"),C=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup__input_type_description"),k=document.querySelector(".popup__input_type_name"),E=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),x=document.querySelector(".profile__image"),A=document.querySelector(".popup__form-add"),T=document.querySelector(".popup__form-edit"),w=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),j=document.querySelector(".popup__input_type_card-name"),O=document.querySelector(".popup__input_type_url"),B=document.querySelector(".profile__image"),P=document.querySelector(".popup_type_avatar"),D=document.querySelector(".popup__input_type_avatar"),I=document.querySelector(".popup__form-avatar"),M=document.querySelector(".popup__button_edit"),N=document.querySelector(".popup__button_add"),J=document.querySelector(".popup__button_avatar"),H=function(t,e){e.textContent=t?"Сохранение...":"Сохранить"},U=function(t,e){var n=q.querySelector(".popup__image"),o=q.querySelector(".popup__caption");n.src=t,n.alt=e,o.textContent=e,l(q)};w.addEventListener("click",(function(){l(b),k.value=E.textContent,g.value=L.textContent,m(T,p)})),z.addEventListener("click",(function(){return l(C)})),B.addEventListener("click",(function(){return l(P)})),T.addEventListener("submit",(function(r){var c,a;r.preventDefault(),H(!0,M),E.textContent=k.value,L.textContent=g.value,(c=k.value,a=g.value,fetch("".concat(t,"/users/me"),{method:"PATCH",headers:{authorization:e,"Content-Type":n},body:JSON.stringify({name:c,about:a})}).then(o)).then((function(t){k.textContent=t.name,g.textContent=t.about,s(b)})).catch((function(t){console.log(t)})).finally((function(){H(!1,M)}))})),A.addEventListener("submit",(function(r){var i,l;r.preventDefault(),H(!0,N),(i=j.value,l=O.value,fetch("".concat(t,"/cards"),{method:"POST",headers:{authorization:e,"Content-Type":n},body:JSON.stringify({name:i,link:l})}).then(o)).then((function(t){j.value=t.name,O.value=t.link;var e=c(t,a,u,U,h);S.prepend(e),s(C),A.reset(),m(A,p),console.log(t)})).catch((function(t){console.log(t)})).finally((function(){H(!1,N)}))})),I.addEventListener("submit",(function(r){var c;r.preventDefault(),H(!0,J),(c=D.value,fetch("".concat(t,"/users/me/avatar"),{method:"PATCH",headers:{authorization:e,"Content-Type":n},body:JSON.stringify({avatar:c})}).then(o)).then((function(t){B.style.backgroundImage="url(".concat(t.avatar,")"),s(P)})).catch((function(t){console.error("Ошибка:",t)})).finally((function(){H(!1,J)}))})),d(b),d(C),d(q),d(P),v=p,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(t){!function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);_(n,o,e),n.forEach((function(r){r.addEventListener("input",(function(){!function(t,e,n){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?f(t,e,n):function(t,e,n,o){var r=t.querySelector(".".concat(e.id,"-error"));e.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(t,e,e.validationMessage,n)}(t,r,e),_(n,o,e)}))}))}(t,v)})),Promise.all([fetch("".concat(t,"/users/me"),{headers:{authorization:e}}).then(o),fetch("".concat(t,"/cards"),{headers:{authorization:e}}).then(o)]).then((function(t){var e,n,o,r=(o=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==e);i=!0);}catch(t){l=!0,r=t}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(n,o)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],l=r[1];e=i,E.textContent=e.name,L.textContent=e.about,x.style.backgroundImage="url(".concat(e.avatar,")"),h=i._id,l.forEach((function(t){var e=c(t,a,u,U,h);S.append(e)}))})).catch((function(t){console.log(t)}))})();