let currentCount = 3;

const intervalID = setInterval(function () {
  console.log(currentCount--);
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}, 1000);
