
var summonBtn = document.querySelector('.summon-btn');

var summonImg = document.querySelector('.image');

var acceptBtnDiv = document.querySelector('.accept-btn-div');

var rejectBtn = document.querySelector('.reject-btn');

var acceptBtn = document.querySelector('.accept-btn');


// var croppedWrong = ['https://randomfox.ca/images/10.jpg', 'https://randomfox.ca/images/7.jpg', 'https://randomfox.ca/images/22.jpg', 'https://randomfox.ca/images/1.jpg', 'https://randomfox.ca/images/17.jpg', 'https://randomfox.ca/images/1.jpg', 'https://randomfox.ca/images/30.jpg', 'https://randomfox.ca/images/102.jpg', 'https://randomfox.ca/images/38.jpg', 'https://randomfox.ca/images/4.jpg', 'https://randomfox.ca/images/14.jpg', 'https://randomfox.ca/images/23.jpg', 'https://randomfox.ca/images/35.jpg', 'https://randomfox.ca/images/6.jpg']


function getMeta(url) {
  var img = new Image();
  img.addEventListener("load", function () {
    if (this.naturalWidth + 100 < this.naturalHeight) {
      console.log('image is too long')
      var warningText = document.querySelector('.warning');
      warningText.textContent = 'This fox seems to be off their center. Bad vibes! Please proceed with caution';
    } else {
      var warningText = document.querySelector('.warning');
      warningText.textContent = '';
    }
  });
  img.src = url;
}

var image = ''

function getLoadFox() {



  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://randomfox.ca/floof/');  // http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]

  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {

    console.log(xhr.status);
    console.log(xhr.response);

    summonImg.setAttribute("src", xhr.response.image)
    getMeta(xhr.response.image);
    image = xhr.response.image;

    summonBtn.classList.add('hidden');

    acceptBtnDiv.classList.remove('hidden');




  });

  xhr.send();


}

function rejectFox() {
  summonBtn.classList.remove('hidden');

  acceptBtnDiv.classList.add('hidden');

  summonImg.setAttribute("src", 'images/fox.png');
}

function acceptFox() {
  summonBtn.classList.remove('hidden');

  acceptBtnDiv.classList.add('hidden');

  summonImg.setAttribute("src", 'images/fox.png');
  data.collection.push({ foxImage: image, quote: '' });

}

summonBtn.addEventListener('click', getLoadFox);

rejectBtn.addEventListener('click', rejectFox);

acceptBtn.addEventListener('click', acceptFox);
