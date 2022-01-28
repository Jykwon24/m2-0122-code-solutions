var $imgList = document.querySelectorAll('img');
var $progessCircle = document.querySelectorAll('.dot');
var $nextImg = document.querySelector('.next');
var $prevImg = document.querySelector('.prev');

var imgPosition = 0;

function updateImg() {
  for (var i = 0; i < $imgList.length; i++) {
    $imgList[i].className = 'hidden';
    $imgList[imgPosition].className = 'active';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[imgPosition].className = 'fas fa-circle';
  }
}

$nextImg.addEventListener('click', function (event) {
  if (imgPosition === $imgList.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updateImg();
});

$prevImg.addEventListener('click', function (event) {
  if (imgPosition === 0) {
    imgPosition = $imgList.length - 1;
  } else {
    imgPosition--;
  }
  updateImg();
});

var $dot1 = document.querySelector('.dot-1');
var $dot2 = document.querySelector('.dot-2');
var $dot3 = document.querySelector('.dot-3');
var $dot4 = document.querySelector('.dot-4');
var $dot5 = document.querySelector('.dot-5');

$dot1.addEventListener('click', function (event) {
  for (var i = 0; $imgList.length - 1; i++) {
    $imgList[0].className = 'img-sizing active';
    $imgList[i].className = 'img-sizing hidden';
    $progessCircle[i].className = 'dot far fa-circle';
    $progessCircle[0].className = 'dot fas fa-circle';
  }
  imgPosition = 0;
});

$dot2.addEventListener('click', function (event) {
  for (var i = 0; $imgList.length - 1; i++) {
    $imgList[1].className = 'active';
    $imgList[i].className = 'hidden';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[1].className = 'fas fa-circle';
  }
  imgPosition += imgPosition + 1;
});

$dot3.addEventListener('click', function (event) {
  for (var i = 0; $imgList.length - 1; i++) {
    $imgList[2].className = 'active';
    $imgList[i].className = 'hidden';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[2].className = 'fas fa-circle';
  }
  imgPosition += imgPosition + 2;
});

$dot4.addEventListener('click', function (event) {
  for (var i = 0; $imgList.length - 1; i++) {
    $imgList[3].className = 'active';
    $imgList[i].className = 'hidden';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[3].className = 'fas fa-circle';
  }
  imgPosition += imgPosition + 3;
});

$dot5.addEventListener('click', function (event) {
  for (var i = 0; $imgList.length - 1; i++) {
    $imgList[4].className = 'active';
    $imgList[i].className = 'hidden';
    $progessCircle[i].className = 'far fa-circle';
    $progessCircle[4].className = 'fas fa-circle';
  }
  imgPosition += imgPosition + 4;
});

function carouselImg() {
  if (imgPosition === $imgList.length - 1) {
    imgPosition = 0;
  } else {
    imgPosition++;
  }
  updateImg();
}

setInterval(function () { carouselImg(); }, 3000);
