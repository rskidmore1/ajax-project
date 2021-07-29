
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtnDiv = document.querySelector('.accept-btn-div');

var rejectBtn = document.querySelector('.reject-btn');

var acceptBtn = document.querySelector('.accept-btn');

var collectionView = document.querySelector('.collection-view');

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
      thirdColdiv.appendChild(collectionImg);
      query.childNodes[1].appendChild(thirdColdiv);
    }

  }
  return query;
}

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);

window.addEventListener('DOMContentLoaded', function (event) {
  collectionLoad(collectionView);
});
