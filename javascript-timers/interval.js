var $counter = document.querySelector('.countdown-display');

var intId = setInterval(countDown, 1000);

function countDown() {
  $counter.textContent--;
  if ($counter.textContent === '0') {
    $counter.textContent = '~Earth Beeeelooow Us~';
    clearInterval(intId);
  }
}
