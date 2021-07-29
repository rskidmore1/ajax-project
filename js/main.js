
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtnDiv = document.querySelector('.accept-btn-div');

var rejectBtn = document.querySelector('.reject-btn');

var acceptBtn = document.querySelector('.accept-btn');

var image = '';

function getLoadFox() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/');

  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    // console.log(xhr.status);
    // console.log(xhr.response);

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

}

function acceptFox() {
  summonBtn.classList.remove('hidden');

  acceptBtnDiv.classList.add('hidden');

  summonImg.setAttribute('src', 'images/pleasesummon.png');

  data.collection.push({ foxImage: image, quote: '' });

}

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);

window.addEventListener('DOMContentLoaded', function (event) {
  var collectionView = document.querySelectorAll('.collection-img');
  for (var i = 0; i < data.collection.length; i++) {
    if (i > 7) {
      break;
    } else {
      collectionView[i].setAttribute('src', data.collection[i].foxImage);
    }

  }
});
