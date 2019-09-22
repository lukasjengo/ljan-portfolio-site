function addEventListenerBySelector(selector, event, fn) {
  var list = Array.from(document.querySelectorAll(selector));
  for (var i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

function handleClickAddClass(e) {
  var popup;
  if (!e.target.dataset.popup) {
    popup = document.querySelector('#' + e.target.parentNode.dataset.popup);
  } else {
    popup = document.querySelector('#' + e.target.dataset.popup);
  }
  popup.classList.add('popup--active');
}

function handleClickRemoveClass(e) {
  var popup = e.target.closest('.popup');
  popup.classList.remove('popup--active');
}

addEventListenerBySelector('#popup-btn', 'click', handleClickAddClass);
addEventListenerBySelector('.popup', 'click', handleClickRemoveClass);
