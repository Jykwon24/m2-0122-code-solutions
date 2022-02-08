var $userList = document.getElementById('user-list');

function xhr() {
  var firstXhr = new XMLHttpRequest();
  firstXhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  firstXhr.responseType = 'json';
  firstXhr.addEventListener('load', function () {
    console.log(firstXhr.status);
    console.log(firstXhr.response);
    for (var i = 0; i < firstXhr.response.length; i++) {
      var $userNames = document.createElement('li');
      $userNames.textContent = firstXhr.response[i].name;
      $userList.appendChild($userNames);
    }
  });
  firstXhr.send();
}

xhr();
