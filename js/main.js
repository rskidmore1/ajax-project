
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtnDiv = document.querySelector('.accept-btn-div');

var rejectBtn = document.querySelector('.reject-btn');

var acceptBtn = document.querySelector('.accept-btn');

var collectionView = document.querySelector('.collection-view');

var foxProfile = document.querySelector('.img-row');

var collectionA = document.querySelector('.collection-a');

var summonA = document.querySelector('.summon-a');

var image = '';

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

  // var warningText = document.querySelector('.warning');
  data.collection.push({ foxImage: image, quote: '' });
  // switchView('')

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
    // switchView('profile');
    // consolesole.log('fox profile clicked');
    // consolesole.log(event.target.getAttribute('id-number'));
    // consolesole.log(event.target.src);
    var profileImg = document.querySelector('.profile-img');
    profileImg.setAttribute('src', event.target.src);
    profileImg.setAttribute('id-number', event.target.getAttribute('id-number'));
  }
}

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);

window.addEventListener('DOMContentLoaded', function (event) {
  collectionLoad(collectionView);
  // switchView(data.view);
});

foxProfile.addEventListener('click', loadProfile);

function summonView() {
  // switchView('summon');
}
function collectionShow() {
  // debugger;
  // switchView('collection');
}

summonA.addEventListener('click', summonView);

collectionA.addEventListener('click', collectionShow);
// switchview
// function switchView(view) {
//   var dataViewList = document.querySelectorAll('div[data-view]');
//   for (var i = 0; i < dataViewList.length; i++) {
//     if (dataViewList[i].getAttribute('data-view') !== view) {
//       dataViewList[i].classList.add('hidden');
//     } else if (dataViewList[i].getAttribute('data-view') === view) {
//       dataViewList[i].classList.remove('hidden');
//     }
//   }
//   data.view = view;

// }
