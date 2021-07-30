
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtnDiv = document.querySelector('.accept-btn-div');

var rejectBtn = document.querySelector('.reject-btn');

var acceptBtn = document.querySelector('.accept-btn');

var collectionView = document.querySelector('.collection-view');

var foxProfile = document.querySelector('.img-row');

var collectionA = document.querySelector('.collection-a');

var summonA = document.querySelector('.summon-a');

var releaseMeBtn = document.querySelector('.release-btn');

var releaseBeBtn = document.querySelector('.release-modal-btn');

var image = '';

var profileIndex = 0;

function getLoadFox() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    summonImg.setAttribute('src', xhr.response.image);
    image = xhr.response.image;
    summonBtn.classList.add('hidden');
    acceptBtnDiv.classList.remove('hidden');
  });
  xhr.send();
}

function rejectFox() {
  summonBtn.classList.remove('hidden');

  acceptBtnDiv.classList.add('hidden');

  summonImg.setAttribute('src', 'images/pleasesummon.png');

  var warningText = document.querySelector('.warning');
  warningText.textContent = '';

}

function acceptFox() {
  summonBtn.classList.remove('hidden');

  acceptBtnDiv.classList.add('hidden');

  summonImg.setAttribute('src', 'images/pleasesummon.png');

  data.collection.push({ foxImage: image, quote: '' });

}

function collectionLoad(query) {

  for (var i = 0; i < data.collection.length; i++) {
    if (i < 7) {
      var thirdColdiv = document.createElement('div');
      thirdColdiv.classList.add('column-third');
      thirdColdiv.classList.add('collection-item');
      var collectionImg = document.createElement('img');
      collectionImg.classList.add('collection-img');
      collectionImg.setAttribute('src', data.collection[i].foxImage);
      collectionImg.setAttribute('id-number', i);
      thirdColdiv.appendChild(collectionImg);
      query.childNodes[1].appendChild(thirdColdiv);
    }

  }
  return query;
}

function loadProfile(event) {
  if (event.target.tagName === 'IMG') {

    var profileImg = document.querySelector('.profile-img');
    profileImg.setAttribute('src', event.target.src);
    profileImg.setAttribute('id-number', event.target.getAttribute('id-number'));
    profileIndex = Number(event.target.getAttribute('id-number'));
    switchView('profile');
  }
}

function switchView(view) {
  var dataViewList = document.querySelectorAll('div[data-view]');
  for (var i = 0; i < dataViewList.length; i++) {
    if (dataViewList[i].getAttribute('data-view') !== view) {
      dataViewList[i].classList.add('hidden');
    } else if (dataViewList[i].getAttribute('data-view') === view) {
      dataViewList[i].classList.remove('hidden');
    }
  }
  data.view = view;

}

function summonView() {
  switchView('summon');
}
function collectionShow() {
  switchView('collection');
}

function releaseModal() {
  var modalDiv = document.querySelector('.modal-div');
  modalDiv.classList.remove('hidden');
}

function releaseFox() {
  data.collection.splice(profileIndex, 1);
  var modalDiv = document.querySelector('.modal-div');
  modalDiv.classList.add('hidden');
  var foxImg = document.querySelector('img[id-number="' + profileIndex + '"]');
  foxImg.parentElement.remove();

  switchView('collection');
}

summonA.addEventListener('click', summonView);

collectionA.addEventListener('click', collectionShow);

releaseMeBtn.addEventListener('click', releaseModal);

releaseBeBtn.addEventListener('click', releaseFox);

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);

foxProfile.addEventListener('click', loadProfile);

window.addEventListener('DOMContentLoaded', function (event) {
  collectionLoad(collectionView);
  switchView(data.view);
});
