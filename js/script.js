var link = document.querySelector(".contacts-data .button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.remove("modal-error");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    }
  }
});
 var mapLink = document.querySelector(".contacts-button-map");
 var mapPopup = document.querySelector(".modal-map");
 var mapClose = mapPopup.querySelector(".modal-close");
 mapLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapPopup.classList.add("modal-show");
 });
 mapClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   mapPopup.classList.remove("modal-show");
 });
 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
 });
 var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(59.938939, 30.323105),
    mapTypeId: 'roadmap'
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.938939, 30.323105),
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Офис Nёrds design studio',
  });
  marker.addListener('click', toggleBounce);
 }
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}