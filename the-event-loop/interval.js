let currentCount = 3;

const intervalID = setInterval(function () {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  } else {
    console.log(currentCount--);
  }
}, 1000);
