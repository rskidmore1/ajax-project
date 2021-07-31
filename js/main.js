
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

var stayBtn = document.querySelector('.stay-modal-btn');

var quoteBtn = document.querySelector('.quote-btn');

var quoteModal = document.querySelector('.quote-modal-div');

var keepBtn = document.querySelector('.keep-modal-btn');

var newQuoteBtn = document.querySelector('.quote-modal-btn');

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
      var collectionText = document.createElement('p');
      collectionText.classList.add('collection-text');
      collectionText.classList.add('merienda');
      collectionText.textContent = data.collection[i].quote;
      thirdColdiv.appendChild(collectionImg);
      thirdColdiv.appendChild(collectionText);
      query.childNodes[1].appendChild(thirdColdiv);
    }

  }
  return query;
}

function loadProfile(event) {
  var profileImg = document.querySelector('.profile-img');
  var quoteText = document.querySelector('.quote');
  if (event.target.tagName === 'IMG') {

    profileImg.setAttribute('src', event.target.src);
    profileImg.setAttribute('id-number', event.target.getAttribute('id-number'));
    profileIndex = Number(event.target.getAttribute('id-number'));
    quoteText.textContent = event.target.parentElement.querySelector('p').textContent;

    data.editing = [data.collection[profileIndex], profileIndex];

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
  var modalDiv = document.querySelector('.release-modal-div');
  modalDiv.classList.remove('hidden');
}

function releaseFox() {
  data.collection.splice(profileIndex, 1);
  var modalDiv = document.querySelector('.release-modal-div');
  modalDiv.classList.add('hidden');
  var foxImg = document.querySelector('img[id-number="' + profileIndex + '"]');
  foxImg.parentElement.remove();

  switchView('collection');
}

function stay() {
  var modalDiv = document.querySelector('.release-modal-div');
  modalDiv.classList.add('hidden');
}

function showQuoteModal() {
  if (data.collection[profileIndex].quote === '') {
    getQuote();
  } else {
    quoteModal.classList.remove('hidden');
  }
}

function getNewQuote() {
  getQuote();
  quoteModal.classList.add('hidden');
}

function getQuote() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://animechan.vercel.app/api/random');

  var quoteP = document.querySelector('.quote');

  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    var quote = xhr.response.quote;
    var quoteWords = quote.split(' ');
    if (quoteWords.length > 50) {
      var quoteSent = quote.split('.');
      quoteSent.splice(0, 3);
      quote = quoteSent.join();
    }

    quoteP.textContent = quote;
    data.collection[profileIndex].quote = xhr.response.quote;

  });
  xhr.send();

}

function keepQuote() {
  quoteModal.classList.add('hidden');
}

summonA.addEventListener('click', summonView);

collectionA.addEventListener('click', collectionShow);

releaseMeBtn.addEventListener('click', releaseModal);

releaseBeBtn.addEventListener('click', releaseFox);

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);

foxProfile.addEventListener('click', loadProfile);

stayBtn.addEventListener('click', stay);

quoteBtn.addEventListener('click', showQuoteModal);

keepBtn.addEventListener('click', keepQuote);

newQuoteBtn.addEventListener('click', getNewQuote);

window.addEventListener('DOMContentLoaded', function (event) {

  collectionLoad(collectionView);
  switchView(data.view);

});
